import Link from "next/link";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const country = data[0];

  return {
    title: `${country.name.common} — World Explorer`,
    description: `Learn about ${country.name.common}: capital, population, languages, currencies, and more.`,
  };
}

// This page fetches fresh data every time.
export default async function CountryDetailsPage({ params }) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  const country = data[0];

  const languages = country.languages
    ? Object.values(country.languages)
    : [];

  const currencies = country.currencies
    ? Object.values(country.currencies).map((c) => `${c.name} (${c.symbol || "—"})`)
    : [];

  const timezones = country.timezones || [];

  return (
    <div className="country-detail-container">
      <Link href="/countries" className="back-btn">
        ← Back to Countries
      </Link>

      <div className="country-detail-hero">
        <img
          src={country.flags.svg || country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="country-detail-flag"
        />

        <div className="country-detail-header">
          <h1>{country.name.common}</h1>
          <p className="country-detail-official">{country.name.official}</p>

          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Capital</span>
              <span className="detail-value">
                {country.capital?.[0] || "N/A"}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Region</span>
              <span className="detail-value">{country.region}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Subregion</span>
              <span className="detail-value">
                {country.subregion || "N/A"}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Population</span>
              <span className="detail-value">
                {country.population.toLocaleString()}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Area</span>
              <span className="detail-value">
                {country.area ? `${country.area.toLocaleString()} km²` : "N/A"}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">UN Member</span>
              <span className="detail-value">
                {country.unMember ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {languages.length > 0 && (
        <div className="detail-section">
          <h2>Languages</h2>
          <div className="tag-list">
            {languages.map((lang) => (
              <span key={lang} className="tag">
                {lang}
              </span>
            ))}
          </div>
        </div>
      )}

      {currencies.length > 0 && (
        <div className="detail-section">
          <h2>Currencies</h2>
          <div className="tag-list">
            {currencies.map((cur) => (
              <span key={cur} className="tag">
                {cur}
              </span>
            ))}
          </div>
        </div>
      )}

      {timezones.length > 0 && (
        <div className="detail-section">
          <h2>Time Zones</h2>
          <div className="tag-list">
            {timezones.map((tz) => (
              <span key={tz} className="tag">
                {tz}
              </span>
            ))}
          </div>
        </div>
      )}

      {country.maps?.googleMaps && (
        <div className="detail-section">
          <h2>Location</h2>
          <a
            href={country.maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="maps-link"
          >
            📍 View {country.name.common} on Google Maps
          </a>
        </div>
      )}
    </div>
  );
}
