import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/site';
import { socialConfig } from '../data/social';
import { GoldSectionDivider } from '../animations/GoldSectionDivider';
import { ShimmerButton } from '../components/ShimmerButton';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ContactSection() {
  const reducedMotion = useReducedMotion();

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '', // Honeypot spam protection field
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot spam field
    if (formData._gotcha) {
      // Silently discard bot submission
      return;
    }

    if (!validate()) {
      return;
    }

    const formspreeEndpoint = siteConfig.formspreeId
      ? `https://formspree.io/f/${siteConfig.formspreeId}`
      : null;

    if (!formspreeEndpoint) {
      setStatus('error');
      setErrorMessage(
        'The contact form endpoint is not configured yet (missing VITE_FORMSPREE_ID). Please reach out via GitHub or configure the endpoint in your .env file.'
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
          _gotcha: '',
        });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(
          data?.error ||
            'Failed to send message. Please verify your connection or try again shortly.'
        );
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        'A network error occurred while sending your message. Please try again or reach out through GitHub.'
      );
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#09090F] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] pointer-events-none rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(113,83,165,0.2) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B9A0E8] font-semibold">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#F8F6FA] mt-2">
            LET'S BUILD SOMETHING GREAT TOGETHER.
          </h2>
          <GoldSectionDivider />
          <p className="text-sm sm:text-base text-[#D8C8F3] font-light max-w-xl mx-auto">
            I'm open to exploring software development opportunities, internships and collaborations. Feel free to connect with me.
          </p>
        </motion.div>

        {/* Two-Column Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Social & Contact Channels */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#171521] border border-[#B9A0E8]/25 shadow-lg space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F8F6FA]">
                  Contact Channels
                </h3>
                <p className="text-xs sm:text-sm text-[#AAA5B5]">
                  Reach out for development roles, project discussions or technical opportunities.
                </p>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#11111B] border border-[#B9A0E8]/15 hover:border-[#D4AF37]/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-[#09090F] text-[#D4AF37] border border-[#D4AF37]/20">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#AAA5B5] block">
                    GitHub Profile
                  </span>
                  <a
                    href={socialConfig.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#F8F6FA] hover:text-[#D8C8F3] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    github.com/kashishhhhh-19
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#11111B] border border-[#B9A0E8]/15 hover:border-[#D4AF37]/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-[#09090F] text-[#B9A0E8] border border-[#B9A0E8]/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#AAA5B5] block">
                    LinkedIn Network
                  </span>
                  {socialConfig.linkedin.isPlaceholder ? (
                    <span className="text-xs italic text-[#AAA5B5]/70 block mt-0.5">
                      {socialConfig.linkedin.url}
                    </span>
                  ) : (
                    <a
                      href={socialConfig.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#F8F6FA] hover:text-[#D8C8F3] transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#11111B] border border-[#B9A0E8]/15 hover:border-[#D4AF37]/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-[#09090F] text-[#D4AF37] border border-[#D4AF37]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#AAA5B5] block">
                    Direct Email
                  </span>
                  {socialConfig.email.isPlaceholder ? (
                    <span className="text-xs italic text-[#AAA5B5]/70 block mt-0.5">
                      {socialConfig.email.address}
                    </span>
                  ) : (
                    <a
                      href={`mailto:${socialConfig.email.address}`}
                      className="text-sm font-semibold text-[#F8F6FA] hover:text-[#D8C8F3] transition-colors"
                    >
                      {socialConfig.email.address}
                    </a>
                  )}
                </div>
              </div>

              {/* Availability Note */}
              <div className="pt-2 border-t border-[#B9A0E8]/10 flex items-center gap-2 text-xs text-[#D8C8F3]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Currently active for new project discussions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#171521] border border-[#B9A0E8]/25 shadow-lg">
              {/* Gold Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot field (hidden from real users, traps bots) */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="_gotcha">Leave this empty</label>
                  <input
                    type="text"
                    id="_gotcha"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                {/* Status Banners */}
                {status === 'success' && (
                  <div
                    role="alert"
                    className="p-4 rounded-xl bg-[#11111B] border border-[#D4AF37] text-[#D8C8F3] flex items-start gap-3 shadow-md"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#F8F6FA] text-sm">Message Received</h4>
                      <p className="text-xs text-[#AAA5B5] mt-0.5">
                        Thank you for reaching out! Your message has been sent successfully. I will get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div
                    role="alert"
                    className="p-4 rounded-xl bg-[#11111B] border border-red-500/50 text-[#F8F6FA] flex items-start gap-3 shadow-md"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-400 text-sm">Submission Status</h4>
                      <p className="text-xs text-[#AAA5B5] mt-0.5">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-wider text-[#D8C8F3] font-medium mb-1.5"
                    >
                      Full Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      disabled={status === 'submitting'}
                      className={`w-full px-4 py-3 rounded-lg bg-[#11111B] text-[#F8F6FA] text-sm border ${
                        errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-[#B9A0E8]/25 focus:border-[#D4AF37]'
                      } placeholder:text-[#AAA5B5]/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider text-[#D8C8F3] font-medium mb-1.5"
                    >
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jane@example.com"
                      disabled={status === 'submitting'}
                      className={`w-full px-4 py-3 rounded-lg bg-[#11111B] text-[#F8F6FA] text-sm border ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#B9A0E8]/25 focus:border-[#D4AF37]'
                      } placeholder:text-[#AAA5B5]/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs uppercase tracking-wider text-[#D8C8F3] font-medium mb-1.5"
                  >
                    Subject <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Developer Opportunity / Project Collaboration"
                    disabled={status === 'submitting'}
                    className={`w-full px-4 py-3 rounded-lg bg-[#11111B] text-[#F8F6FA] text-sm border ${
                      errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-[#B9A0E8]/25 focus:border-[#D4AF37]'
                    } placeholder:text-[#AAA5B5]/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider text-[#D8C8F3] font-medium mb-1.5"
                  >
                    Message <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, role or collaboration..."
                    disabled={status === 'submitting'}
                    className={`w-full px-4 py-3 rounded-lg bg-[#11111B] text-[#F8F6FA] text-sm border ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-[#B9A0E8]/25 focus:border-[#D4AF37]'
                    } placeholder:text-[#AAA5B5]/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all resize-y`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <ShimmerButton
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={status === 'submitting'}
                    icon={status === 'submitting' ? Loader2 : Send}
                    iconPosition="right"
                    className="w-full sm:w-auto"
                  >
                    {status === 'submitting' ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                  </ShimmerButton>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
