import { useState } from "react";
import AboutScreen from "./screens/AboutScreen";
import ResearchScreen from "./screens/ResearchScreen";
import BeyondScreen from "./screens/BeyondScreen";
import DetailSheet from "./components/DetailSheet";

function IconAbout() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function IconResearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6v5l3 8H6L9 8V3z"/>
      <line x1="6" y1="3" x2="18" y2="3"/>
    </svg>
  );
}

function IconBeyond() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

const TABS = [
  { id: "about",    label: "About",    Icon: IconAbout },
  { id: "research", label: "Research", Icon: IconResearch },
  { id: "beyond",   label: "Beyond",   Icon: IconBeyond },
];

export default function App() {
  const [tab, setTab] = useState("about");
  const [sheet, setSheet] = useState(null);

  const handleTabChange = (id) => {
    setTab(id);
    setSheet(null);
  };

  return (
    <div className="app">
      <header className="top-bar">
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1rem",
          fontWeight: 700,
          color: "#1a1a2e",
          letterSpacing: "-0.01em",
        }}>
          Marianne Guilbard
        </span>
      </header>

      <div className="screen">
        {tab === "about"    && <AboutScreen />}
        {tab === "research" && <ResearchScreen onOpen={setSheet} />}
        {tab === "beyond"   && <BeyondScreen />}
      </div>

      <nav className="tab-bar">
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`tab-btn${tab === id ? " active" : ""}`}
            onClick={() => handleTabChange(id)}
          >
            <Icon />
            <span className="tab-label">{label}</span>
          </button>
        ))}
      </nav>

      {sheet && (
        <>
          <div className="sheet-overlay" onClick={() => setSheet(null)} />
          <DetailSheet data={sheet} onClose={() => setSheet(null)} />
        </>
      )}
    </div>
  );
}
