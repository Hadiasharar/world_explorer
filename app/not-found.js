import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "6rem",
          fontWeight: 900,
          color: "var(--accent)",
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        Country not found
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        That country code doesn't exist or the page you're looking for isn't here.
      </p>
      <Link href="/countries" className="btn-primary">
        Browse All Countries
      </Link>
    </div>
  );
}
