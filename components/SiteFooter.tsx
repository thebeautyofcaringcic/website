export default function SiteFooter() {
  return (
    <footer id="contact" style={{ background: "#EC4B8A", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "128px 32px 0", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "36px", alignItems: "center", textAlign: "center" }}>
        <h2 style={{ margin: "0", maxWidth: "1000px", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(42px, 6.6vw, 104px)", lineHeight: "1", letterSpacing: "-0.015em" }}>
          {"Add your hands "}
          <span style={{ fontWeight: "600" }}>
            {"to the circle."}
          </span>
        </h2>
        <p style={{ margin: "0", maxWidth: "520px", fontSize: "19px", fontWeight: "500" }}>
          {"Partner with us, fund a project, collaborate or volunteer."}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "14px", fontWeight: "600" }}>
          <a href="mailto:thebeautyofcaring@gmail.com" style={{ textDecoration: "none", background: "#3A1B3A", color: "#FBD5E1", padding: "21px 30px 17px", borderRadius: "999px" }}>
            {"Email Natacha"}
          </a>
          <a href="mailto:thebeautyofcaring@gmail.com" style={{ textDecoration: "none", background: "#FBD5E1", padding: "18px 30px", borderRadius: "999px", textTransform: "none", letterSpacing: "0.04em", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "16px" }}>
            {"thebeautyofcaring@gmail.com"}
          </a>
        </div>
        <div style={{ position: "relative", width: "min(760px, 100%)", aspectRatio: "2 / 1", overflow: "hidden", marginTop: "40px" }}>
          <div style={{ position: "absolute", left: "0", top: "0", width: "100%", aspectRatio: "1 / 1" }}>
            <svg className="tboc-ring" viewBox="0 0 600 600" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}>
              <defs>
                <path id="ringFoot" d="M300 300m-282 0a282 282 0 1 1 564 0a282 282 0 1 1 -564 0" />
              </defs>
              <text style={{ fontFamily: "var(--font-josefin), sans-serif" }} fontSize="23" fontWeight="400" fill="#3A1B3A">
                <textPath href="#ringFoot" textLength="1750" lengthAdjust="spacing">
                  {"BEAUTY IS FOR EVERYONE · BEAUTY IS FOR EVERYONE · BEAUTY IS FOR EVERYONE · BEAUTY IS FOR EVERYONE ·"}
                </textPath>
              </text>
            </svg>
            <img src="/images/hands.jpg" alt="" style={{ position: "absolute", left: "9%", top: "9%", width: "82%", height: "82%", borderRadius: "50%", objectFit: "cover", objectPosition: "50% 42%" }} loading="lazy" />
          </div>
        </div>
      </div>
      <div style={{ background: "#3A1B3A", color: "#E9C9D8" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "22px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "12px 24px", justifyContent: "space-between", fontSize: "14px" }}>
          <span>
            {"The Beauty of Caring CIC · Registered social enterprise · Bristol, UK"}
          </span>
          <span style={{ display: "flex", gap: "22px" }}>
            <a href="https://www.linkedin.com/in/thebeautyofcaringcic/" target="_blank" rel="noopener noreferrer">
              {"LinkedIn"}
            </a>
            <a href="https://www.instagram.com/thebeautyofcaring_cic/" target="_blank" rel="noopener noreferrer">
              {"Instagram"}
            </a>
            <a href="https://www.facebook.com/Thebeautyofcaring_uk-107572908561606/" target="_blank" rel="noopener noreferrer">
              {"Facebook"}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
