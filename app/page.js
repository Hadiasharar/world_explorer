import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <span className="hero-eyebrow">🌍 195 Countries & Territories</span>
          <h1 className="hero-title">World Explorer</h1>
          <p className="hero-subtitle">
            Explore countries around the world and learn about their flags,
            capitals, populations, currencies, and languages.
          </p>
          <div className="hero-actions">
            <Link href="/countries" className="btn-primary">
              Explore Countries →
            </Link>
            <Link href="/search" className="btn-secondary">
              Search a Country
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <span className="hero-stat-value">195</span>
              <span className="hero-stat-label">Countries</span>
            </div>
            <div>
              <span className="hero-stat-value">5</span>
              <span className="hero-stat-label">Regions</span>
            </div>
            <div>
              <span className="hero-stat-value">8B+</span>
              <span className="hero-stat-label">People</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
