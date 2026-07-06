import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { personalInfo } from '../../mockData';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Web3Forms submission
      // Sign up free at https://web3forms.com to get your access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // ← Replace with your free key from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-background relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-1.5 rounded-full glass border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to internship opportunities, collaborations, and conversations about ML & AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-5">
            {[
              { Icon: Mail, title: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { Icon: Phone, title: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { Icon: MapPin, title: 'Location', value: personalInfo.location, href: null }
            ].map(({ Icon, title, value, href }, i) => (
              <div key={i} className="group p-6 rounded-2xl glass-panel border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/10 group-hover:bg-violet-600 transition-colors flex-shrink-0 group-hover:text-white text-violet-600 dark:text-violet-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-0.5">{title}</h3>
                    {href ? (
                      <a href={href} className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="p-6 rounded-2xl glass-panel border border-white/20 dark:border-white/10 shadow-lg">
              <h3 className="text-sm font-semibold text-foreground mb-4 text-center">Find Me Online</h3>
              <div className="flex justify-center gap-4">
                {[
                  { Icon: Github, url: personalInfo.social.github, label: 'GitHub' },
                  { Icon: Linkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
                  { Icon: BookOpen, url: personalInfo.social.medium, label: 'Medium' }
                ].map(({ Icon, url, label }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl glass hover:bg-violet-500/10 hover:border-violet-500/30 transition-all hover:scale-110 group shadow-sm text-muted-foreground hover:text-foreground"
                  >
                    <Icon className="w-5 h-5 group-hover:text-violet-600 dark:group-hover:text-violet-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-[2.5rem] glass-panel shadow-2xl border border-white/20 dark:border-white/10 relative"
            >
              <div className="absolute inset-0 bg-white/5 dark:bg-black/10 rounded-[2.5rem] pointer-events-none" />
              <div className="relative space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="peer w-full px-5 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all text-foreground placeholder-transparent backdrop-blur-sm"
                  />
                  <label className="absolute left-5 -top-3 bg-background/80 backdrop-blur-md px-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-muted-foreground peer-focus:-top-3 peer-focus:text-sm peer-focus:text-violet-600 dark:peer-focus:text-violet-400 rounded">
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="peer w-full px-5 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all text-foreground placeholder-transparent backdrop-blur-sm"
                  />
                  <label className="absolute left-5 -top-3 bg-background/80 backdrop-blur-md px-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-muted-foreground peer-focus:-top-3 peer-focus:text-sm peer-focus:text-violet-600 dark:peer-focus:text-violet-400 rounded">
                    Your Email
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Your Message"
                    className="peer w-full px-5 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all text-foreground placeholder-transparent resize-none backdrop-blur-sm"
                  />
                  <label className="absolute left-5 -top-3 bg-background/80 backdrop-blur-md px-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-muted-foreground peer-focus:-top-3 peer-focus:text-sm peer-focus:text-violet-600 dark:peer-focus:text-violet-400 rounded">
                    Your Message
                  </label>
                </div>

                {/* Status */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl glass border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">Message sent! I'll get back to you soon.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl glass border-red-500/30 text-red-600 dark:text-red-400">
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">Something went wrong. Please email me directly at {personalInfo.email}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-violet-500/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ring-1 ring-white/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
