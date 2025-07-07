"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";

export default function ContactMePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ success: true, message: data.message || "Message sent!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setResult({ success: false, message: data.message || "Failed to send message." });
      }
    } catch (err) {
      setResult({ success: false, message: "Something went wrong. Please try again later." });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-3xl flex justify-start mb-6">
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <FaArrowLeft className="text-lg" />
          Go to Home Page
        </Link>
      </div>
      <div className="bg-zinc-900 rounded-2xl shadow-lg p-8 w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">Contact Me</h1>
        <p className="text-zinc-300 text-lg mb-8 text-center">Feel free to reach out for collaborations, questions, or just to say hello!</p>
        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-cyan-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-cyan-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-cyan-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-200 text-lg disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <FaPaperPlane /> {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {result && (
          <div className={`mt-6 text-center font-semibold ${result.success ? "text-green-400" : "text-red-400"}`}>
            {result.message}
          </div>
        )}
      </div>
    </div>
  );
}
