"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const REGIONS = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function CountrySearch() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3")
      .then((res) => res.json())
      .then((data) => {
        setCountries(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = countries.filter((c) => {
    const name = c.name?.common?.toLowerCase() || "";
    const matchesName = name.includes(query.toLowerCase().trim());
    const matchesRegion = region === "All" || c.region === region;
    return matchesName && matchesRegion;
  });

  if (loading) return <div className="loading"><div className="spinner" /><p>Loading countries…</p></div>;

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input type="text" className="search-input" placeholder="Search… e.g. Japan, Germany" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="filter-bar">
        {REGIONS.map((r) => (
          <button key={r} className={`filter-btn ${region === r ? "active" : ""}`} onClick={() => setRegion(r)}>{r}</button>
        ))}
      </div>
      <p className="search-results-count">Showing <span>{filtered.length}</span> countries{query && ` for "${query}"`}{region !== "All" && ` in ${region}`}</p>
      {filtered.length === 0 ? (
        <div className="no-results"><p>No countries found</p></div>
      ) : (
        <div className="country-grid">
          {filtered.map((country) => (
            <div key={country.cca3} className="country-card">
              <img src={country.flags?.png} alt={country.name?.common} className="country-flag" />
              <div className="country-card-body">
                <h2 className="country-card-name">{country.name?.common}</h2>
                <div className="country-card-meta">
                  <p><span className="label">Capital</span>{country.capital?.[0] || "N/A"}</p>
                  <p><span className="label">Region</span>{country.region}</p>
                  <p><span className="label">Population</span>{country.population?.toLocaleString()}</p>
                </div>
                <Link href={`/countries/${country.cca3}`} className="country-card-link">View Details →</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}