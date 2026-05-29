"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CountryCard({ country }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFav(favs.includes(country.cca3));
  }, [country.cca3]);

  const toggleFav = (e) => {
    e.preventDefault();
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updated = favs.includes(country.cca3)
      ? favs.filter((f) => f !== country.cca3)
      : [...favs, country.cca3];
    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFav(!isFav);
  };

  return (
    <div className="country-card">
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="country-flag" />
      <div className="country-card-body">
        <h2 className="country-card-name">{country.name.common}</h2>
        <div className="country-card-meta">
          <p><span className="label">Capital</span>{country.capital?.[0] || "N/A"}</p>
          <p><span className="label">Region</span>{country.region}</p>
          <p><span className="label">Population</span>{country.population.toLocaleString()}</p>
        </div>
        <div className="card-actions">
          <Link href={`/countries/${country.cca3}`} className="country-card-link">
            View Details →
          </Link>
          <button className={`fav-btn ${isFav ? "active" : ""}`} onClick={toggleFav}>
            {isFav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}