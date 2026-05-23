"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Printer, PhoneCall } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Recruitment",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmittedProgress] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittedProgress(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmittedProgress(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        service: "Recruitment",
        message: "",
      });
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="section-padding bg-[#060E3A] relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-light-blue/5 blur-[120px] pointer-events-none" />

      <div className="container-width px-6 relative z-10">
        
        {/* Centered Section Header */}
        <div className="section-header text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gradient-gold text-center"
          >
            GET IN TOUCH
          </motion.h2>
          <p className="text-gray-400 font-body text-base mt-2 text-center max-w-2xl mx-auto">
            We are ready to connect you with the right opportunity. Reach out to our team today.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="divider-lines justify-center"
          >
            <span>CONTACT CHANNELS</span>
          </motion.div>
        </div>

        {/* Three Column Layout on Desktop */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-12">
          
          {/* Column 1 - Corporate Office (Lahore) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6 flex flex-col justify-between border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-3xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[rgba(245,197,24,0.1)] p-3 rounded-2xl border border-[rgba(245,197,24,0.2)] text-accent-gold">
                  <MapPin size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-wide uppercase">
                  Corporate Office
                </h3>
              </div>
              
              <div className="text-left font-body text-gray-300 leading-relaxed">
                <p className="text-white font-bold text-base font-display">Mirza Gee Manpower Services</p>
                <p className="mt-1">
                  Suite #05, 1st Floor,<br />
                  Shan Arcade, Barkat Market,<br />
                  New Garden Town, Lahore,<br />
                  Punjab, Pakistan.
                </p>
              </div>

              {/* Direct Telephone and Mobile Links */}
              <div className="mt-6 flex flex-col gap-3 text-left font-body text-sm text-gray-300">
                <a href="tel:+924235941551" className="flex items-center gap-3 hover:text-accent-gold transition-colors py-1">
                  <Phone size={16} className="text-accent-gold" />
                  <span>+92 42 35941551</span>
                </a>
                <a href="tel:+924235869363" className="flex items-center gap-3 hover:text-accent-gold transition-colors py-1">
                  <Phone size={16} className="text-accent-gold" />
                  <span>+92 42 35869363</span>
                </a>
                <span className="flex items-center gap-3 py-1">
                  <Printer size={16} className="text-gray-400" />
                  <span>Fax: +92 42 35941552</span>
                </span>
                
                <div className="border-t border-white/5 my-2 pt-2">
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-2">Direct Mobile Contacts</span>
                  <a href="tel:+923454170757" className="flex items-center gap-3 hover:text-accent-gold transition-colors py-1">
                    <PhoneCall size={14} className="text-light-blue" />
                    <span>+92 345 4170757</span>
                  </a>
                  <a href="tel:+923329427436" className="flex items-center gap-3 hover:text-accent-gold transition-colors py-1">
                    <PhoneCall size={14} className="text-light-blue" />
                    <span>+92 332 9427436</span>
                  </a>
                  <a href="tel:+923336979363" className="flex items-center gap-3 hover:text-accent-gold transition-colors py-1">
                    <PhoneCall size={14} className="text-light-blue" />
                    <span>+92 333 6979363</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-400 font-body">
              <Clock size={14} className="text-accent-gold" />
              <span>Mon - Sat: 9 AM - 6 PM (PKT)</span>
            </div>
          </motion.div>

          {/* Column 2 - Branch Office (Rawalpindi) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-6 flex flex-col justify-between border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-3xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[rgba(74,144,217,0.1)] p-3 rounded-2xl border border-[rgba(74,144,217,0.2)] text-light-blue">
                  <MapPin size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-wide uppercase">
                  Branch Office
                </h3>
              </div>
              
              <div className="text-left font-body text-gray-300 leading-relaxed">
                <p className="text-white font-bold text-base font-display">Rawalpindi Branch Office</p>
                <p className="mt-1">
                  Office #19, 2nd Floor,<br />
                  Ali Plaza, Opposite HBL Bank,<br />
                  Sixth Road, Rawalpindi,<br />
                  Punjab, Pakistan.
                </p>
              </div>

              {/* Direct Telephone and Mobile Links */}
              <div className="mt-6 flex flex-col gap-3 text-left font-body text-sm text-gray-300">
                <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">Branch Mobile Line</span>
                <a href="tel:+923335160289" className="flex items-center gap-3 hover:text-accent-gold transition-colors py-2 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-gold/20">
                  <Phone size={16} className="text-accent-gold animate-bounce" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold leading-none uppercase">Call Branch Manager</span>
                    <span className="text-sm font-semibold text-white mt-1">+92 333 5160289</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-400 font-body">
              <Clock size={14} className="text-accent-gold" />
              <span>Standard Recruitment Operating Hours</span>
            </div>
          </motion.div>

          {/* Column 3 - Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-6 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-3xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 text-left font-body h-full justify-between"
                >
                  <div>
                    <h3 className="font-display font-bold text-xl text-white tracking-wide uppercase mb-4 flex items-center gap-2">
                      <Send size={18} className="text-accent-gold" /> Quick Inquiry Form
                    </h3>

                    <div className="flex flex-col gap-3">
                      {/* Name */}
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-gold focus:bg-white/[0.08] transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number (e.g. +923000000000)"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-gold focus:bg-white/[0.08] transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-gold focus:bg-white/[0.08] transition-all"
                        />
                      </div>

                      {/* Service Dropdown */}
                      <div>
                        <select
                          value={formState.service}
                          onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                          className="w-full bg-[#07123A] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent-gold focus:bg-[#0c1e5c] transition-all"
                        >
                          <option value="Recruitment">Recruitment (Employer/Candidate)</option>
                          <option value="Visa Processing">Visa Processing</option>
                          <option value="Documents Attestation">Documents Attestation</option>
                          <option value="Dataflow & Exam">Dataflow & Licencing Exam</option>
                          <option value="QVP Accreditation">QVP Professional Accreditation</option>
                          <option value="General">General Inquiry</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <textarea
                          required
                          rows={3}
                          placeholder="Write your message details..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-gold focus:bg-white/[0.08] transition-all resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full mt-4 flex items-center justify-center gap-2 py-2.5 font-bold rounded-xl transition-all"
                    style={{ fontSize: "1rem" }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark-navy border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Inquiry Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-8 h-full min-h-[300px]"
                >
                  <div className="bg-green-500/10 text-green-500 p-4 rounded-full border border-green-500/20 mb-4 animate-bounce">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white tracking-wide uppercase">
                    Inquiry Sent!
                  </h3>
                  <p className="text-gray-300 font-body text-sm mt-2 max-w-xs mx-auto leading-relaxed">
                    Thank you for contacting Mirza Gee Manpower Services. Our relevant desk manager has been notified and will reach out to you shortly.
                  </p>
                  
                  <button
                    onClick={handleReset}
                    className="mt-6 text-xs text-accent-gold hover:text-white uppercase tracking-widest font-black transition-colors border-b border-dashed border-accent-gold hover:border-white pb-0.5"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Full-width Map Section, beautifully bordered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="map-wrapper relative w-full h-[350px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group mb-12"
        >
          <iframe
            title="Mirza Gee Location Map - Shan Arcade, Barkat Market, Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.32626154562!2d74.32788507530656!3d31.503487000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190460c5a21be1%3A0xc6cb5a6f20e44507!2sBarkat%20Market%2C%20Lahore!5e0!3m2!1sen!2spk!4v1716300000000!5m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Floating overlay maps caption */}
          <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto bg-[#060E3A]/95 border border-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md opacity-85 group-hover:opacity-100 transition-opacity flex items-center gap-2">
            <MapPin size={16} className="text-accent-gold" />
            <span className="text-white font-display font-semibold text-xs tracking-wide">
              Corporate Office: Suite #05, 1st Floor, Shan Arcade, Barkat Market, Lahore, Pakistan
            </span>
          </div>
        </motion.div>

        {/* WhatsApp CTA Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-full bg-accent-gold rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          {/* Abstract mini background circle */}
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />
          
          <div className="flex items-center gap-4 text-left relative z-10">
            <div className="bg-dark-navy text-accent-gold p-3.5 rounded-2xl shadow-inner shrink-0">
              <MessageSquare size={24} style={{ fill: "currentColor" }} />
            </div>
            <div>
              <h4 className="text-dark-navy font-display font-black text-lg md:text-xl uppercase tracking-wider">
                Chat with us directly on WhatsApp
              </h4>
              <p className="text-navy-mid font-body text-xs md:text-sm font-semibold opacity-95">
                Our support team is standing by to assist with visa or recruitment questions.
              </p>
            </div>
          </div>

          {/* Three WhatsApp Buttons */}
          <div className="flex flex-wrap gap-3 justify-center relative z-10 w-full md:w-auto">
            <a
              href="https://wa.me/923454170757"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-dark-navy text-white hover:bg-white hover:text-dark-navy font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* WhatsApp Icon */}
              <svg viewBox="0 0 448 512" width="14" height="14" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-93.8-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.3-3.2 0-6.9-.5-10.6-.5-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>+92 345 4170757</span>
            </a>
            <a
              href="https://wa.me/923329427436"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-dark-navy text-white hover:bg-white hover:text-dark-navy font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* WhatsApp Icon */}
              <svg viewBox="0 0 448 512" width="14" height="14" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-93.8-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.3-3.2 0-6.9-.5-10.6-.5-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>+92 332 9427436</span>
            </a>
            <a
              href="https://wa.me/923336979363"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-dark-navy text-white hover:bg-white hover:text-dark-navy font-display font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* WhatsApp Icon */}
              <svg viewBox="0 0 448 512" width="14" height="14" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-93.8-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.3-3.2 0-6.9-.5-10.6-.5-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>+92 333 6979363</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
