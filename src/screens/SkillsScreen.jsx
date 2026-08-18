import { useState } from "react";

const SKILLS_DATA = [
  {
    id: "molbio",
    icon: "🧬",
    title: "Molecular Biology & Protein Biochemistry",
    groups: [
      { label: "Protein Analysis", items: [
        "Western blotting",
        "Co-immunoprecipitation",
      ]},
      { label: "Molecular Biology", items: [
        "RT-qPCR",
        "Molecular cloning",
      ]},
      { label: "Recombinant Protein & Secretome", items: [
        "Recombinant protein production and purification (FPLC)",
        "Conditioned medium protein precipitation and secretome analysis",
        "Automated immunoassays (Gyrolab)",
      ]},
    ],
  },
  {
    id: "cellbio",
    icon: "🧫",
    title: "Cell Biology & Experimental Models",
    groups: [
      { label: "Cell Lines & Models", items: [
        "Ovarian cancer: SKOV3, OVCAR3",
        "Colorectal cancer: RKO, LS174T, HCT116, HT29",
        "Lung cancer: A549",
        "Breast cancer: MCF7, MDA-MB-231",
        "293T cells",
      ]},
      { label: "Cell Culture & Engineering", items: [
        "Mammalian and bacterial cell culture",
        "Stable lentiviral production and transduction",
      ]},
      { label: "Imaging & Sorting", items: [
        "Immunofluorescence microscopy",
        "Fluorescence-activated cell sorting (FACS)",
      ]},
    ],
  },
  {
    id: "assays",
    icon: "🧪",
    title: "Functional & Phenotypic Assays",
    groups: [
      { label: "Proliferation & Migration", items: [
        "Cell proliferation assays",
        "Scratch (wound healing) assays",
      ]},
      { label: "Protein Synthesis & Senescence", items: [
        "SUnSET assay (puromycin incorporation)",
        "Senescence-associated β-galactosidase assay",
      ]},
      { label: "Functional & Pharmacological Assays", items: [
        "Antibody-based functional assays",
        "Dose-response and IC50 determination assays",
        "Autophagic flux inhibition assays",
      ]},
    ],
  },
  {
    id: "bioinformatics",
    icon: "💻",
    title: "Bioinformatics & Multi-omics Analysis",
    groups: [
      { label: "Proteomics", items: [
        "Label-free quantitative proteomics (nanoLC-MS/MS)",
      ]},
      { label: "Transcriptomics & Pathway Analysis", items: [
        "Transcriptomic analyses (TCGA, GTEx, CCLE)",
        "Gene set enrichment analysis (GSEA, ssGSEA)",
        "Functional enrichment and network analysis (GO, Cytoscape, ClueGO)",
      ]},
      { label: "Survival & Integration", items: [
        "Survival analysis (Kaplan–Meier)",
        "Multi-omics data integration and visualization in R",
      ]},
    ],
  },
  {
    id: "imageanalysis",
    icon: "🔬",
    title: "Image Analysis & Visualization",
    groups: [
      { label: "Software", items: [
        "ImageJ",
        "QuPath",
        "LAS X (Leica)",
        "Cytoscape",
        "M3Vision",
      ]},
    ],
  },
  {
    id: "software",
    icon: "📊",
    title: "Software & Data Analysis",
    groups: [
      { label: "Tools", items: [
        "R / RStudio",
        "GraphPad Prism",
        "GitHub",
        "Zotero",
      ]},
    ],
  },
];

function SkillCategory({ category, open, onToggle }) {
  return (
    <div style={{
      background: "#fff", border: "1px solid #dde6e8",
      borderLeft: "3px solid #2a6b7c", borderRadius: "4px",
      marginBottom: "0.6rem", overflow: "hidden",
    }}>
      <button
        onClick={onToggle}
        style={{
          display: "flex", alignItems: "center", gap: "0.7rem",
          width: "100%", textAlign: "left",
          padding: "0.9rem 1rem", background: open ? "#f4f9fa" : "#fff",
          border: "none", cursor: "pointer", outline: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{category.icon}</span>
        <span style={{
          flex: 1, fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "0.92rem", fontWeight: 700, color: "#1a1a2e", lineHeight: 1.35,
        }}>
          {category.title}
        </span>
        <span style={{ color: "#2a6b7c", fontSize: "0.7rem", flexShrink: 0 }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div style={{ padding: "0 1rem 1rem", borderTop: "1px solid #eef0f2" }}>
          {category.groups.map(group => (
            <div key={group.label} style={{ marginTop: "0.9rem" }}>
              <div style={{
                fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem",
                letterSpacing: "0.1em", textTransform: "uppercase", color: "#999",
                marginBottom: "0.4rem",
              }}>
                {group.label}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {group.items.map(item => (
                  <li key={item} style={{
                    fontFamily: "Georgia, serif", fontSize: "0.83rem", color: "#333",
                    padding: "0.22rem 0", display: "flex", gap: "0.45rem", lineHeight: 1.4,
                  }}>
                    <span style={{ color: "#2a6b7c", flexShrink: 0 }}>▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkillsScreen() {
  const [openId, setOpenId] = useState(SKILLS_DATA[0].id);

  return (
    <div className="screen-content">
      <p className="section-label" style={{ marginTop: 0 }}>Technical Skills</p>
      <p style={{
        fontFamily: "Georgia, serif", fontSize: "0.83rem", fontStyle: "italic",
        color: "#666", marginBottom: "1rem", lineHeight: 1.6,
      }}>
        Tap a category to view the techniques and methods used throughout my research projects.
      </p>
      {SKILLS_DATA.map(category => (
        <SkillCategory
          key={category.id}
          category={category}
          open={openId === category.id}
          onToggle={() => setOpenId(o => (o === category.id ? null : category.id))}
        />
      ))}
      <p style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: "0.72rem", color: "#bbb", marginTop: "1.2rem" }}>
        © 2026 Marianne Guilbard
      </p>
    </div>
  );
}
