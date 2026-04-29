import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

const SECTIONS = [
  {
    id: "international",
    label: "🌍 International & Coordination",
    items: [
      {
        title: "CLC — Club Langues & Civilisations",
        role: "Co-Head of a Linguistic Stay",
        location: "Bournemouth & Oxford, UK",
        year: "2019",
        description: "Coordinated and supervised a cultural and language immersion programme, ensuring participant safety, logistical organisation, and an enriching educational experience in an international setting.",
        skills: ["Programme coordination", "Team leadership", "Intercultural communication", "Logistics management"],
        link: "https://www.clc.fr/",
        linkLabel: "Learn more about CLC",
        image: `${BASE}CLC_picture.png`,
      },
      {
        title: "Windsor Mountain International",
        role: "Camp Counselor & Science Team Co-Head",
        location: "New Hampshire, USA",
        year: "2018",
        description: "Led and coordinated STEM-related activities within an international summer camp, fostering teamwork, scientific curiosity, and engagement among campers from diverse backgrounds.",
        skills: ["STEM facilitation", "Cross-cultural teamwork", "Youth engagement", "Scientific communication"],
        link: "https://windsormountain.org/",
        linkLabel: "Learn more about Windsor Mountain",
        image: `${BASE}WM.png`,
      },
    ],
  },
  {
    id: "outreach",
    label: "🧬 Science Communication & Outreach",
    items: [
      {
        title: "Opération Déclics",
        role: "Speaker",
        location: "Bordeaux, France",
        year: "2023–2024",
        description: "Presented my research to high-school students, promoting scientific curiosity, facilitating discussions on biology-related topics, and raising awareness about research careers.",
        skills: ["Science communication", "Public speaking", "Science outreach", "Career mentoring"],
        link: "https://www.cerclefser.org/fr/declics/",
        linkLabel: "Learn more about DECLICS",
      },
      {
        title: "GoodPlanet Foundation",
        role: "Volunteer",
        location: "Paris, France",
        year: "2022",
        description: "Contributed to environmental awareness initiatives linking sustainability, health, and societal engagement through public outreach activities.",
        skills: ["Environmental awareness", "Public engagement", "Volunteering", "Sustainability"],
        link: "https://www.goodplanet.org/fr/",
        linkLabel: "Learn more about GoodPlanet",
        image: `${BASE}Goodplanet.png`,
      },
    ],
  },
  {
    id: "teaching",
    label: "👩‍🏫 Teaching & Mentorship",
    items: [
      {
        title: "L'Âge d'Or",
        role: "Digital Literacy Mentor",
        location: "Grenoble, France",
        year: "2020",
        description: "Supported senior participants in developing digital skills through individualised guidance, promoting autonomy and confidence in the use of digital tools.",
        skills: ["Digital literacy", "Patience & pedagogy", "Individualised support", "Social engagement"],
        link: "https://www.cyberdeclic.org/",
        linkLabel: "Learn more about L'Âge d'Or",
      },
      {
        title: "Cercle Paul Bert",
        role: "Academic Mentor",
        location: "Rennes, France",
        year: "2018",
        description: "Provided academic support and mentorship to middle- and high-school students, contributing to educational follow-up and academic confidence.",
        skills: ["Academic tutoring", "Mentoring", "Communication", "Educational support"],
        link: "https://cerclepaulbert.asso.fr/",
        linkLabel: "Learn more about CPB",
      },
    ],
  },
];

function ExperienceCard({ title, role, location, year, description, skills, link, linkLabel, image }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: "#fff", border: "1px solid #dde6e8",
      borderLeft: "3px solid #2a6b7c", borderRadius: "4px",
      marginBottom: "0.75rem", overflow: "hidden",
    }}>
      {/* Header — always visible, tap to expand */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          gap: "0.6rem", width: "100%", textAlign: "left",
          padding: "0.95rem 1rem", background: "none",
          border: "none", cursor: "pointer", outline: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.15rem" }}>
            {title}
          </div>
          <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.8rem", color: "#2a6b7c" }}>
            {role}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem", flexShrink: 0 }}>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.88rem", fontWeight: 700, color: "#2a6b7c" }}>
            {year}
          </div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.72rem", color: "#999" }}>
            {location}
          </div>
          <span style={{ color: "#2a6b7c", fontSize: "0.7rem", marginTop: "0.1rem" }}>{open ? "▲" : "▼"}</span>
        </div>
      </button>

      {/* Expandable details */}
      {open && (
        <div style={{ padding: "0 1rem 1rem", borderTop: "1px solid #eef0f2" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", lineHeight: 1.72, color: "#333", margin: "0.7rem 0 0.8rem", textAlign: "justify" }}>
            {description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.8rem" }}>
            {skills.map(s => <span key={s} className="tag">{s}</span>)}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Georgia, serif", fontSize: "0.8rem",
                color: "#2a6b7c", textDecoration: "none",
                borderBottom: "1px solid #c0dde3",
              }}
            >
              ↗ {linkLabel}
            </a>
          )}
          {image && (
            <div style={{ marginTop: "0.9rem", borderRadius: "6px", overflow: "hidden", border: "1px solid #dde6e8" }}>
              <img src={image} alt={title} style={{ width: "100%", display: "block" }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function BeyondScreen() {
  return (
    <div className="screen-content">
      {SECTIONS.map((section, si) => (
        <div key={section.id}>
          <p className={`section-label${si === 0 ? "" : ""}`} style={{ marginTop: si === 0 ? 0 : "1.8rem" }}>
            {section.label}
          </p>
          {section.items.map((item, i) => (
            <ExperienceCard key={i} {...item} />
          ))}
        </div>
      ))}
      <p style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: "0.72rem", color: "#bbb", marginTop: "1rem" }}>
        © 2026 Marianne Guilbard
      </p>
    </div>
  );
}
