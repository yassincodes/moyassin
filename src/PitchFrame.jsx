const base = import.meta.env.BASE_URL || "/";
const pitchSrc = base.endsWith("/") ? `${base}pitch.html` : `${base}/pitch.html`;

export default function PitchFrame() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        minHeight: 0,
        background: "#070707",
      }}
    >
      <header
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "10px 18px",
          borderBottom: "1px solid #252525",
          fontFamily: "system-ui, sans-serif",
          fontSize: 13,
        }}
      >
        <a
          href="/"
          style={{
            color: "#8f8f8a",
            textDecoration: "none",
            letterSpacing: "0.06em",
          }}
        >
          ← Portfolio
        </a>
        <span style={{ color: "#5a5a5a", fontSize: 11, letterSpacing: "0.12em" }}>
          Full picture
        </span>
      </header>
      <iframe
        title="Mohammed Yassin — The Full Picture"
        src={pitchSrc}
        style={{
          flex: 1,
          width: "100%",
          minHeight: 0,
          border: 0,
          display: "block",
        }}
      />
    </div>
  );
}
