"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ShieldAlert, FileText, UserCheck, Users, ClipboardCheck } from "lucide-react";

type TabId = "employers" | "visa-individual" | "family-visa" | "attestation";

export default function Documents() {
  const [activeTab, setActiveTab] = useState<TabId>("employers");

  const tabs = [
    { id: "employers", label: "From Employers", icon: <Users size={16} /> },
    { id: "visa-individual", label: "Individual Visa", icon: <UserCheck size={16} /> },
    { id: "family-visa", label: "Family Visa", icon: <ClipboardCheck size={16} /> },
    { id: "attestation", label: "Healthcare Attestation", icon: <FileText size={16} /> },
  ] as const;

  const employersDocs = [
    "Power of Attorney (Wakalah)",
    "Demand Letter stating quantities, trades, and salaries",
    "Visa Slip / Block Visa Copy (Original)",
    "E-Wakalah (Electronic Visa Authorization through Enjaz)",
    "Letter in the name of Ambassador / Consul General of the Employer's country in Pakistan",
    "Authorization Letter to verify OEP",
    "Copy of the Employer's Commercial Registration (CR) / License",
    "Copy of the Employer's National ID Card (Sajil)",
  ];

  const individualDocs = [
    "GAMCA Medical Number (obtained from GAMCA office, Lahore)",
    "GAMCA Medical Fit Certificate from referred medical center (along with original passport, CNIC and 4 photos)",
    "Original Passports (New Passport + All Previous Passports)",
    "Original CNIC (Computerized National Identity Card)",
    "NICOP (National Identity Card for Overseas Pakistanis) from NADRA",
    "30 Passport size photographs (with sky-blue background)",
    "ID Card Copy of the Nominee / Next of Kin for OEP Insurance",
    "For Male Candidates: 3 Affidavits of Rs. 20/- on stamp paper",
    "For Female Candidates: 5 Affidavits of Rs. 20/- + 2 permission affidavits attested from MOFA",
    "Government Employees: Ex-Pakistan Leave Approval / NOC / Accepted Resignation",
    "Candidates previously returned from Saudi Arabia: Final Exit Paper (Kharaj) is mandatory",
  ];

  const familyDocs = [
    "Wife and Children Passports (New Passports + All Previous Passports)",
    "Original CNIC of the husband and wife",
    "5 Passport size photographs of each family member (with sky-blue background)",
    "Medical Fitness Certificate & Vaccination Card (for children under 12 years, from approved medical centers)",
    "NADRA computerized Nikkah Nama (Marriage Certificate) in Urdu & English",
    "NADRA B-Form (Child Registration Certificate) for children",
    "Candidates previously returned from Saudi Arabia: Final Exit Paper (Kharaj) is mandatory",
  ];

  const attestationRows = [
    {
      agency: "Respective Board / Universities / CPSP",
      detail: "Verification of MBBS, MD, FCPS degrees or Nursing/Technical diplomas",
      doctor: "Required",
      nurse: "Required",
      tech: "Required",
    },
    {
      agency: "Director General Nursing (DGN) / PNC",
      detail: "Verification and registration with the Pakistan Nursing Council",
      doctor: "Not Applicable",
      nurse: "Required",
      tech: "Not Applicable",
    },
    {
      agency: "Higher Education Commission (HEC)",
      detail: "Verification of MBBS, Specialist degrees or B.Sc. Nursing degrees",
      doctor: "Required",
      nurse: "Required (B.Sc)",
      tech: "Not Applicable",
    },
    {
      agency: "Pakistan Medical & Dental Council (PMDC)",
      detail: "PMDC verification, registration card, and Certificate of Good Standing",
      doctor: "Required",
      nurse: "Not Applicable",
      tech: "Not Applicable",
    },
    {
      agency: "Ministry of National Health Services (MNNHR&C)",
      detail: "Official accreditation support for healthcare credentials",
      doctor: "Required",
      nurse: "Required",
      tech: "Required",
    },
    {
      agency: "Ministry of Foreign Affairs (MOFA)",
      detail: "Attestation of all degrees, transcripts, and experience letters",
      doctor: "Required",
      nurse: "Required",
      tech: "Required",
    },
    {
      agency: "Saudi Cultural Academy (SCA)",
      detail: "Academic credential verification prior to Embassy submission",
      doctor: "Required",
      nurse: "Required (B.Sc)",
      tech: "Not Applicable",
    },
    {
      agency: "Saudi Embassy / Consulate",
      detail: "Final verification and attestation stamp on degrees and visas",
      doctor: "Required",
      nurse: "Required",
      tech: "Required",
    },
  ];

  return (
    <section id="documents" className="relative w-full bg-[#060E3A] py-20 md:py-28 overflow-hidden border-b border-white/5">
      {/* Dynamic light glows */}
      <div 
        style={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: "rgba(135, 189, 239, 0.25)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-width px-6 relative z-10 mx-auto">
        
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-wider"
          >
            DOCUMENT REQUIREMENTS
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="divider-lines"
          >
            <span className="text-light-blue">Secure Credentials Collection</span>
          </motion.div>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mt-4" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            Review the exact legal document checklists required by Gulf regulatory frameworks and the Government of Pakistan.
          </p>
        </div>

        {/* Tab Navigation Menu */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-display inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-md ${
                activeTab === tab.id
                  ? "bg-accent-gold text-dark-navy border border-accent-gold scale-[1.03]"
                  : "bg-white/[0.02] text-gray-400 hover:bg-white/[0.05] hover:text-white border border-white/5"
              }`}
              style={{ cursor: "pointer" }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panels with smooth AnimatePresence transition */}
        <div className="mt-10 min-h-[380px] bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            
            {/* TAB 1 — Employers */}
            {activeTab === "employers" && (
              <motion.div
                key="employers"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-left"
              >
                <h3 className="font-display text-[#0B1F5C] text-2xl font-extrabold tracking-wide uppercase mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-accent-gold rounded-full" />
                  Required From International Employers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {employersDocs.map((doc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent-gold/30 hover:bg-white/[0.05] transition-all duration-200"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent-gold/10 text-accent-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="stroke-[3]" />
                      </div>
                      <span className="text-gray-300 text-sm font-semibold" style={{ fontFamily: "Nunito Sans, sans-serif" }}>{doc}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 2 — Visa Procedure (Individual) */}
            {activeTab === "visa-individual" && (
              <motion.div
                key="visa-individual"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-left"
              >
                <h3 className="font-display text-[#0B1F5C] text-2xl font-extrabold tracking-wide uppercase mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-accent-gold rounded-full" />
                  Individual Visa Endorsement Files
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {individualDocs.map((doc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent-gold/30 hover:bg-white/[0.05] transition-all duration-200"
                    >
                      <div className="w-6 h-6 rounded-full bg-light-blue/15 text-light-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="stroke-[3]" />
                      </div>
                      <span className="text-gray-300 text-sm font-semibold" style={{ fontFamily: "Nunito Sans, sans-serif" }}>{doc}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 3 — Family Visa */}
            {activeTab === "family-visa" && (
              <motion.div
                key="family-visa"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-left"
              >
                <h3 className="font-display text-[#0B1F5C] text-2xl font-extrabold tracking-wide uppercase mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-accent-gold rounded-full" />
                  Family Visa Stamping Checklist
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {familyDocs.map((doc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent-gold/30 hover:bg-white/[0.05] transition-all duration-200"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent-gold/15 text-[#D4A400] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="stroke-[3]" />
                      </div>
                      <span className="text-gray-300 text-sm font-semibold" style={{ fontFamily: "Nunito Sans, sans-serif" }}>{doc}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 4 — Attestation (Healthcare) Matrix */}
            {activeTab === "attestation" && (
              <motion.div
                key="attestation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-left"
              >
                <h3 className="font-display text-white text-2xl font-extrabold tracking-wide uppercase mb-2 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-accent-gold rounded-full" />
                  Healthcare Credential Attestation Matrix
                </h3>
                <p className="text-gray-400 text-xs font-semibold mb-6 uppercase tracking-wider" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                  Official validation routing map required for medical practitioners seeking licensure in KSA & Middle East.
                </p>

                {/* Responsive Table Wrapper */}
                <div className="overflow-x-auto rounded-2xl border border-white/5 shadow-2xl">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-[#0B1F5C] text-white font-display text-xs md:text-sm tracking-widest uppercase border-b border-[#0B1F5C]">
                        <th className="py-4 px-6 font-bold">Attestation Authority</th>
                        <th className="py-4 px-6 font-bold">Doctors</th>
                        <th className="py-4 px-6 font-bold">Staff Nurses</th>
                        <th className="py-4 px-6 font-bold">Technicians</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontFamily: "Nunito Sans, sans-serif" }} className="text-sm font-semibold text-gray-300">
                      {attestationRows.map((row, idx) => (
                        <tr 
                          key={idx} 
                          className={`border-b border-white/5 hover:bg-white/[0.04] transition-colors ${
                            idx % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.02]"
                          }`}
                        >
                          <td className="py-4 px-6">
                            <span className="block font-bold text-accent-gold">{row.agency}</span>
                            <span className="block text-[10px] text-gray-400 mt-0.5 font-normal leading-normal">{row.detail}</span>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                              row.doctor === "Required" 
                                ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                                : "bg-white/5 text-white/40 border border-white/5"
                            }`}>
                              {row.doctor === "Required" ? <Check size={12} className="stroke-[3]" /> : <X size={12} />}
                              {row.doctor}
                            </span>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                              row.nurse.includes("Required") 
                                ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                                : "bg-white/5 text-white/40 border border-white/5"
                            }`}>
                              {row.nurse.includes("Required") ? <Check size={12} className="stroke-[3]" /> : <X size={12} />}
                              {row.nurse}
                            </span>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                              row.tech === "Required" 
                                ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                                : "bg-white/5 text-white/40 border border-white/5"
                            }`}>
                              {row.tech === "Required" ? <Check size={12} className="stroke-[3]" /> : <X size={12} />}
                              {row.tech}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

        {/* Caution Notice Box (Red Border Box) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-[#E53E3E]/5 border border-[#E53E3E]/10 border-l-4 border-l-[#E53E3E] text-left flex items-start gap-4 shadow-xl backdrop-blur-md"
        >
          <div className="p-2 bg-[#E53E3E]/10 text-[#E53E3E] rounded-xl flex-shrink-0">
            <ShieldAlert size={20} className="animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[#E53E3E] font-bold text-sm uppercase tracking-widest">
              IMPORTANT CAUTION NOTICE
            </span>
            <p className="text-gray-300 text-xs md:text-sm mt-1 leading-relaxed" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
              <strong>All attestations must be done on original certificates.</strong> Photocopied or scanned documents are strictly rejected by MOFA, SCA, and embassy bodies. Incomplete documentation sets or unverified registrations will cause critical processing delays.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
