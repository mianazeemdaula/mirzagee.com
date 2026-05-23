# Mirza Gee Manpower Services — Complete Website Specification
## For Claude Code (Single File: `index.html`)

---

## 1. Project Overview

Build a **world-class, production-grade single-page website** for **Mirza Gee Manpower Services** — a licensed overseas employment promoter established in 2008 in Lahore, Pakistan, specializing in recruitment for KSA & Middle East markets.

**Inspiration references** (build better than these):
- https://www.ditrc.com/
- https://www.alnajam.com/

The site must feel premium, internationally credible, and trustworthy — like a firm that places people in King Fahd Armed Forces Hospital, not a local agency. Think Dubai-level polish with Pakistani roots.

---

## 2. Color Palette

Colors are extracted from the brand flyers AND the sky-blue tone from the mobile weather screenshot (Lahore sky at golden hour).

```css
:root {
  /* Primary Brand Colors */
  --navy:        #0B1F5C;   /* Deep royal navy — main backgrounds */
  --navy-dark:   #07123A;   /* Footer, deep sections */
  --navy-mid:    #162870;   /* Navbar, card borders */

  /* Sky Blue (extracted from Lahore sky photo) */
  --sky:         #5B9FD4;   /* Hero gradient start, section accents */
  --sky-light:   #87BDEF;   /* Subtle backgrounds, icon tints */
  --sky-pale:    #D6EAFB;   /* Light section backgrounds */

  /* Gold Accent */
  --gold:        #F5C518;   /* CTAs, highlights, stars, badges */
  --gold-dark:   #D4A400;   /* Hover state for gold elements */
  --gold-light:  #FFF0A0;   /* Soft gold glow */

  /* Neutral */
  --white:       #FFFFFF;
  --off-white:   #F8F9FD;
  --text-dark:   #0D1B3E;
  --text-gray:   #5A6A8A;
  --border:      #D0D9EE;
}
```

**Hero gradient**: `linear-gradient(135deg, #07123A 0%, #0B1F5C 40%, #5B9FD4 100%)`

---

## 3. Typography

```html
<!-- In <head> -->
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Nunito+Sans:wght@300;400;600;700&family=Amiri:ital@1&display=swap" rel="stylesheet">
```

- **Display / Hero headings**: `Barlow Condensed` — bold, condensed, powerful
- **Body / UI text**: `Nunito Sans` — clean, friendly, readable
- **Arabic accent / decorative**: `Amiri` italic — used only on section taglines
- **Base size**: 16px, scale 1.25 ratio

---

## 4. Navigation (Sticky Top)

Glassmorphism style sticky navbar. Transitions from transparent to solid navy on scroll.

**Logo**: Globe SVG icon (circular globe with hands) + "MIRZA GEE" in Barlow Condensed bold + "MANPOWER SERVICES" smaller spaced text below it.

**Nav Links** (smooth scroll anchors):
- Home
- About
- Services
- Process
- Clients
- Team
- Contact

**Right side**: Gold "Get in Touch" button + WhatsApp floating icon

On mobile: Hamburger menu, full-screen overlay navigation.

---

## 5. SECTION-BY-SECTION SPECIFICATION

---

### SECTION 1 — Hero

**Background**: Full-viewport gradient (`--navy-dark` → `--navy` → `--sky`). Overlay a subtle world map SVG pattern at 5% opacity.

**Layout**: Two-column on desktop, stacked on mobile.

**Left column**:
```
[Small gold pill badge]  ✦ Working as Leading Employment Promoters

[H1 — Barlow Condensed 900]
MIRZA GEE
MANPOWER
SERVICES

[Subtext — Nunito Sans 400]
Connecting Pakistan's finest talent with
Saudi Arabia & the Middle East since 2008.

[Gold horizontal rule]

[Licence badge box]
🏛  Licence No. MPD/2671/LHR
     Ministry of Overseas Pakistanis & HRD
     Bureau of Emigration & Overseas Employment

[Two CTA buttons side by side]
[Gold filled] → Our Services
[White outlined] → Contact Us
```

**Right column**:
- Large animated globe SVG (CSS rotation animation, very slow, 60s)
- Floating badge cards around it (appear on load with stagger animation):
  - Card 1: "Est. 2008" 
  - Card 2: "25+ Major Clients"
  - Card 3: "KSA & Gulf"
  - Card 4: "Govt. Licensed"
- Animated airplane SVG flying across diagonally on page load

**Bottom strip** (full width, gold background, dark text, ticker/marquee):
```
⭐ RIGHT PERSON FOR THE RIGHT JOB AT THE RIGHT TIME  ·  YOUR SUCCESS IS OUR MISSION  ·  LICENCE NO. MPD/2671/LHR  ·
```
Scrolling marquee animation, infinite loop.

---

### SECTION 2 — Stats Bar

Full-width dark navy bar, 4 animated count-up stats:

| Stat | Value |
|---|---|
| Years of Experience | 16+ |
| Satisfied Clients | 25+ |
| Professionals Placed | 1000+ |
| Countries Served | 5+ |

Each stat: large gold number (Barlow Condensed 800), small white label below.
Animate count-up when scrolled into view (IntersectionObserver + JS counter).

---

### SECTION 3 — About / MD Message

**Section ID**: `#about`

**Layout**: Two-column on desktop.

**Left**: 
- Decorative image frame (CSS clip-path angled frame, deep navy border)
- Inside: Silhouette/illustration representing a professional (or a placeholder with initials "IA")
- Gold nameplate below: "Iftikhar Ahmad Mirza — Managing Director"
- Signature in Amiri italic font

**Right**:
- Small gold pill: "Message from the Managing Director"
- Bismillah calligraphy (Unicode: ﷽) in Amiri, gold color, small, at top
- H2: "Building Bridges Between Talent & Opportunity"
- Body text (Nunito Sans):

> Mirza Gee Manpower Services was established in 2008 to make a mark in the field of manpower services. The organization is specialized in Human Resources recruitment & selection services for KSA & Middle East market. The whole operation is approved with licence number MPD/2671/LHR.
>
> At Mirza Gee Manpower Services, we are determined to build close and strong relationships with our clients, by understanding their human resources needs and satisfying these needs by providing the competent & skilled human resources. At the same time, we have successfully been winning the trust of potential job candidates for advocating their needs.

- Gold blockquote: *"Right Person for the Right Job at the Right Time"*

**Below** (full-width, light sky-pale background):

Three cards in a row:
- **About Us**: "A team of educated and experienced professionals, believing in and offering high quality human resources services in the light of diversified requirements from various clients."
- **Mission**: "To become a preferred choice of clients as a devoted & dedicated manpower services provider through innovative & creative sources, bringing the best and unique employment opportunities."
- **Vision**: "To be the most trusted and recognized overseas employment promoter connecting Pakistan's workforce with top-tier employers across Saudi Arabia and the GCC region."

---

### SECTION 4 — Registrations / Credentials

**Section ID**: `#credentials`
**Background**: White with subtle sky-pale top-to-bottom gradient

**Title**: `REGISTERED & CERTIFIED FROM` (centered, Barlow Condensed, navy)
**Subtitle**: "Verified and licensed by the highest regulatory authorities in Pakistan"

**5 credential cards** in a horizontal flex row (scroll on mobile):

Each card has: white background, navy border, rounded corners, subtle box-shadow, logo text/icon, name, full name.

| # | Badge Color | Short | Full Name |
|---|---|---|---|
| 1 | FBR green/yellow | **FBR** | Federal Board of Revenue |
| 2 | PRA green | **PRA** | Punjab Revenue Authority |
| 3 | LCCI navy | **LCCI** | Lahore Chamber of Commerce & Industry (Since 20/03/2012) |
| 4 | POEPA blue | **POEPA** | Pakistan Overseas Employment Promoters Association (LHR-144) |
| 5 | LEI blue/grey | **LEI** | LEI Worldwide — Legal Entity Identifier |

**Below cards**: A highlighted banner:
```
🏛  Government of Pakistan — Official Licence
    Overseas Employment Promoter's Licence No. 2671 / LHR
    Issued: 22/01/2009 · Authorizing: Iftikhar Ahmed · Mirza Gee Manpower Services
    [View Licence Certificate button — opens modal or PDF link]
```

**NTN Info strip** (small, subtle):
- NTN No: 3168005-4 | LCCI Membership No: 76647-A | POEPA Membership No: LHR-144

---

### SECTION 5 — Services

**Section ID**: `#services`
**Background**: Deep navy (`--navy`)

**Title**: `OUR SERVICES` (gold, Barlow Condensed)
**Subtitle**: "Comprehensive overseas employment solutions under one roof"

**5 service cards** in a 2-column grid (3+2 on desktop, 1 on mobile).
Each card: dark translucent background, gold icon (SVG), white title, light gray description, hover lifts the card with gold border glow.

| # | Icon | Title | Description |
|---|---|---|---|
| 1 | 👥 | Recruitment | End-to-end sourcing, screening, and placement of qualified candidates for Saudi Arabia & the Gulf. |
| 2 | 🛂 | Visa Processing | Complete visa documentation, stamping via Royal Consulate, and flight coordination for employer and employee. |
| 3 | 📋 | Dataflow & Licencing Exam | Full support for Dataflow verification and professional licensing exam facilitation for healthcare workers. |
| 4 | 📄 | Documents Attestation | HEC, PMDC, MOFA, Saudi Embassy attestation of academic and professional certificates. |
| 5 | 🏅 | QVP Professional Accreditation | Quality Verification Program accreditation support ensuring candidates meet international professional standards. |

**Right side visual**: Large globe + airplane SVG illustration (decorative, non-intrusive)

---

### SECTION 6 — Recruitment Process

**Section ID**: `#process`
**Background**: Off-white (`--off-white`) with navy accents

**Title**: `RECRUITMENT PROCEDURE` (Barlow Condensed, navy)
**Subtitle**: "A transparent, systematic process from demand to deployment"

**Horizontal timeline** on desktop, vertical on mobile.
7 numbered steps connected by a dotted gold line:

1. **Receipt of Demand** — Client sends manpower requirements to our team
2. **Database Screening** — Screening our verified candidate database  
3. **Advertisement Permission** — Securing approval from Protector of Emigrants
4. **Advertising** — Targeted advertising on demand across platforms
5. **Employer Updates** — Keeping the employer regularly updated on progress
6. **Interview Scheduling** — Announcing interview dates to shortlisted candidates
7. **Selection** — Interviews, aptitude tests & work samples per employer specifications

**Final highlight** (gold box, full width):
> ✔ **Selecting the Suitable Candidates** — Placing the right person in the right role at the right time.

---

### SECTION 7 — Document Requirements (Tabs)

**Section ID**: `#documents`
**Background**: sky-pale

**Title**: `DOCUMENT REQUIREMENTS`
**Tab navigation** (4 tabs):

**Tab 1 — From Employers**
> Documents Required From Employers:
> - Power of Attorney
> - Demand Letter
> - Letter in the name of Ambassador / Consul General of the Employer's country in Pakistan
> - Authorization Letter
> - Copy of the Employer's ID Card
> - Copy of the Employer's Commercial Registration / License
> - Original Visa Slip
> - E-Wakala

**Tab 2 — Visa Procedure (Individual)**
> - GAMCA number from GAMCA office, Lahore (Tel: 0092 42 35836627 / 35847174 / 38559764)
> - Visit referred medical center with original passport, CNIC and 4 photographs (blue background)
> - Passport (New + Old)
> - Original CNIC
> - NICOP from nearest NADRA office
> - 30 passport size photographs (blue background)
> - ID Card Copy of Nominee for Insurance
> - Male: 3 Affidavits of Rs.20/-
> - Female: 5 Affidavits of Rs.20/- + 2 permission affidavits attested from MOFA
> - Government employees: Ex-Pakistan leave / NOC / Resignation
> - Returned from Saudi Arabia: Final exit paper mandatory

**Tab 3 — Family Visa**
> - Wife and Children Passports (New + Old)
> - Original CNIC
> - 5 passport size photographs (blue background)
> - Medical fitness certificate + vaccination card (children under 12: approved medical centers)
> - Nikkah nama / marriage certificate from NADRA
> - B Form from NADRA
> - Returned from Saudi: Final exit paper mandatory

**Tab 4 — Attestation (Healthcare)**
> Table with rows: Respective Board/Universities/CPSP, DGN, HEC, PMDC, MNR&S, MOFA, SCA, Saudi Embassy
> Columns: Doctors, Staff Nurses, Technicians
> (Full table content from PDF page 7)
> 
> **Caution notice** (red border box): "All attestations must be done on original documents. Incomplete documents may cause delays."

---

### SECTION 8 — Clients

**Section ID**: `#clients`
**Background**: Deep navy

**Title**: `OUR VALUED CLIENTS` (gold, Barlow Condensed)
**Subtitle**: "Trusted by leading healthcare and corporate institutions across Saudi Arabia & the Gulf"

**Logo/name grid** — 25 clients displayed as cards with index number, organization name, and city badge. Animate in on scroll (staggered fade-up).

Full list:
1. King Fahd Armed Forces Hospital — Jeddah
2. Armed Forces Hospitals Southern Region — Khamis Mushayt
3. King Fahd Military Medical Complex — Dhahran
4. Security Forces Hospital Program — Riyadh
5. King Fahd National Guard Hospital (NGHA) — Riyadh
6. Prince Sultan Cardiac Center — Riyadh
7. Dallah Health Care Company — Riyadh
8. Dallah Namar Hospital — Riyadh
9. Al Dukheil Financial Group — Riyadh
10. Al Abeer International Medical Group — Jeddah
11. Dr. Abdur Rehman Al Mashari Hospital — Riyadh
12. Al Jarir Medical Center — Riyadh
13. National Medical Care Co — Riyadh
14. Shefa Specialized Hospital — Najran
15. Delta Modern Food Factory — Dammam
16. Al Garni Eye Center — Bisha
17. Eye Specialist Center — Medina
18. Saudi National Hospital — Makkah
19. Al Wafa Hospital — Omaizah
20. Al Qaseem National Hospital — Buridah
21. Saad Specialist Hospital — Al Khobar
22. Dr. Hamid S. Al Ahmad Hospital — Madiah
23. Dr. Sulaiman Al Habib Medical Group — Riyadh
24. Jeddah National Hospital — Jeddah
25. National Tri Generation CHP Co (NTCC) — Riyadh

**Also referenced** (from Manager HR bio):
- National Guard Health Affairs (NGHA)
- Ministry of Defense (MOD)
- Ministry of Health (MOH)
- King Abdul Aziz University Jeddah
- King Saud University
- Royal Commission Hospital Jubail
- Dr. Suleiman Al Habib Hospitals
- Almana General Hospitals Group
- Al-Fakhry Hospital Al-Khobar
- Bashrahil Hospital, Makkah
- Samama Operations & Management Co. Riyadh
- Nespak Riyadh Saudi Arabia
- Meridean Hotel Jeddah
- Inter Continental Hotel, Jeddah
- Arj Engineering Company Dubai
- Civil Co Construction Company Dubai

---

### SECTION 9 — Management Team

**Section ID**: `#team`
**Background**: Off-white

**Title**: `OUR MANAGEMENT TEAM` (Barlow Condensed, navy)
**Subtitle**: "Experienced professionals dedicated to your success"

**6 cards** in a 3-column grid (2 on tablet, 1 on mobile):

Each card: rounded rectangle, avatar circle (initials placeholder styled nicely), name, degree, title, email (mailto link), phone (tel link).

| Name | Degree | Title | Email | Phone |
|---|---|---|---|---|
| Mr. Ihsan ul Haq Mirza | MBA | Manager Human Resource | mirzaihsan@yahoo.com | 0092 300 9427436 |
| Mr. Muhammad Azeem Mirza | M.Sc Pol. Sciences | Coordinator Human Resource | mirzaazeem85@yahoo.com | 0092 333 6967078 |
| Mr. Muhammad Kamran Mirza | Master of Commerce | Manager Accounts & Finance | mirzagee79@yahoo.co.uk | 0092 333 6979363 |
| Mr. Ahmad Raza Chishti | Master of Commerce | Manager Administrative Affairs | razachishti80@yahoo.com | 0092 333 4318739 |
| Mr. Ahmad Shujah Chishti | MBA Finance | Public Relation Officer | Shujah_fareed@yahoo.com | 0092 345 4309309 |
| Mr. Muhmmad Ahmad Masood | BBA | Manager Visa Processing | ahmad_masood2004@yahoo.com | 0092 334 7446685 |

**Branch Manager (separate card)**:
- Mr. Tariq Saeed (MA Arabic) — Branch Manager Islamabad — trq_saeed@hotmail.com — 0092 321 5232253

---

### SECTION 10 — Consultants & Legal

**Section ID**: `#consultants`
**Background**: white

Two columns:

**Left — Consultants**
- Dr. Suleman Zahid (FRCS)
- Dr. Ilyas Rafi (FRCS) — Medical
- Mrs. Zubaida Nawaz Malik — Staff Nurses, Ex. Director Nursing, Sheikh Zayad Hospital Lahore
- Mr. Iftikhar Ahmed (M. Phil London) — Teaching
- Mr. Nadeem Ayub Bhutta (BSC, MBA) — Engineering & Technical Staff
- Mr. Imran Shahzad (CA, M. Phil, M.A Economics, AP)
- Mr. Farooq Malik (M.Com. ACCA) — Management
- Mr. Muhammad Akram (MS Ecommerce, CCNA, CCSP) — IT Department

**Right — Legal Advisor**
Title: Mirza Law Associates International

- Mr. Mirza Muhammad Aziz Ur Rehman — Member American Bar Association, Advocate Supreme Court of Pakistan
- Mr. ZeeShan Rauf Mirza — Advocate High Court
- Mr. Hafiz Omar Abdullah — LLB, M.Sc Criminal Justice System, Advocate High Court

---

### SECTION 11 — Contact

**Section ID**: `#contact`
**Background**: Deep navy gradient

**Title**: `GET IN TOUCH` (gold, Barlow Condensed)
**Subtitle**: "We're ready to connect you with the right opportunity"

**Three-column layout**:

**Column 1 — Corporate Office**
```
🏢 Corporate Office
Suite #05, 1st Floor
Shan Arcade, Barket Market
New Garden Town, Lahore
Punjab, Pakistan

📞 +92 42 35941551
📞 +92 42 35869363
📠 Fax: +92 42 35941552
📱 +92 345 4170757
📱 +92 332 9427436
📱 +92 333 6979363
```

**Column 2 — Branch Office**
```
🏢 Branch Office (Rawalpindi)
Office #19, 2nd Floor
Ali Plaza, opposite HBL
Six Road, Rawalpindi
Punjab, Pakistan

📱 +92 333 5160289
```

**Column 3 — Quick Contact Form**
```
Fields:
- Full Name (text)
- Phone (tel)
- Email (email)
- Service Interested In (select dropdown)
  Options: Recruitment, Visa Processing, Documents Attestation, Dataflow & Licencing, QVP Accreditation, General Inquiry
- Message (textarea)
- [Gold Submit Button] Send Message
```

**Below contact columns** — Google Maps embed:
```
Google Maps location from PDF:
https://goo.gl/maps/19dDpwHLGDLa2R8G8
Embed as full-width iframe, height 350px
```

**WhatsApp CTA strip** (gold background, dark text):
```
💬 Chat with us directly on WhatsApp
[Button: +92 345 4170757]  [Button: +92 332 9427436]  [Button: +92 333 6979363]
```
Each button links to: `https://wa.me/923XX...`

---

### SECTION 12 — Footer

**Background**: `--navy-dark` (#07123A)

**Layout**: 4-column on desktop

**Col 1**: Logo + tagline + social/contact icons
**Col 2**: Quick Links (Home, About, Services, Process, Clients, Team, Contact)
**Col 3**: Services list
**Col 4**: Contact summary

**Bottom bar**:
```
⭐ RIGHT PERSON FOR THE RIGHT JOB AT THE RIGHT TIME ⭐
© 2025 Mirza Gee Manpower Services. All Rights Reserved.
Licence No. MPD/2671/LHR | NTN: 3168005-4
```

---

## 6. Floating Elements (Always Visible)

1. **WhatsApp Float Button** (bottom-right, green, pulsing animation):
   - Links to: `https://wa.me/923454170757`
   - Tooltip on hover: "Chat on WhatsApp"

2. **Scroll-to-top button** (bottom-right above WhatsApp, appears after 300px scroll):
   - Navy circle with white arrow up

---

## 7. Animations & Interactions

- **On page load**: Hero text fades up with stagger (0.1s delay each element)
- **Airplane**: SVG `<path>` animated across hero diagonally, once on load
- **Globe**: CSS `animation: spin 60s linear infinite` (subtle, slow)
- **Marquee**: CSS `animation: marquee 30s linear infinite`
- **Scroll-triggered**: `IntersectionObserver` for all sections → fade-up + slide-in
- **Count-up**: Stats section numbers animate from 0 to final value when scrolled into view
- **Card hover**: `transform: translateY(-6px)` + gold `box-shadow` glow
- **Navbar**: `backdrop-filter: blur(12px)` glassmorphism on scroll, transparent when at top
- **Tab switching**: Smooth height transition, no jump

---

## 8. Technical Requirements

- **Single file**: `index.html` with embedded `<style>` and `<script>`
- **No frameworks**: Pure HTML5, CSS3, Vanilla JS only
- **Google Fonts**: Load via CDN in `<head>`
- **Font Awesome**: Load via CDN for icons (`fa-whatsapp`, `fa-phone`, etc.)
- **Fully responsive**: 375px mobile → 768px tablet → 1024px → 1440px desktop
- **Smooth scroll**: `html { scroll-behavior: smooth; }` + JS for offset compensation
- **SEO basics**: `<meta>` description, Open Graph tags, proper heading hierarchy
- **Performance**: No heavy images; use CSS gradients, SVGs, and Unicode symbols

---

## 9. Meta Tags

```html
<title>Mirza Gee Manpower Services | Leading Overseas Employment Promoters — Lahore Pakistan</title>
<meta name="description" content="Mirza Gee Manpower Services — Licensed overseas employment promoter (MPD/2671/LHR) connecting Pakistan's professionals with top employers in Saudi Arabia & the Middle East since 2008.">
<meta name="keywords" content="overseas employment Pakistan, manpower services Lahore, recruitment agency KSA, Saudi Arabia jobs Pakistan, overseas employment promoter Lahore, MPD/2671/LHR, Mirza Gee">
<meta property="og:title" content="Mirza Gee Manpower Services">
<meta property="og:description" content="Right Person for the Right Job at the Right Time. Licensed by Ministry of Overseas Pakistanis & HRD.">
```

---

## 10. Page Structure Summary

```
<nav>          Sticky glassmorphism navbar
<section id="home">    Hero — gradient, globe, stats, CTA
<div class="marquee">  Gold ticker strip
<section id="stats">   4 count-up stats
<section id="about">   MD message + About + Mission
<section id="credentials">  5 registration cards + licence
<section id="services">     5 service cards
<section id="process">      7-step recruitment timeline
<section id="documents">    4-tab document requirements
<section id="clients">      25 client name cards
<section id="team">         7 management team cards
<section id="consultants">  Consultants + Legal Advisor
<section id="contact">      Form + Map + WhatsApp
<footer>       4-column footer + bottom bar
<div class="fab-whatsapp">  Floating WhatsApp button
<div class="scroll-top">    Scroll to top button
```

---

## 11. Tone & Feel Notes

- **NOT** a generic template. Every section should feel intentionally designed.
- Gold accents used **sparingly** — only for the most important elements (CTAs, badges, highlights).
- White space is generous. Not cluttered.
- The site should feel like it belongs next to an international HR consultancy, not a local classifieds board.
- The Lahore sky blue (`#5B9FD4`) should appear as a warm, aspirational accent — used in gradients and illustrations, not as a dominant background.
- Use `Barlow Condensed` heavily for big section titles at weight 800-900 — this is the font that gives strength and character.
- Every phone number must be a clickable `tel:` link. Every WhatsApp number must be a `wa.me` link.
