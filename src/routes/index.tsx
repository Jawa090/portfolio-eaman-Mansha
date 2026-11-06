import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, X } from "lucide-react";
import portrait from "@/assets/eaman-mansha.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const linkedIn = "https://www.linkedin.com/in/eaman-mansha-21721227b/";

const services = [
  {
    number: "01",
    title: "Recruitment & talent acquisition",
    description: "Sourcing, screening, and shortlisting candidates for the roles your team needs to fill.",
    outcome: "A focused shortlist, ready to interview.",
  },
  {
    number: "02",
    title: "Technical hiring",
    description: "Thoughtful recruitment for developers, engineers, designers, data, and AI roles.",
    outcome: "Candidates screened beyond the keywords.",
  },
  {
    number: "03",
    title: "Staff augmentation",
    description: "Vetted professionals who join your existing team for the time your work requires.",
    outcome: "The right person, for the right stretch.",
  },
  {
    number: "04",
    title: "Project team building",
    description: "A project-ready team with roles, hiring sequence, and onboarding planned together.",
    outcome: "People and a clear path to get started.",
  },
  {
    number: "05",
    title: "HR operations setup",
    description: "Practical help with onboarding, people records, policies, and payroll coordination.",
    outcome: "Organized records and smoother routines.",
  },
  {
    number: "06",
    title: "Hiring process consulting",
    description: "A closer look at hiring delays, screening, and where AI can help your process.",
    outcome: "A clearer process for your next hire.",
  },
];

const processSteps = [
  ["01", "Brief", "We begin with the role, project, timeline, and what a good fit means to you."],
  ["02", "Source", "I find people whose experience matches the work and the team."],
  ["03", "Screen", "I review their skills, working experience, and fit for the role."],
  ["04", "Shortlist", "You receive a focused selection of candidates to consider."],
  ["05", "Onboard", "I help coordinate the next steps so new team members can get started."],
];

const experience = [
  {
    date: "AUG 2026 — PRESENT",
    company: "BitWords Inc.",
    role: "HR Manager & Project Manager",
    place: "Lahore, Pakistan",
    detail: "HR management and project coordination.",
  },
  {
    date: "DEC 2023 — PRESENT",
    company: "Allied Paint Industries Limited",
    role: "Manager, Operations & Human Resource",
    place: "Pakistan",
    detail: "Managed people operations across locations and oversaw PaintFix operations and workflow improvement.",
  },
  {
    date: "FEB 2023 — OCT 2023",
    company: "Must Fintech",
    role: "Human Resources Manager",
    place: "South Korea · Remote",
    detail: "Supported human resources for a remote fintech team.",
  },
  {
    date: "FEB 2021 — JAN 2023",
    company: "root4tech",
    role: "Human Resources Manager",
    place: "Lahore, Pakistan",
    detail: "Handled recruitment, onboarding, employee relations, performance, and compliance.",
  },
  {
    date: "MAR 2021 — JUN 2021",
    company: "Jinnah Hospital Lahore",
    role: "Psychiatry Intern",
    place: "Lahore, Pakistan",
    detail: "Psychiatry internship.",
  },
];

const questions = [
  {
    question: "How quickly can hiring begin?",
    answer: "Once I understand the role and timing, I can confirm a realistic next step with you.",
  },
  {
    question: "Can you hire for remote teams?",
    answer: "Yes. My experience includes working with remote teams as well as on-site teams.",
  },
  {
    question: "Do you support contract and permanent roles?",
    answer: "Staff augmentation and permanent recruitment can both be discussed for your needs.",
  },
  {
    question: "How do you screen technical candidates?",
    answer: "I look at how a candidate's experience relates to the work, including software workflows, APIs, and databases.",
  },
  {
    question: "How does pricing work?",
    answer: "Pricing is discussed once the role and scope are clear. Please share the details to get started.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eaman Mansha | HR & Project Management" },
      {
        name: "description",
        content:
          "Eaman Mansha is a Lahore-based HR and project management professional offering recruitment, technical hiring, and team building.",
      },
      { property: "og:title", content: "Eaman Mansha | HR & Project Management" },
      {
        property: "og:description",
        content:
          "Thoughtful recruitment, technical hiring, and project team building with Eaman Mansha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400;0,500;1,400&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: PortfolioPage,
});

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      <span aria-hidden="true">/</span>
      <span>{label}</span>
    </p>
  );
}

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Eaman,",
      "",
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "Not specified"}`,
      `Role or team needed: ${data.get("role")}`,
      `Team size: ${data.get("teamSize") || "Not specified"}`,
      `Timeline: ${data.get("timeline") || "Not specified"}`,
      "",
      `Message: ${data.get("message")}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(message);
      setMessageCopied(true);
    } catch {
      setMessageCopied(false);
    }
  };

  return (
    <main>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="wordmark" href="#top" aria-label="Eaman Mansha, home">
            Eaman Mansha<span>.</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <Button asChild className="nav-cta">
            <a href="#contact">Hire a team <ArrowUpRight aria-hidden="true" /></a>
          </Button>
          <details className="mobile-menu" open={menuOpen} onToggle={(event) => setMenuOpen(event.currentTarget.open)}>
            <summary aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <div id="top" className="page-shell">
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> HR AND PROJECT MANAGEMENT <span className="eyebrow-divider">/</span> LAHORE</p>
            <h1 id="hero-title">The right people, <span>on your project,</span> faster.</h1>
            <p className="hero-summary">
              I recruit, screen, and assemble teams for companies that need to ship. Technical hiring, staff augmentation, and full project teams, handled end to end.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg" className="primary-action">
                <a href="#contact">Hire a team <ArrowUpRight aria-hidden="true" /></a>
              </Button>
              <a className="text-link" href="#services">View services <ArrowDown aria-hidden="true" /></a>
            </div>
            <div className="stat-strip" aria-label="Professional overview">
              <div className="stat-item"><strong>5+</strong><span>years in HR</span></div>
              <div className="stat-item"><strong>HR + PM</strong><span>joined-up experience</span></div>
              <div className="stat-item"><strong>Remote</strong><span>and on-site teams</span></div>
            </div>
          </div>
          <figure className="portrait-frame">
            <img src={portrait} alt="Eaman Mansha, HR and project management professional" />
          </figure>
        </section>

        <section className="trust-line" aria-label="Professional experience">
          <p>WORKING WITH</p>
          <div><span>BitWords Inc.</span><span>Allied Paint Industries</span><span>Must Fintech</span><span>root4tech</span></div>
        </section>

        <section id="services" className="content-section services-section" aria-labelledby="services-heading">
          <SectionLabel number="01" label="SERVICES" />
          <div className="section-heading-row">
            <h2 id="services-heading">Good teams start<br />with the right hire.</h2>
            <p className="section-intro">From one important hire to a complete project team, I help you find the people and make the next step clear.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <span className="item-index">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-outcome"><span>{service.outcome}</span><ArrowRight aria-hidden="true" /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="content-section process-section" aria-labelledby="process-heading">
          <SectionLabel number="02" label="PROCESS" />
          <div className="section-heading-row">
            <h2 id="process-heading">A clear path<br />from brief to team.</h2>
            <p className="section-intro">A considered hiring process helps your team make confident decisions at every step.</p>
          </div>
          <ol className="process-list">
            {processSteps.map(([number, title, description]) => (
              <li className="process-step" key={number}>
                <span className="process-number">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section technical-section" aria-labelledby="technical-heading">
          <SectionLabel number="03" label="TECHNICAL EDGE" />
          <div className="technical-layout">
            <h2 id="technical-heading">Technical hiring deserves more than a keyword search.</h2>
            <div className="technical-copy">
              <p>I have a working understanding of APIs, databases, backend systems, and software development workflows. It helps me understand the work behind a technical role and screen candidates with that context in mind.</p>
              <div className="role-list" aria-label="Role areas">
                {["FULL STACK", "BACKEND", "FRONTEND", "AI & DATA", "QA", "DESIGN", "PROJECT MANAGEMENT"].map((role) => <span key={role}>{role}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="content-section experience-section" aria-labelledby="experience-heading">
          <SectionLabel number="04" label="EXPERIENCE" />
          <div className="section-heading-row">
            <h2 id="experience-heading">People, projects,<br />and the work between.</h2>
            <p className="section-intro">Five years of experience across human resources, recruitment, operations, and project coordination.</p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <p className="experience-date">{item.date}</p>
                <div className="experience-detail">
                  <h3>{item.company}</h3>
                  <p className="experience-role">{item.role}</p>
                  <p className="experience-place">{item.place}</p>
                  <p className="experience-description">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="education-block">
            <h3>Education</h3>
            <div className="education-row"><span>2026 — 2027</span><p><strong>MBA Global</strong><br />Roots IVY International</p></div>
            <div className="education-row"><span>2022 — 2024</span><p><strong>Master’s in Project Management</strong><br />University of Management and Technology</p></div>
          </div>
        </section>

        <section className="content-section faq-section" aria-labelledby="faq-heading">
          <SectionLabel number="05" label="FAQ" />
          <div className="faq-layout">
            <h2 id="faq-heading">A few useful answers.</h2>
            <div className="faq-list">
              {questions.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}<span aria-hidden="true">+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="contact-inner">
          <div className="contact-copy">
            <SectionLabel number="06" label="CONTACT" />
            <h2 id="contact-heading">Tell me who<br />you need.</h2>
            <p>Share a little about the role or project. I’ll be glad to hear what you’re looking for.</p>
            <a className="contact-link" href={linkedIn} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight aria-hidden="true" /></a>
            <p className="contact-note">Email and WhatsApp details haven’t been provided yet.</p>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <div className="form-two-col">
              <label>Name <Input name="name" autoComplete="name" placeholder="Your name" required /></label>
              <label>Company <Input name="company" autoComplete="organization" placeholder="Company name" /></label>
            </div>
            <label>Role or team needed <Input name="role" placeholder="e.g. Product designer" required /></label>
            <div className="form-two-col">
              <label>Team size <Input name="teamSize" inputMode="numeric" placeholder="e.g. 2 people" /></label>
              <label>Timeline <Input name="timeline" placeholder="e.g. This month" /></label>
            </div>
            <label>Message <Textarea name="message" placeholder="A little about the work and the person you need" required rows={4} /></label>
            <div className="form-submit-row">
              <Button type="submit" size="lg" className="form-button">Copy enquiry <ArrowRight aria-hidden="true" /></Button>
              <span role="status" className="form-status">{messageCopied ? <><Check aria-hidden="true" /> Copied. Paste it into LinkedIn to send.</> : "Your message will be copied so you can send it on LinkedIn."}</span>
            </div>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top">Eaman Mansha<span>.</span></a>
        <p>HR and project management · Lahore, Pakistan</p>
        <a href={linkedIn} target="_blank" rel="noreferrer" aria-label="Eaman Mansha on LinkedIn">LinkedIn</a>
        <span>© {new Date().getFullYear()} Eaman Mansha</span>
      </footer>
    </main>
  );
}
