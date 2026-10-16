export default function Hero() {
  return (
    <section style={{ position: "relative" }}>
      <header style={{ position: "relative", zIndex: "3", maxWidth: "1320px", margin: "0 auto", padding: "22px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/images/logo.png" alt="The Beauty of Caring" style={{ width: "92px", height: "92px", borderRadius: "50%", objectFit: "cover", display: "block" }} loading="eager" />
        </a>
        <nav style={{ display: "flex", flexWrap: "wrap", gap: "4px", alignItems: "center", background: "#FFF1F5", borderRadius: "999px", padding: "6px", fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "13px" }}>
          <a href="#about" style={{ textDecoration: "none", padding: "15px 18px 11px" }}>
            {"About"}
          </a>
          <a href="#session" style={{ textDecoration: "none", padding: "15px 18px 11px" }}>
            {"Services"}
          </a>
          <a href="#where" style={{ textDecoration: "none", padding: "15px 18px 11px" }}>
            {"Where we go"}
          </a>
          <a href="#natacha" style={{ textDecoration: "none", padding: "15px 18px 11px" }}>
            {"Media"}
          </a>
          <a href="#contact" style={{ textDecoration: "none", background: "#EC4B8A", padding: "15px 22px 11px", borderRadius: "999px", fontWeight: "600" }}>
            {"Work with us"}
          </a>
        </nav>
      </header>
      <div style={{ position: "relative", zIndex: "2", maxWidth: "1320px", margin: "0 auto", padding: "24px 32px 150px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "72px 96px", alignItems: "center" }}>
        <div style={{ flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "30px", position: "relative", zIndex: "1" }}>
          <div style={{ fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "13px", fontWeight: "600", color: "#1D5C70" }}>
            {"Socio-aesthetics · Bristol"}
          </div>
          <h1 style={{ margin: "0", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(48px, 6vw, 96px)", lineHeight: "0.98", letterSpacing: "-0.015em" }}>
            <span style={{ display: "block", whiteSpace: "nowrap" }}>{"Beauty is for"}</span>
            <span style={{ position: "relative", display: "inline-block", fontWeight: "600" }}>
              {"everyone."}
              <svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", left: "-2%", bottom: "-0.060em", width: "104%", height: "0.220em" }}>
                <path d="M4 16C60 4 120 22 170 12S260 4 296 14" fill="none" stroke="#EC4B8A" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p style={{ margin: "0", maxWidth: "470px", fontSize: "20px" }}>
            {"A manicure. A facial. A hand held for a while. We bring professional beauty care to people living through illness, isolation and exclusion."}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "14px", fontWeight: "600" }}>
            <a href="#contact" style={{ textDecoration: "none", background: "#3A1B3A", color: "#FBD5E1", padding: "21px 30px 17px", borderRadius: "999px" }}>
              {"Partner with us"}
            </a>
            <a href="#about" style={{ textDecoration: "none", background: "#FFF1F5", padding: "21px 30px 17px", borderRadius: "999px" }}>
              {"What we do"}
            </a>
          </div>
        </div>
        <div className="hero-art" style={{ flex: "1 1 460px", minWidth: "0", maxWidth: "620px", position: "relative", aspectRatio: "1 / 1" }}>
          <div className="tboc-disc" style={{ position: "absolute", aspectRatio: "1 / 1", borderRadius: "50%", background: "#3A1B3A" }}>
          </div>
          <div style={{ position: "absolute", width: "46%", aspectRatio: "1 / 1", right: "-20%", bottom: "-24%", borderRadius: "50%", background: "#2A7B93" }}>
          </div>
          <svg className="tboc-ring" viewBox="0 0 600 600" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}>
            <defs>
              <path id="ringHero" d="M300 300m-282 0a282 282 0 1 1 564 0a282 282 0 1 1 -564 0" />
            </defs>
            <text style={{ fontFamily: "var(--font-josefin), sans-serif" }} fontSize="23" fontWeight="400" fill="#FBD5E1">
              <textPath href="#ringHero" textLength="1750" lengthAdjust="spacing">
                {"THE BEAUTY OF CARING · MANY HANDS · ONE CIRCLE · THE BEAUTY OF CARING · MANY HANDS · ONE CIRCLE ·"}
              </textPath>
            </text>
          </svg>
          <img src="/images/hands.jpg" alt="Many hands with freshly painted nails laid in a circle on a pink tablecloth" style={{ position: "absolute", left: "9%", top: "9%", width: "82%", height: "82%", borderRadius: "50%", objectFit: "cover", objectPosition: "50% 42%" }} loading="lazy" />
          <div style={{ position: "absolute", left: "-17%", bottom: "-21%", width: "37%", transform: "rotate(-13deg)", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "100%", aspectRatio: "4 / 5", borderRadius: "50%", border: "12px solid #EC4B8A", boxSizing: "border-box", overflow: "hidden", background: "#EC4B8A" }}>
              <img src="/images/manicure.jpg" alt="Natacha painting a participant's nails" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "38% 30%", display: "block", borderRadius: "50%" }} loading="lazy" />
            </div>
            <div style={{ width: "14%", height: "86px", background: "#EC4B8A", borderRadius: "0 0 999px 999px", marginTop: "-4px" }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
