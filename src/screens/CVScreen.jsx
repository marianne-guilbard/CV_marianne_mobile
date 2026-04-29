import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

const PUBLICATIONS = [
  {
    title: "PhD Thesis — Study of the functions of the secreted protein disulfide isomerase, AGR2, in tumor adaptation",
    href: "https://theses.hal.science/tel-05558177",
    year: "2026",
  },
  {
    title: "Modulation of PDI Functions by Localization: The Example of the Anterior Gradient Family",
    href: "https://doi.org/10.1089/ars.2024.0561",
    year: "2025",
  },
  {
    title: "Endoplasmic Reticulum Homeostasis — From Molecules to Organisms: Report on the 14th International Calreticulin Workshop",
    href: "https://doi.org/10.1111/jcmm.17840",
    year: "2023",
  },
];

const AWARDS = [
  { year: "2025", title: "FEBS Travel Grant", org: "Federation of European Biochemical Societies", detail: "Awarded to attend and present at the FEBS-IUBMB-ENABLE conference, Glasgow, UK." },
  { year: "2023", title: "Best Poster Award", org: "14th International Calreticulin Workshop · Saint-Malo", detail: '"AGR2: A link between ER proteostasis and cancer proliferation"' },
  { year: "2023", title: "CIFRE Doctoral Fellowship", org: "ANRT & Thabor Therapeutics", detail: "Industrial–academic grant supporting a collaborative PhD." },
  { year: "2020", title: "Erasmus+ Mobility Scholarship", org: "European Commission", detail: "Full academic year of international study at the University of Galway, Ireland." },
];

const ORAL = [
  { title: "3rd Bordeaux Cancer Research Meeting", venue: "Bordeaux · Oct 2024", topic: "Endoplasmic reticulum proteostasis in high grade serous ovarian cancer" },
  { title: "ENLIGHT Congress", venue: "Bordeaux · Sep 2023", topic: "AGR2 & Gynecological cancers" },
  { title: "BRIC Scientific Seminar", venue: "Bordeaux · Jan 2026", topic: "Complementary intra- and extracellular activities of AGR2 in tumorigenesis" },
  { title: "Biological and Medical Sciences Dept. Annual Day", venue: "Bordeaux · Dec 2024", topic: null },
];

const POSTERS = [
  { title: "5th Endoplasmic Reticulum International Symposium", venue: "Paris · Oct 2025", topic: "Extracellular AGR2 enhances protein synthesis and supports tumorigenic behaviours" },
  { title: "FEBS-IUBMB-ENABLE Conference", venue: "Glasgow · Sep 2025", topic: "Bridging Minds: Interdisciplinary research for the future of life sciences" },
  { title: "14th International Calreticulin Workshop", venue: "Saint-Malo · May 2023", topic: "AGR2: A link between ER proteostasis and cancer proliferation" },
  { title: "Biological and Medical Sciences Dept. Annual Day", venue: "Bordeaux · Dec 2023", topic: null },
];

const EDUCATION = [
  {
    degree: "PhD in Life Sciences",
    institution: "University of Bordeaux, France",
    years: "2023–2026",
    description: "A meaningful step in my academic journey, undertaken to develop genuine scientific independence. The doctoral project gave me the opportunity to fully integrate the knowledge and skills built during my Bachelor's and Master's degrees, from experimental design to critical data analysis and scientific communication.",
  },
  {
    degree: "Master's in Physiology, Epigenetics, Differentiation & Cancer",
    institution: "University of Grenoble Alpes, France",
    years: "2020–2022",
    description: "A fully English-taught curriculum designed for international research environments. The program combined in-depth coursework with rigorous examinations and oral presentations, which helped me develop critical thinking, scientific autonomy, and clear scientific communication.",
    link: "https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-biologie-IAQKB0GE/parcours-physiology-epigenetics-differentiation-and-cancer-2e-annee-IBAVFFMU.html",
  },
  {
    degree: "Bachelor's in Cellular Biology, Genetics, Microbiology & Animal Physiology",
    institution: "University of Rennes 1 · Erasmus+ at University of Galway, Ireland",
    years: "2017–2020",
    description: "A broad integrative approach to the life sciences spanning cellular biology, genetics, microbiology, and physiology — entirely in English. Completed my final year abroad through Erasmus+, fostering adaptability and early exposure to diverse research cultures.",
    link: "https://sve.univ-rennes.fr/undergraduate-exchange-program-molecular-and-cellular-biology-and-physiology#p-462",
  },
];

function PubCard({ title, href, year }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex", gap: "0.8rem", alignItems: "flex-start",
        background: "#fff", border: "1px solid #dde6e8",
        borderLeft: "3px solid #2a6b7c", borderRadius: "4px",
        padding: "0.9rem 1rem", marginBottom: "0.6rem",
        textDecoration: "none",
      }}
    >
      <span style={{ fontSize: "1rem", flexShrink: 0 }}>📄</span>
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", color: "#1a1a2e", lineHeight: 1.5 }}>
          {title}
        </p>
      </div>
      <span style={{ color: "#2a6b7c", fontSize: "0.8rem", flexShrink: 0 }}>{year}</span>
    </a>
  );
}

function AwardRow({ year, title, org, detail }) {
  return (
    <div style={{ display: "flex", gap: "0.8rem", padding: "0.8rem 0", borderBottom: "1px solid #eef0f2" }}>
      <div style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "0.85rem", fontWeight: 700, color: "#2a6b7c",
        flexShrink: 0, width: "3rem",
      }}>
        {year}
      </div>
      <div>
        <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.95rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.15rem" }}>
          {title}
        </div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#2a6b7c", marginBottom: "0.15rem" }}>{org}</div>
        {detail && <div style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#666", fontStyle: "italic" }}>{detail}</div>}
      </div>
    </div>
  );
}

function ConfEntry({ title, venue, topic }) {
  return (
    <div style={{ padding: "0.6rem 0", borderBottom: "1px solid #f0f0f0" }}>
      <div style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.1rem" }}>{title}</div>
      <div style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#2a6b7c", marginBottom: topic ? "0.1rem" : 0 }}>{venue}</div>
      {topic && <div style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#555", fontStyle: "italic" }}>"{topic}"</div>}
    </div>
  );
}

function EduCard({ degree, institution, years, description, link }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#fff", border: "1px solid #dde6e8",
      borderRadius: "4px", marginBottom: "0.6rem", overflow: "hidden",
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          gap: "0.8rem", width: "100%", textAlign: "left",
          padding: "0.9rem 1rem", background: open ? "#f4f9fa" : "#fff",
          border: "none", cursor: "pointer", outline: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.2rem" }}>
            {degree}
          </div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#2a6b7c" }}>{institution}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.3rem", flexShrink: 0 }}>
          <span className="tag">{years}</span>
          <span style={{ color: "#2a6b7c", fontSize: "0.7rem" }}>{open ? "▲" : "▼"}</span>
        </div>
      </button>
      {open && (
        <div style={{ padding: "0 1rem 0.9rem", borderTop: "1px solid #eef0f2" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.83rem", color: "#444", lineHeight: 1.7, marginTop: "0.7rem", textAlign: "justify" }}>
            {description}
          </p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#2a6b7c", textDecoration: "none", borderBottom: "1px solid #c0dde3", display: "inline-block", marginTop: "0.5rem" }}>
              View Programme →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function CVScreen() {
  const [confOpen, setConfOpen] = useState(false);

  return (
    <div className="screen-content">

      {/* Publications */}
      <p className="section-label" style={{ marginTop: 0 }}>Publications</p>
      {PUBLICATIONS.map((p, i) => <PubCard key={i} {...p} />)}

      {/* Awards */}
      <p className="section-label">Funding & Awards</p>
      <div className="card" style={{ padding: "0 1rem" }}>
        {AWARDS.map((a, i) => <AwardRow key={i} {...a} />)}
      </div>

      {/* Conferences */}
      <p className="section-label">Conferences</p>
      <button
        onClick={() => setConfOpen(o => !o)}
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          width: "100%", padding: "0.9rem 1rem",
          background: "#fff", border: "1px solid #dde6e8",
          borderLeft: "3px solid #2a6b7c", borderRadius: "4px",
          marginBottom: confOpen ? 0 : "0.6rem",
          cursor: "pointer", outline: "none",
          WebkitTapHighlightColor: "transparent",
          borderBottomLeftRadius: confOpen ? 0 : "4px",
          borderBottomRightRadius: confOpen ? 0 : "4px",
        }}
      >
        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1a1a2e" }}>
          All Presentations ({ORAL.length + POSTERS.length})
        </span>
        <span style={{ color: "#2a6b7c", fontSize: "0.8rem" }}>{confOpen ? "▲" : "▼"}</span>
      </button>
      {confOpen && (
        <div style={{
          background: "#fff", border: "1px solid #dde6e8",
          borderLeft: "3px solid #2a6b7c", borderTop: "none",
          borderRadius: "0 0 4px 4px", padding: "0.8rem 1rem",
          marginBottom: "0.6rem",
        }}>
          <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: "0.4rem" }}>
            🗣️ Oral Communications
          </div>
          {ORAL.map((c, i) => <ConfEntry key={i} {...c} />)}
          <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", margin: "0.8rem 0 0.4rem" }}>
            📌 Poster Presentations
          </div>
          {POSTERS.map((c, i) => <ConfEntry key={i} {...c} />)}
        </div>
      )}

      {/* Conference photo */}
      <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #dde6e8", marginBottom: "0.6rem" }}>
        <img src={`${BASE}image_conf.png`} alt="Conferences" style={{ width: "100%", display: "block" }} />
      </div>

      {/* Education */}
      <p className="section-label">Education</p>
      {EDUCATION.map((e, i) => <EduCard key={i} {...e} />)}

      {/* Study image */}
      <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #dde6e8", margin: "0.8rem 0" }}>
        <img src={`${BASE}image_study.png`} alt="Academic journey" style={{ width: "100%", display: "block" }} />
      </div>

      <p style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: "0.72rem", color: "#bbb", marginTop: "1rem" }}>
        © 2026 Marianne Guilbard
      </p>
    </div>
  );
}
