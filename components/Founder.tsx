import RadioPlayer from "./RadioPlayer";
import VideoModal from "./VideoModal";

export default function Founder() {
  return (
    <section id="natacha" style={{ background: "#3A1B3A", color: "#FBD5E1", position: "relative" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "136px 32px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "80px 96px", alignItems: "center" }}>
        <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "540px", position: "relative", aspectRatio: "1 / 1", margin: "0 auto" }}>
          <div style={{ position: "absolute", width: "50%", aspectRatio: "1 / 1", left: "-18%", top: "-14%", borderRadius: "50%", background: "#EC4B8A" }}>
          </div>
          <svg className="tboc-ring" viewBox="0 0 600 600" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}>
            <defs>
              <path id="ringNat" d="M300 300m-282 0a282 282 0 1 1 564 0a282 282 0 1 1 -564 0" />
            </defs>
            <text style={{ fontFamily: "var(--font-josefin), sans-serif" }} fontSize="23" fontWeight="400" fill="#FBD5E1">
              <textPath href="#ringNat" textLength="1750" lengthAdjust="spacing">
                {"NATACHA · FOUNDER · SOCIO-AESTHETICIAN · NATACHA · FOUNDER · SOCIO-AESTHETICIAN ·"}
              </textPath>
            </text>
          </svg>
          <img src="/images/natacha.jpg" alt="Natacha, founder of The Beauty of Caring, smiling outdoors in Bristol" style={{ position: "absolute", left: "9%", top: "9%", width: "82%", height: "82%", borderRadius: "50%", objectFit: "cover", objectPosition: "58% 30%" }} loading="lazy" />
          <a href="https://www.bbc.co.uk/news/uk-england-bristol-67308673" target="_blank" rel="noopener noreferrer" aria-label="Read the BBC News article: Bristol beautician offers workshops for vulnerable women (opens in a new tab)" style={{ position: "absolute", right: "-10%", bottom: "-8%", width: "40%", background: "#FFFFFF", padding: "8px 8px 0", borderRadius: "10px", transform: "rotate(6deg)", textDecoration: "none", color: "#3A1B3A", display: "block", boxShadow: "0 18px 40px rgba(0,0,0,0.35)" }}>
            <img src="/images/bbc.jpg" alt="BBC News article: Bristol beautician offers workshops for vulnerable women" style={{ width: "100%", aspectRatio: "5 / 4", objectFit: "cover", objectPosition: "0 0", display: "block", borderRadius: "4px" }} loading="lazy" />
            <span style={{ display: "block", fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "11px", fontWeight: "600", padding: "10px 2px 6px" }}>
              {"As seen on BBC News"}
            </span>
          </a>
        </div>
        <div style={{ flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "26px" }}>
          <div style={{ fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "13px", fontWeight: "600", color: "#F7A9C6" }}>
            {"The hands behind it"}
          </div>
          <h2 style={{ margin: "0", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: "1.04", letterSpacing: "-0.01em" }}>
            {"Brussels, Paris, Singapore — "}
            <span style={{ fontWeight: "600", color: "#FFFFFF" }}>
              {"then Bristol."}
            </span>
          </h2>
          <p style={{ margin: "0", maxWidth: "520px", fontSize: "18px", color: "#E9C9D8" }}>
            {"Natacha qualified as a socio-aesthetician in Paris in 2012. She worked in oncology and Alzheimer's care, volunteered with the Singapore Cancer Society, and launched The Beauty of Caring CIC in 2021."}
          </p>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "560px", fontSize: "15px" }}>
            <div style={{ display: "flex", gap: "20px", padding: "14px 0", borderTop: "1px solid #6B4569" }}>
              <span style={{ flex: "0 0 52px", color: "#F7A9C6" }}>
                {"2013"}
              </span>
              <span>
                {"University Diploma, Beautician in Medical and Social environments — Université Paris VI"}
              </span>
            </div>
            <div style={{ display: "flex", gap: "20px", padding: "14px 0", borderTop: "1px solid #6B4569" }}>
              <span style={{ flex: "0 0 52px", color: "#F7A9C6" }}>
                {"2016"}
              </span>
              <span>
                {"Level 2 Certificate in Counselling Skills — Bristol"}
              </span>
            </div>
          </div>
          <RadioPlayer />
          <VideoModal />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "13px", fontWeight: "600" }}>
            <a href="https://www.bbc.co.uk/news/uk-england-bristol-67308673" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", border: "1.5px solid #FBD5E1", padding: "18px 26px 14px", borderRadius: "999px" }}>
              {"Read: BBC News"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
