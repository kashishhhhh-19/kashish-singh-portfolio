import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '', // Honeypot field for spam bots
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot field
    if (formData._gotcha) {
      setStatus('success');
      return;
    }

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields before sending.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // If Formspree endpoint is available
    if (siteConfig.formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '', _gotcha: '' });
        } else {
          const data = await response.json();
          setStatus('error');
          setErrorMessage(data?.error || 'Failed to submit via endpoint. Please use direct email.');
        }
      } catch (err) {
        console.error('Contact transmission error:', err);
        setStatus('error');
        setErrorMessage('Network error occurred. Please transmit directly to Kashishsingh422@gmail.com.');
      }
    } else {
      // Direct mailto fallback when endpoint is unconfigured
      const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Kashish,\n\n${formData.message}\n\nSender Name: ${formData.name}\nSender Email: ${formData.email}`
      );
      window.location.href = `mailto:${siteConfig.personal.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      setFormData({ name: '', email: '', message: '', _gotcha: '' });
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-14 border border-lavender/20 bg-midnight-850/80 shadow-2xl relative overflow-hidden">
          {/* Subtle Botanical Corner Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-lavender-glow rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-glow rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender/10 border border-lavender/20 text-lavender-light text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>Direct Transmission</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-floral-white leading-[1.05] mb-5 tracking-tight">
              LET'S WORK<br />
              <span className="text-shimmer-gold">TOGETHER</span>
            </h2>

            <p className="text-floral-muted text-base sm:text-lg mb-8 leading-relaxed font-sans">
              Looking for a dedicated software developer? Send a direct transmission to{' '}
              <a
                href={`mailto:${siteConfig.personal.email}`}
                className="text-floral-white underline decoration-gold/60 underline-offset-4 hover:text-gold transition-colors font-mono"
              >
                {siteConfig.personal.email}
              </a>{' '}
              or submit the contact form below.
            </p>

            {/* Real Submission Form */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate name="contact" data-netlify="true" netlify-honeypot="_gotcha">
              {/* Spam Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="_gotcha">Leave this empty</label>
                <input
                  type="text"
                  id="_gotcha"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-midnight-900 border border-lavender/15 text-floral-white placeholder:text-floral-dim focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/60 transition-all text-sm font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="form-email" className="sr-only">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-midnight-900 border border-lavender/15 text-floral-white placeholder:text-floral-dim focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/60 transition-all text-sm font-sans"
                  />
                </div>
              </div>

              {/* Row 2: Message */}
              <div>
                <label htmlFor="form-message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, role, or collaboration opportunity..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-midnight-900 border border-lavender/15 text-floral-white placeholder:text-floral-dim focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/60 transition-all text-sm font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3.5 rounded-xl font-medium bg-floral-white text-midnight-950 hover:bg-lavender-light border border-white/40 shadow-[0_0_20px_rgba(245,241,250,0.25)] hover:shadow-[0_0_25px_rgba(182,154,232,0.4)] transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base font-semibold cursor-pointer disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-midnight-950 border-t-transparent animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {/* Status Feedback Banners */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-lavender/10 border border-lavender/30 text-lavender flex items-center gap-2.5 text-sm font-medium animate-in fade-in duration-300">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>
                    Thank you! Your message transmission has been processed. I will reply to your email promptly.
                  </span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 flex items-center gap-2.5 text-sm font-medium animate-in fade-in duration-300">
                  <AlertCircle size={18} className="text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
