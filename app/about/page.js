export const metadata = {
  title: "About — World Explorer",
};

export default function AboutPage() {
  const features = [
    "App Router",
    "File-based routing",
    "Shared layout",
    "Dynamic routes",
    "Server components",
    "Client components",
    "Real API data fetching",
    "Static rendering & caching",
    "Dynamic rendering",
    "Search functionality",
    "generateMetadata()",
    "Responsive design",
  ];

  return (
    <div className="about-container">
      <div className="page-header" style={{ padding: "0 0 2rem" }}>
        <h1>About World Explorer</h1>
      </div>

      <div className="about-section">
        <h2>What is this project?</h2>
        <p>
          World Explorer is a Next.js project that uses real API data to display
          countries around the world. Users can browse countries, search by
          name, and explore full details for each country including population,
          languages, currencies, time zones, and a Google Maps link.
        </p>
      </div>

      <div className="about-section">
        <h2>API Used</h2>
        <p>
          This project uses the{" "}
          <strong style={{ color: "var(--accent)" }}>REST Countries API</strong>{" "}
          — a free, open API that provides data about every country in the
          world.
        </p>
        <p>
          <code
            style={{
              background: "var(--bg-card)",
              padding: "0.25rem 0.5rem",
              borderRadius: "6px",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
            }}
          >
            https://restcountries.com/v3.1/all
          </code>
        </p>
      </div>

      <div className="about-section">
        <h2>Next.js Topics Practiced</h2>
        <ul className="feature-list">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="about-section">
        <h2>Rendering Strategy</h2>
        <p>
          The <strong>Countries List page</strong> uses{" "}
          <code
            style={{
              background: "var(--bg-card)",
              padding: "0.15rem 0.4rem",
              borderRadius: "4px",
              fontSize: "0.85rem",
            }}
          >
            cache: "force-cache"
          </code>{" "}
          for static rendering — the data is cached on the server for fast
          repeated loads.
        </p>
        <p>
          The <strong>Country Details page</strong> uses{" "}
          <code
            style={{
              background: "var(--bg-card)",
              padding: "0.15rem 0.4rem",
              borderRadius: "4px",
              fontSize: "0.85rem",
            }}
          >
            cache: "no-store"
          </code>{" "}
          for dynamic rendering — it fetches fresh data on every request.
        </p>
      </div>
    </div>
  );
}
