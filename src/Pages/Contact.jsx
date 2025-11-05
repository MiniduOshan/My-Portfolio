import React, { useState } from "react";

const EMAIL = "miniduoshan23@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (ev) => {
    const { id, value } = ev.target;
    setForm((f) => ({ ...f, [id]: value }));
    if (errors[id]) setErrors((e) => ({ ...e, [id]: undefined }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const subject = `Portfolio Contact from ${form.name}`;
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `Message:\n${form.message}\n\n` +
      `— sent from portfolio contact page`;

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="flex flex-col items-center py-10 px-6 text-gray-100">
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-300 mb-10 text-center max-w-xl">
        Have a question or a project in mind? Send me a message and I’ll get back to you.
      </p>

      {/* single centered card */}
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className={`w-full p-3 bg-white/20 border rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                errors.name ? "border-red-400" : "border-white/30"
              }`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-2 00 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full p-3 bg-white/20 border rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                errors.email ? "border-red-400" : "border-white/30"
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={`w-full p-3 bg-white/20 border rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                errors.message ? "border-red-400" : "border-white/30"
              }`}
              placeholder="Your message..."
            />
            {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-300 text-sm mt-3">
              ✅ Message ready! Check your email app — it should open with your message prefilled.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
