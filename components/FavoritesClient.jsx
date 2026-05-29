"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const REGIONS = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function CountriesClient() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("name");
  const [region, setRegion] = useState("All");
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavs(saved);
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3")
      .then((res) => res.json())
      .then((data) => { setCountries(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const toggleFav = (code) => {
    const updated = favs.includes(code) ? favs.filter(f => f !== code) : [...favs, code];
    setFavs(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const filtered = countries
    .filter((c) => region === "All" || c.region === region)
    .sort((a, b) => sort === "population" ? b.population - a.population : a.name.common.localeCompare(b.name.common))
    .slice(0, 20);

  if (loading) return <div className="loading"><div className="spinner" /><p>Loading countries…</p></div>;

  return (
    <div className="countries-container">
      <div className="filter-bar">
        {REGIONS.map((r) => (
          <button key={r} className={`filter-btn ${region === r ? "active" : ""}`} onClick={() => setRegion(r)}>{r}</button>
        ))}
        <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="name">Sort: A → Z</option>
          <option value="population">Sort: Population ↓</option>
        </select>
      </div>

      <div className="country-grid">
        {filtered.map((country) => {
          const isFav = favs.includes(country.cca3);
          return (
            <div key={country.cca3} className="country-card">
              <img src={country.flags?.png} alt={country.name?.common} className="country-flag" />
              <div className="country-card-body">
                <h2 className="country-card-name">{country.name?.common}</h2>
                <div className="country-card-meta">
                  <p><span className="label">Capital</span>{country.capital?.[0] || "N/A"}</p>
                  <p><span className="label">Region</span>{country.region}</p>
                  <p><span className="label">Population</span>{country.population?.toLocaleString()}</p>
                </div>
                <div className="card-actions">
                  <Link href={`/countries/${country.cca3}`} className="country-card-link">View Details →</Link>
                  <button className={`fav-btn ${isFav ? "active" : ""}`} onClick={() => toggleFav(country.cca3)} title={isFav ? "Remove favorite" : "Add to favorites"}>
                    {isFav ? "❤️" : "🤍"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}