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

export default function ResearchScreen({ onOpen }) {
  return (
    <div className="screen-content">
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
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1rem", fontWeight: 700, color: "#1a1a2e",
                  marginBottom: "0.15rem",
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: "0.8rem", color: "#555", lineHeight: 1.4,
                }}>
                  {item.institution}
                </div>
              </div>
            </div>
            <span className="tag" style={{ flexShrink: 0 }}>{item.period}</span>
          </div>
          <p style={{
            fontFamily: "Georgia, serif", fontSize: "0.82rem",
            color: "#666", lineHeight: 1.5, marginTop: "0.5rem",
            paddingLeft: "1.8rem",
          }}>
            {item.project}
          </p>
          <div style={{ paddingLeft: "1.8rem", marginTop: "0.6rem" }}>
            <span style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "0.78rem", color: "#2a6b7c",
            }}>
              View details →
            </span>
          </div>
        </button>
      ))}

      {/* Conference image */}
      <p className="section-label">Conferences</p>
      <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #dde6e8" }}>
        <img
          src={`${BASE}image_conf.png`}
          alt="Conference presentations"
          style={{ width: "100%", display: "block" }}
        />
      </div>
      <p style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#888", marginTop: "0.5rem", textAlign: "center" }}>
        Presented at international and national conferences — see full CV tab for details
      </p>
    </div>
  );
}
