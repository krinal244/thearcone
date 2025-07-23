"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = form;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!firstName || !lastName || !email || !phone || !message) return false;
    if (!emailRegex.test(email)) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!validateForm()) {
      setStatus("error");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
   <section id="contact" className="w-full min-h-screen bg-[#0f0f10] px-4 md:px-20 py-16 text-white">
  <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-12">
    Contact Page
  </h1>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <img
            
            src="contact.jpg"
            alt="Contact"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover relative z-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-1/2 bg-gradient-to-br from-[#1a1a1a] to-[#141414] p-8 rounded-3xl shadow-2xl border border-[#333] relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 2 }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-10 blur-3xl pointer-events-none"
          />

          <h2 className="text-4xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Let’s Talk
          </h2>
          <p className="mb-6 text-gray-300">
            We’d love to hear from you! Fill out the form below and we’ll get in touch.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-1/2 px-4 py-3 rounded-lg bg-[#1e1e1e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-1/2 px-4 py-3 rounded-lg bg-[#1e1e1e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1e1e1e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1e1e1e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1e1e1e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold text-lg tracking-wide shadow-lg transition-all duration-300 hover:shadow-pink-500/50 disabled:opacity-50"
            >
              {loading ? "Sending..." : "🚀 Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500"
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500"
              >
                ❌ Failed to send message. Please check your info.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
