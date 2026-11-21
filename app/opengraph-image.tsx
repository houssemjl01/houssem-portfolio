import { ImageResponse } from "next/og";

export const alt =
  "Houssem Eddin Jlassi — Software Engineering Student and Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#08090B",
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(91,140,255,0.22), transparent 42%), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "auto, 72px 72px, 72px 72px",
          color: "#EDEEF0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 58,
                height: 58,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                backgroundColor: "rgba(20,23,27,0.8)",
                color: "#5B8CFF",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              HJ
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 20, fontWeight: 500 }}>
                Houssem Eddin Jlassi
              </span>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: 3,
                  color: "#9BA1AA",
                  textTransform: "uppercase",
                }}
              >
                Full-Stack Developer
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(91,140,255,0.35)",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 14,
              color: "#8FB0FF",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 8,
                height: 8,
                borderRadius: 999,
                backgroundColor: "#5B8CFF",
              }}
            />
            Open to PFE · February 2027
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 0.98,
              letterSpacing: -3,
              fontWeight: 500,
            }}
          >
            <span>Software that</span>
            <span style={{ color: "#8FB0FF", fontStyle: "italic" }}>
              holds up.
            </span>
          </div>
          <span
            style={{
              fontSize: 26,
              lineHeight: 1.35,
              color: "#9BA1AA",
              maxWidth: 760,
            }}
          >
            Secure, end-to-end web systems with Spring Boot, Angular, and
            PostgreSQL.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            fontSize: 16,
            color: "#6E747D",
          }}
        >
          <span>houssem-portfolio.vercel.app</span>
          <span>Java · Spring Boot · Angular · PostgreSQL</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
