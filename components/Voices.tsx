export default function Voices() {
  return (
    <section id="voices" style={{ position: "relative" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "136px 32px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "72px" }}>
        <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "28px", maxWidth: "1040px" }}>
          <div style={{ fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "13px", fontWeight: "600", color: "#1D5C70" }}>
            {"In their words"}
          </div>
          <blockquote style={{ margin: "0", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(30px, 4.5vw, 66px)", lineHeight: "1.14", letterSpacing: "-0.01em" }}>
            {"“I hadn't let anyone touch my hands in years. From the moment she greeted me, I felt "}
            <span style={{ fontWeight: "600", color: "#B02A63" }}>
              {"safe, seen, and respected."}
            </span>
            {"”"}
          </blockquote>
          <figcaption style={{ fontFamily: "var(--font-josefin), sans-serif", fontWeight: "600", letterSpacing: "0.24em", textTransform: "uppercase", fontSize: "14px" }}>
            {"Meriam"}
          </figcaption>
        </figure>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "center" }}>
          <figure style={{ margin: "0", flex: "1 1 340px", background: "#3A1B3A", color: "#FBD5E1", borderRadius: "36px 36px 36px 6px", padding: "40px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "18px", transform: "rotate(-1.500deg)" }}>
            <blockquote style={{ margin: "0", fontSize: "21px", lineHeight: "1.45" }}>
              {"“She talked to me like a person, not a patient or a problem. I left not only with softer hands, but with a lighter heart.”"}
            </blockquote>
            <figcaption style={{ fontFamily: "var(--font-josefin), sans-serif", fontWeight: "600", letterSpacing: "0.24em", textTransform: "uppercase", fontSize: "13px", color: "#F7A9C6" }}>
              {"Sally"}
            </figcaption>
          </figure>
          <img src="/images/group.jpg" alt="A group workshop around a table" style={{ flex: "0 0 220px", width: "220px", height: "220px", borderRadius: "50%", objectFit: "cover", border: "10px solid #EC4B8A", boxSizing: "border-box" }} loading="lazy" />
          <figure style={{ margin: "0", flex: "1 1 340px", background: "#FFF1F5", borderRadius: "36px 36px 6px 36px", padding: "40px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "18px", transform: "rotate(1.200deg)" }}>
            <blockquote style={{ margin: "0", fontSize: "21px", lineHeight: "1.45" }}>
              {"“Something to look forward to, and brilliant motivation to get me up and out of the house.”"}
            </blockquote>
            <figcaption style={{ fontFamily: "var(--font-josefin), sans-serif", fontWeight: "600", letterSpacing: "0.24em", textTransform: "uppercase", fontSize: "13px", color: "#1D5C70" }}>
              {"Beatrix"}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
