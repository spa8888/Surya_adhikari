import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Send notification to ntfy.sh
      const notificationMessage = `New Contact Form Submission!\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      
      const response = await fetch('https://ntfy.sh/suryaad888', {
        method: 'POST',
        body: notificationMessage,
        headers: {
          'Title': 'Portfolio Contact Form',
          'Priority': 'high',
          'Tags': 'email,person'
        }
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me on LinkedIn.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get in Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-200 leading-relaxed mb-8">
              Open to collaborations on carbon projects, climate solutions, and forestry research.
            </p>

            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/surya-adhikari"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover rounded-lg p-4 flex items-center gap-4"
              >
                <Linkedin className="text-emerald-400" size={24} />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-white/60">500+ connections</p>
                </div>
              </a>

              <div className="glass rounded-lg p-4 flex items-center gap-4">
                <MapPin className="text-emerald-400" size={24} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-white/60">Conway, Arkansas, USA</p>
                </div>
              </div>

              <a
                href="mailto:SP888a@gmail.com"
                className="glass glass-hover rounded-lg p-4 flex items-center gap-4"
              >
                <Mail className="text-emerald-400" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-white/60">SP888a@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-xl p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300'
                      : 'bg-red-500/20 border border-red-500/30 text-red-300'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full glass glass-hover rounded-lg px-6 py-3 font-medium flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

