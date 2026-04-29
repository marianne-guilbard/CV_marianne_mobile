const BASE = import.meta.env.BASE_URL;

export default function AboutScreen() {
  return (
    <div>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(160deg, #1a1a2e 0%, #0f3460 100%)",
        padding: "2.5rem 1.2rem 2rem",
        textAlign: "center",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(42,107,124,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative" }}>
          {/* Profile photo — larger, face-centred */}
          <div style={{
            width: 130, height: 130,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid rgba(126,207,223,0.5)",
            margin: "0 auto 1.1rem",
            flexShrink: 0,
          }}>
            <img
              src={`${BASE}image_intro.jpg`}
              alt="Marianne Guilbard"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 15%",
                display: "block",
              }}
            />
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.7rem", fontWeight: 700,
            color: "#fff", letterSpacing: "-0.02em",
            marginBottom: "0.35rem",
          }}>
            Marianne Guilbard
          </h1>
          <p style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "0.9rem", color: "#7ecfdf",
            letterSpacing: "0.1em", fontWeight: 300,
          }}>
            PhD · Life Sciences
          </p>
        </div>
      </div>

      <div className="screen-content">

        {/* Bio — fully expanded, no toggle */}
        <p className="section-label" style={{ marginTop: 0 }}>About Me</p>
        <div className="card">
          <p style={{ fontSize: "0.9rem", lineHeight: 1.78, color: "#333", textAlign: "justify" }}>
            My research interests focus on cellular adaptation mechanisms under stress conditions,
            particularly <strong>endoplasmic reticulum (ER) stress</strong>, <strong>unfolded protein
            response (UPR) signalling</strong>, and proteostasis regulation in pathological contexts.
          </p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.78, color: "#333", marginTop: "0.85rem", textAlign: "justify" }}>
            I am especially interested in how stress-adaptive pathways shape cellular plasticity and
            functional remodelling in diseased tissues. More broadly, I aim to investigate how
            fundamental stress response mechanisms can be leveraged to better understand pathological
            progression and identify new points of therapeutic vulnerability.
          </p>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.78, color: "#333", marginTop: "0.85rem", textAlign: "justify" }}>
            I am currently <strong>seeking postdoctoral opportunities</strong> to expand my expertise,
            address new biological questions, and contribute to collaborative research environments.
          </p>
        </div>

        {/* Keywords */}
        <p className="section-label">Research Keywords</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {[
            "ER stress", "UPR signalling", "Proteostasis",
            "Cancer biology", "Protein disulfide isomerase",
            "AGR2", "Tumor adaptation", "Cell biology",
          ].map(k => <span key={k} className="tag">{k}</span>)}
        </div>

        {/* Links */}
        <p className="section-label">Links</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { label: "Google Scholar", href: "https://scholar.google.com/citations?user=8LgCwdwAAAAJ&hl=fr", emoji: "🎓" },
            { label: "ResearchGate",   href: "https://www.researchgate.net/profile/Marianne-Guilbard", emoji: "🔬" },
            { label: "Email",          href: "mailto:marianne.guilbard@gmail.com", emoji: "✉️" },
          ].map(({ label, href, emoji }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "0.8rem",
                background: "#fff", border: "1px solid #dde6e8",
                borderRadius: "8px", padding: "0.85rem 1rem",
                textDecoration: "none", color: "#1a1a2e",
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: "0.9rem",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{emoji}</span>
              <span style={{ flex: 1 }}>{label}</span>
              <span style={{ color: "#2a6b7c", fontSize: "0.85rem" }}>↗</span>
            </a>
          ))}
        </div>

        <p style={{
          textAlign: "center", marginTop: "2rem",
          fontFamily: "Georgia, serif", fontSize: "0.72rem", color: "#bbb",
        }}>
          © 2026 Marianne Guilbard
        </p>
      </div>
    </div>
  );
}
