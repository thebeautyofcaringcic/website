export default function About() {
  return (
    <section id="about" style={{ background: "#3A1B3A", color: "#FBD5E1", position: "relative" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "128px 32px 136px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "56px" }}>
        <div style={{ fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "13px", fontWeight: "600", color: "#F7A9C6" }}>
          {"What is socio-aesthetics?"}
        </div>
        <p style={{ margin: "0", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(30px, 4.5vw, 66px)", lineHeight: "1.22", letterSpacing: "-0.005em" }}>
          {"Beauty treatments given in hospitals, care homes and shelters, to help people "}
          <span style={{ fontWeight: "600", color: "#FFFFFF" }}>
            {"feel like themselves again"}
          </span>
          {" when life has been at its hardest."}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 72px", alignItems: "flex-start" }}>
          <p style={{ margin: "0", flex: "1 1 340px", maxWidth: "520px", color: "#E9C9D8", fontSize: "18px" }}>
            {"The treatments are familiar. The purpose is different: they promote healing through communication, wellness, comfort and confidence building, supporting both physical and emotional recovery."}
          </p>
          <div style={{ flex: "1 1 340px", display: "flex", flexWrap: "wrap", gap: "12px 40px", fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "13px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ color: "#F7A9C6" }}>
                {"Founded"}
              </span>
              <span style={{ fontSize: "30px", letterSpacing: "0.06em", fontWeight: "300" }}>
                {"2023"}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ color: "#F7A9C6" }}>
                {"Based in"}
              </span>
              <span style={{ fontSize: "30px", letterSpacing: "0.06em", fontWeight: "300" }}>
                {"Bristol"}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ color: "#F7A9C6" }}>
                {"Registered"}
              </span>
              <span style={{ fontSize: "30px", letterSpacing: "0.06em", fontWeight: "300" }}>
                {"Social enterprise"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
