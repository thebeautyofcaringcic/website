export default function WhereWeGo() {
  return (
    <section id="where" style={{ background: "#2A7B93", color: "#FFFFFF", position: "relative" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "136px 32px 150px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", gap: "80px 72px", alignItems: "center" }}>
        <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "13px", fontWeight: "600", color: "#FBD5E1" }}>
            {"Where we go"}
          </div>
          <h2 style={{ margin: "0", fontFamily: "var(--font-josefin), sans-serif", fontWeight: "300", fontSize: "clamp(36px, 4.8vw, 72px)", lineHeight: "1.02", letterSpacing: "-0.01em" }}>
            {"From the hospital ward to "}
            <span style={{ fontWeight: "600", color: "#FBD5E1" }}>
              {"the pavement outside."}
            </span>
          </h2>
          <p style={{ margin: "0", maxWidth: "500px", fontSize: "19px" }}>
            {"We go to people, wherever they are being cared for — or wherever they have been left out."}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", fontFamily: "var(--font-josefin), sans-serif", letterSpacing: "0.14em", textTransform: "uppercase", fontSize: "13px", fontWeight: "600", color: "#3A1B3A", maxWidth: "560px" }}>
            <span style={{ padding: "16px 22px 12px", borderRadius: "999px", background: "#FBD5E1" }}>
              {"Hospitals & clinics"}
            </span>
            <span style={{ padding: "16px 22px 12px", borderRadius: "999px", background: "#FFF1F5" }}>
              {"Care homes"}
            </span>
            <span style={{ padding: "16px 22px 12px", borderRadius: "999px", background: "#FBD5E1" }}>
              {"Disabled homes"}
            </span>
            <span style={{ padding: "16px 22px 12px", borderRadius: "999px", background: "#FFF1F5" }}>
              {"Homeless centres"}
            </span>
            <span style={{ padding: "16px 22px 12px", borderRadius: "999px", background: "#FBD5E1" }}>
              {"Prisons"}
            </span>
            <span style={{ padding: "16px 22px 12px", borderRadius: "999px", background: "#FFF1F5" }}>
              {"Charities"}
            </span>
            <span style={{ padding: "16px 22px 12px", borderRadius: "999px", background: "#FBD5E1" }}>
              {"Skills agencies"}
            </span>
          </div>
        </div>
        <div style={{ flex: "1 1 440px", minWidth: "0", maxWidth: "580px", position: "relative", aspectRatio: "1 / 1", margin: "0 auto" }}>
          <div style={{ position: "absolute", width: "60%", aspectRatio: "1 / 1", right: "-22%", top: "-20%", borderRadius: "50%", background: "#1D5C70" }}>
          </div>
          <img src="/images/street2.jpg" alt="Natacha caring for a man sitting outside on the street" style={{ position: "absolute", left: "0", top: "0", width: "82%", height: "82%", borderRadius: "50%", objectFit: "cover", objectPosition: "50% 55%", border: "12px solid #FBD5E1", boxSizing: "border-box" }} loading="lazy" />
          <img src="/images/picnic.jpg" alt="A group session outdoors in a park" style={{ position: "absolute", right: "-4%", bottom: "0", width: "46%", height: "46%", borderRadius: "50%", objectFit: "cover", border: "10px solid #EC4B8A", boxSizing: "border-box" }} loading="lazy" />
          <img src="/images/room.jpg" alt="A one-to-one manicure in a community room" style={{ position: "absolute", left: "2%", bottom: "-6%", width: "28%", height: "28%", borderRadius: "50%", objectFit: "cover", objectPosition: "50% 62%", border: "8px solid #3A1B3A", boxSizing: "border-box" }} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
