"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, Mail, Clock, ShieldCheck } from "lucide-react";

const contacts = [
  {
    name: "Primary Help Desk",
    number: "0345 4170757",
    whatsappLink: "https://wa.me/923454170757",
    telLink: "tel:+923454170757",
    role: "Recruitment & Processing",
  },
  {
    name: "Administrative Desk",
    number: "0300 9427436",
    whatsappLink: "https://wa.me/923009427436",
    telLink: "tel:+923009427436",
    role: "Visa & Licensing Support",
  },
  {
    name: "Documents Desk",
    number: "0333 6979363",
    whatsappLink: "https://wa.me/923336979363",
    telLink: "tel:+923336979363",
    role: "Attestation & Accreditation",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#060E3A] relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none" />

      <div className="container-width px-6 relative z-10">
        
        {/* Centered Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gradient-gold"
          >
            CONTACT US
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="divider-lines"
          >
            <span>GET IN TOUCH WITH OUR OFFICE</span>
          </motion.div>
        </div>

        <div className="contact-grid">
          
          {/* LEFT: Contact Cards with WhatsApp details */}
          <div className="contact-left-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-card-list"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-2 uppercase tracking-wider">
                Speak to our Experts
              </h3>
              <p className="contact-panel-desc">
                Connect directly with our designated desk managers. Tap any button to call us instantly, or send an inquiry via WhatsApp for direct support.
              </p>

              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="contact-card group"
                >
                  <div className="contact-card-info">
                    <span className="contact-card-role">
                      {contact.role}
                    </span>
                    <span className="contact-card-name">
                      {contact.name}
                    </span>
                    <span className="contact-card-phone">
                      {contact.number}
                    </span>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="contact-card-actions">
                    {/* Dial button */}
                    <a
                      href={contact.telLink}
                      className="btn-dial"
                      title="Call Phone Number"
                    >
                      <Phone size={14} className="text-accent-gold" />
                      <span>Call</span>
                    </a>
                    
                    {/* WhatsApp Button */}
                    <a
                      href={contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                      title="Chat on WhatsApp"
                    >
                      {/* Font Awesome equivalent WhatsApp icon via vector path */}
                      <svg viewBox="0 0 448 512" width="14" height="14" fill="currentColor">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-93.8-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.3-3.2 0-6.9-.5-10.6-.5-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                  
                  {/* Small background highlight bar */}
                  <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-accent-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Address Section & Beautiful Dark Google Maps Embed */}
          <div className="contact-right-col">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-details-box"
            >
              <h3 className="address-header">
                <MapPin className="text-accent-gold" size={22} /> Address & Location
              </h3>

              {/* Formatted Address Block */}
              <div className="address-row">
                <div className="address-icon">
                  <MapPin size={20} />
                </div>
                <div className="address-text-block">
                  <span className="address-company-name">
                    Mirza Gee Office
                  </span>
                  <p className="address-content">
                    Office No. 5, 1st Floor, Shan Arcade, Barkat Market,<br />
                    New Garden Town, Lahore, Punjab, Pakistan.
                  </p>
                </div>
              </div>

              {/* Additional Details (Timing, Legal checks) */}
              <div className="business-info-grid">
                <div className="info-block">
                  <Clock size={16} className="text-accent-gold" />
                  <div className="info-text-block">
                    <span className="info-label">Business Hours</span>
                    <span className="info-value">Mon - Sat: 9 AM - 6 PM</span>
                  </div>
                </div>
                <div className="info-block">
                  <ShieldCheck size={16} className="text-accent-gold" />
                  <div className="info-text-block">
                    <span className="info-label">Authentication</span>
                    <span className="info-value">Live Bio-Enrollments</span>
                  </div>
                </div>
              </div>

              {/* Google Maps Iframe, elegantly dark-themed with custom CSS filters */}
              <div className="map-wrapper group">
                <iframe
                  title="Mirza Gee Location Map - Shan Arcade, Barkat Market, Lahore"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.32626154562!2d74.32788507530656!3d-31.503487000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190460c5a21be1%3A0xc6cb5a6f20e44507!2sBarkat%20Market%2C%20Lahore!5e0!3m2!1sen!2spk!4v1716300000000!5m2!1sen!2spk"
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
                <div className="absolute bottom-3 left-3 right-3 bg-[#060E3A]/95 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold text-xs">Shan Arcade, New Garden Town, Lahore</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
