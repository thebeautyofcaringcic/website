export default function Services() {
  return (
    <section id="session" style={{ background: "#FFF1F5", position: "relative" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "136px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "72px 104px", alignItems: "center" }}>
        <div style={{ flex: "0 1 430px", minWidth: "0", position: "relative", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ position: "absolute", width: "78%", aspectRatio: "1 / 1", right: "-24%", top: "-9%", borderRadius: "50%", background: "#2A7B93" }}>
          </div>
          <div style={{ position: "absolute", width: "34%", aspectRatio: "1 / 1", left: "-12%", bottom: "14%", borderRadius: "50%", background: "#FBD5E1" }}>
          </div>
          <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5", borderRadius: "50%", border: "18px solid #EC4B8A", boxSizing: "border-box", overflow: "hidden", background: "#EC4B8A", transform: "rotate(5deg)" }}>
            <img src="/images/facial.jpg" alt="Natacha giving a facial treatment to a participant lying under a towel" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "62% 40%", display: "block", borderRadius: "50%", transform: "rotate(-5deg) scale(1.120)" }} loading="lazy" />
          </div>
          <div style={{ position: "relative", width: "38px", height: "150px", background: "#EC4B8A", borderRadius: "0 0 999px 999px", marginTop: "-8px", transform: "rotate(5deg)", transformOrigin: "50% -200px" }}>
          </div>
        </div>
        <div style={{ flex: "1 1 500px", minWidth: "0", display: "flex", flexDirection: "column", gap: "36px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "13px", fontWeight: "600", color: "#1D5C70" }}>
              {"In a session"}
            </div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: "1.04", letterSpacing: "-0.01em" }}>
              {"Familiar treatments. "}
              <span style={{ fontWeight: "600" }}>
                {"Unhurried attention."}
              </span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 24px", padding: "20px 0 16px", borderTop: "1.5px solid #EC4B8A" }}>
              <span style={{ flex: "1 1 260px", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: "1.15" }}>
                {"Therapeutic massage"}
              </span>
              <span style={{ flex: "0 1 240px", fontSize: "15px", color: "#5E3A5C" }}>
                {"to relax and restore comfort"}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 24px", padding: "20px 0 16px", borderTop: "1.5px solid #EC4B8A" }}>
              <span style={{ flex: "1 1 260px", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: "1.15" }}>
                {"Facial treatments"}
              </span>
              <span style={{ flex: "0 1 240px", fontSize: "15px", color: "#5E3A5C" }}>
                {"gentle care for fragile skin"}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 24px", padding: "20px 0 16px", borderTop: "1.5px solid #EC4B8A" }}>
              <span style={{ flex: "1 1 260px", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: "1.15" }}>
                {"Therapeutic makeup"}
              </span>
              <span style={{ flex: "0 1 240px", fontSize: "15px", color: "#5E3A5C" }}>
                {"to recognise yourself in the mirror"}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 24px", padding: "20px 0 16px", borderTop: "1.5px solid #EC4B8A" }}>
              <span style={{ flex: "1 1 260px", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: "1.15" }}>
                {"Manicure"}
              </span>
              <span style={{ flex: "0 1 240px", fontSize: "15px", color: "#5E3A5C" }}>
                {"for women and for men"}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 24px", padding: "20px 0 16px", borderTop: "1.5px solid #EC4B8A", borderBottom: "1.5px solid #EC4B8A" }}>
              <span style={{ flex: "1 1 260px", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: "1.15" }}>
                {"Hygiene & care tips"}
              </span>
              <span style={{ flex: "0 1 240px", fontSize: "15px", color: "#5E3A5C" }}>
                {"routines to carry on at home"}
              </span>
            </div>
          </div>
          <p style={{ margin: "0", maxWidth: "520px" }}>
            {"One-to-one or as a group workshop. Prices vary with the service needed — "}
            <a href="#contact" style={{ fontWeight: "700" }}>
              {"email for a free quote"}
            </a>
            {"."}
          </p>
        </div>
      </div>
    </section>
  );
}
