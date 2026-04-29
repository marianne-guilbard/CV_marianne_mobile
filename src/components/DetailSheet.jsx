export default function DetailSheet({ data, onClose }) {
  return (
    <div className="sheet">
      <div className="sheet-handle" />

      {/* Sheet header */}
      <div style={{
        padding: "1rem 1.2rem 0.8rem",
        borderBottom: "1px solid #dde0d8",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "0.8rem",
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
            <span style={{ fontSize: "1.3rem" }}>{data.emoji}</span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.05rem", fontWeight: 700, color: "#1a1a2e",
            }}>
              {data.title}
            </h2>
          </div>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.8rem", color: "#555" }}>
            {data.institution}
          </p>
        </div>
        <button
          onClick={onClose}
          style={{
            background: "#f0ede6", border: "none", borderRadius: "50%",
            width: 28, height: 28, cursor: "pointer", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.9rem", color: "#555",
          }}
        >✕</button>
      </div>

      <div style={{ padding: "1rem 1.2rem 2rem" }}>

        {/* Meta */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
          <span className="tag">{data.period}</span>
          {data.funding && <span className="tag">{data.funding}</span>}
        </div>

        {/* Project title */}
        <div style={{
          background: "#fff", border: "1px solid #dde6e8",
          borderLeft: "3px solid #2a6b7c", borderRadius: "4px",
          padding: "0.8rem 1rem", marginBottom: "1rem",
        }}>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", marginBottom: "0.4rem" }}>
            Project
          </p>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.95rem", fontWeight: 600, color: "#1a1a2e", lineHeight: 1.4 }}>
            {data.project}
          </p>
        </div>

        {/* Supervisor */}
        {data.supervisor && (
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", marginBottom: "0.3rem" }}>
              Supervisor
            </p>
            <a
              href={data.supervisorLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Georgia, serif", fontSize: "0.9rem",
                color: "#2a6b7c", textDecoration: "none",
                borderBottom: "1px solid #c0dde3",
              }}
            >
              {data.supervisor} ↗
            </a>
          </div>
        )}

        {/* Overview */}
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>
            Project Overview
          </p>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", lineHeight: 1.75, color: "#333", textAlign: "justify" }}>
            {data.overview}
          </p>
        </div>

        {/* Methods */}
        {data.methods && (
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>
              Methods & Techniques
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {data.methods.map(m => <span key={m} className="tag">{m}</span>)}
            </div>
          </div>
        )}

        {/* Image */}
        {data.image && (
          <div style={{ marginBottom: "1rem", borderRadius: "8px", overflow: "hidden", border: "1px solid #dde6e8" }}>
            <img src={data.image} alt={data.title} style={{ width: "100%", display: "block" }} />
          </div>
        )}

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {data.reportLink && (
            <a
              href={data.reportLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "0.5rem", padding: "0.8rem",
                background: "#1a1a2e", color: "#fff", borderRadius: "8px",
                textDecoration: "none",
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: "0.85rem", letterSpacing: "0.03em",
              }}
            >
              📄 {data.reportLabel}
            </a>
          )}
          {data.pubLink && (
            <a
              href={data.pubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "0.5rem", padding: "0.8rem",
                background: "#e8f4f6", color: "#2a6b7c",
                border: "1px solid #c0dde3", borderRadius: "8px",
                textDecoration: "none",
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: "0.85rem",
              }}
            >
              {data.pubLabel}
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
