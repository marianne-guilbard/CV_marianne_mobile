import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

export const RESEARCH = [
  {
    id: "phd",
    emoji: "🎓",
    title: "PhD Position",
    institution: "University of Bordeaux · Institut Bergonié · BRIC",
    supervisor: "Dr. Frédéric Delom",
    supervisorLink: "https://www.researchgate.net/profile/Frederic-Delom",
    period: "02/23 – 02/26",
    funding: "CIFRE Doctoral Fellowship — ANRT & Thabor Therapeutics",
    project: "Study of the functions of the secreted protein disulfide isomerase, AGR2, in tumor adaptation",
    overview: "This project investigates the dual intracellular and extracellular functions of AGR2, a secreted protein disulfide isomerase overexpressed in multiple solid tumours. The work addresses how extracellular AGR2 remodels the tumour microenvironment to support cell proliferation, invasion, and therapy resistance, and explores AGR2 as a potential therapeutic target.",
    methods: ["Western blot", "Co-immunoprecipitation", "Flow cytometry", "Confocal microscopy", "ELISA", "Proximity ligation assay", "siRNA knockdown", "Recombinant protein production", "Cell viability assays"],
    image: `${BASE}image_phd.png`,
    reportLink: "https://theses.hal.science/tel-05558177",
    reportLabel: "View PhD thesis (HAL)",
    pubLink: "https://doi.org/10.1089/ars.2024.0561",
    pubLabel: "Related publication ↗",
  },
  {
    id: "m2",
    emoji: "🧫",
    title: "Master 2 Internship",
    institution: "University of Bordeaux · Institut Bergonié · BRIC",
    supervisor: "Dr. Frédéric Delom",
    supervisorLink: "https://www.researchgate.net/profile/Frederic-Delom",
    period: "01/22 – 01/23",
    project: "Role of AGR2 in Therapy-Induced Senescence in Breast Cancer",
    overview: "Explored the role of the protein disulfide isomerase AGR2 in therapy-induced senescence (TIS) in breast cancer. TIS is a stress response triggered by chemotherapy where cancer cells enter stable growth arrest. The project investigated whether AGR2 modulates the acquisition or maintenance of the senescent phenotype and the senescence-associated secretory profile (SASP).",
    methods: ["SA-β-galactosidase assay", "Western blot", "ELISA", "Flow cytometry", "Immunofluorescence", "siRNA knockdown"],
    image: `${BASE}image_M2.png`,
    reportLink: `${BASE}M2 report - marianne guilbard.pdf`,
    reportLabel: "View full report (PDF)",
  },
  {
    id: "m1",
    emoji: "🧫",
    title: "Master 1 Internship",
    institution: "University of Grenoble Alpes · IAB",
    supervisor: "Dr. Nicolas Reynoird",
    supervisorLink: "https://www.researchgate.net/profile/Nicolas-Reynoird-2",
    period: "03/21 – 07/21",
    project: "Lysine Methylation-Based Signalling in Triple-Negative Breast Cancer",
    overview: "Investigated the role of BCAR1 in the SMYD2–BCAR3 signalling pathway and its effect on cytoskeletal remodelling in aggressive breast cancer. The lysine methyltransferase SMYD2 methylates BCAR3, enhancing cancer cell migration and invasiveness. Using specific mutants, we demonstrated that BCAR1 interacts with FMNL3 through BCAR3, highlighting the importance of this complex in actin dynamics and tumour dissemination.",
    methods: ["Co-immunoprecipitation", "Western blot", "Confocal microscopy", "Wound healing assay", "Site-directed mutagenesis"],
    image: `${BASE}image_M1.png`,
    reportLink: `${BASE}M1 report - Marianne Guilbard.pdf`,
    reportLabel: "View full report (PDF)",
  },
];

const PUBLICATIONS = [
  { title: "PhD Thesis — Study of the functions of the secreted protein disulfide isomerase, AGR2, in tumor adaptation", href: "https://theses.hal.science/tel-05558177", year: "2026" },
  { title: "Modulation of PDI Functions by Localization: The Example of the Anterior Gradient Family", href: "https://doi.org/10.1089/ars.2024.0561", year: "2025" },
  { title: "Endoplasmic Reticulum Homeostasis — From Molecules to Organisms: Report on the 14th International Calreticulin Workshop", href: "https://doi.org/10.1111/jcmm.17840", year: "2023" },
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
  { degree: "PhD in Life Sciences", institution: "University of Bordeaux, France", years: "2023–2026" },
  { degree: "Master's in Physiology, Epigenetics, Differentiation & Cancer", institution: "University of Grenoble Alpes, France", years: "2020–2022" },
  { degree: "Bachelor's in Cellular Biology, Genetics, Microbiology & Animal Physiology", institution: "University of Rennes 1 · Erasmus+ at University of Galway, Ireland", years: "2017–2020" },
];

function ConfEntry({ title, venue, topic }) {
  return (
    <div style={{ padding: "0.55rem 0", borderBottom: "1px solid #f0f0f0" }}>
      <div style={{ fontFamily: "Georgia, serif", fontSize: "0.83rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.1rem" }}>{title}</div>
      <div style={{ fontFamily: "Georgia, serif", fontSize: "0.76rem", color: "#2a6b7c", marginBottom: topic ? "0.1rem" : 0 }}>{venue}</div>
      {topic && <div style={{ fontFamily: "Georgia, serif", fontSize: "0.76rem", color: "#555", fontStyle: "italic" }}>"{topic}"</div>}
    </div>
  );
}

export default function ResearchScreen({ onOpen }) {
  const [confOpen, setConfOpen] = useState(false);

  return (
    <div className="screen-content">

      {/* ── Research Experience ── */}
      <p className="section-label" style={{ marginTop: 0 }}>Research Experience</p>
      {RESEARCH.map((item) => (
        <button
          key={item.id}
          onClick={() => onOpen(item)}
          style={{
            display: "block", width: "100%", textAlign: "left",
            background: "#fff", border: "1px solid #dde6e8",
            borderLeft: "3px solid #2a6b7c", borderRadius: "4px",
            padding: "1rem 1.1rem", marginBottom: "0.75rem",
            cursor: "pointer", outline: "none",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", flex: 1 }}>
              <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>{item.emoji}</span>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.15rem" }}>
                  {item.title}
                </div>
                <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.78rem", color: "#555", lineHeight: 1.4 }}>
                  {item.institution}
                </div>
              </div>
            </div>
            <span className="tag" style={{ flexShrink: 0 }}>{item.period}</span>
          </div>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "#666", lineHeight: 1.5, marginTop: "0.5rem", paddingLeft: "1.8rem" }}>
            {item.project}
          </p>
          <div style={{ paddingLeft: "1.8rem", marginTop: "0.5rem" }}>
            <span style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.78rem", color: "#2a6b7c" }}>
              View details →
            </span>
          </div>
        </button>
      ))}

      {/* ── Publications ── */}
      <p className="section-label">Publications</p>
      {PUBLICATIONS.map((p, i) => (
        <a
          key={i}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex", gap: "0.75rem", alignItems: "flex-start",
            background: "#fff", border: "1px solid #dde6e8",
            borderLeft: "3px solid #2a6b7c", borderRadius: "4px",
            padding: "0.85rem 1rem", marginBottom: "0.6rem",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "0.95rem", flexShrink: 0 }}>📄</span>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.84rem", color: "#1a1a2e", lineHeight: 1.5, flex: 1 }}>
            {p.title}
          </p>
          <span style={{ color: "#2a6b7c", fontSize: "0.76rem", flexShrink: 0 }}>{p.year}</span>
        </a>
      ))}

      {/* ── Funding & Awards ── */}
      <p className="section-label">Funding & Awards</p>
      <div className="card" style={{ padding: "0 1rem" }}>
        {AWARDS.map((a, i) => (
          <div key={i} style={{ display: "flex", gap: "0.8rem", padding: "0.75rem 0", borderBottom: i < AWARDS.length - 1 ? "1px solid #eef0f2" : "none" }}>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.82rem", fontWeight: 700, color: "#2a6b7c", flexShrink: 0, width: "3rem" }}>
              {a.year}
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.92rem", fontWeight: 600, color: "#1a1a2e", marginBottom: "0.12rem" }}>{a.title}</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "0.76rem", color: "#2a6b7c", marginBottom: "0.1rem" }}>{a.org}</div>
              {a.detail && <div style={{ fontFamily: "Georgia, serif", fontSize: "0.76rem", color: "#666", fontStyle: "italic" }}>{a.detail}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* ── Conferences ── */}
      <p className="section-label">Conferences</p>
      <button
        onClick={() => setConfOpen(o => !o)}
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          width: "100%", padding: "0.9rem 1rem",
          background: "#fff", border: "1px solid #dde6e8",
          borderLeft: "3px solid #2a6b7c",
          borderRadius: confOpen ? "4px 4px 0 0" : "4px",
          marginBottom: confOpen ? 0 : "0.6rem",
          cursor: "pointer", outline: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.95rem", fontWeight: 700, color: "#1a1a2e" }}>
          All Presentations ({ORAL.length + POSTERS.length})
        </span>
        <span style={{ color: "#2a6b7c", fontSize: "0.8rem" }}>{confOpen ? "▲" : "▼"}</span>
      </button>
      {confOpen && (
        <div style={{ background: "#fff", border: "1px solid #dde6e8", borderTop: "none", borderLeft: "3px solid #2a6b7c", borderRadius: "0 0 4px 4px", padding: "0.8rem 1rem", marginBottom: "0.6rem" }}>
          <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", marginBottom: "0.4rem" }}>🗣️ Oral Communications</div>
          {ORAL.map((c, i) => <ConfEntry key={i} {...c} />)}
          <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", margin: "0.8rem 0 0.4rem" }}>📌 Poster Presentations</div>
          {POSTERS.map((c, i) => <ConfEntry key={i} {...c} />)}
        </div>
      )}

      {/* Conference photo */}
      <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #dde6e8", marginBottom: "0.6rem" }}>
        <img src={`${BASE}image_conf.png`} alt="Conferences" style={{ width: "100%", display: "block" }} />
      </div>

      {/* ── Education ── */}
      <p className="section-label">Education</p>
      <div className="card" style={{ padding: "0 1rem" }}>
        {EDUCATION.map((e, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.6rem", padding: "0.75rem 0", borderBottom: i < EDUCATION.length - 1 ? "1px solid #eef0f2" : "none" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.92rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.15rem" }}>{e.degree}</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "0.76rem", color: "#2a6b7c" }}>{e.institution}</div>
            </div>
            <span className="tag" style={{ flexShrink: 0 }}>{e.years}</span>
          </div>
        ))}
      </div>

      {/* Study map image */}
      <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #dde6e8", margin: "0.75rem 0 0.5rem" }}>
        <img src={`${BASE}image_study.png`} alt="Academic journey" style={{ width: "100%", display: "block" }} />
      </div>

      <p style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: "0.72rem", color: "#bbb", marginTop: "1rem" }}>
        © 2026 Marianne Guilbard
      </p>
    </div>
  );
}
