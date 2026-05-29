import FavoritesClient from "../../components/FavoritesClient";

export const metadata = { title: "Favorites — World Explorer" };

export default async function FavoritesPage() {
  let countries = [];
  try {
    const res = await fetch("https://restcountries.com/v3.1/all", { cache: "force-cache" });
    const data = await res.json();
    countries = Array.isArray(data) ? data : [];
  } catch (err) {
    console.error(err);
  }
  return (
    <div>
      <div className="page-header">
        <h1>My Favorites</h1>
        <p>Countries you've saved</p>
      </div>
      <FavoritesClient allCountries={countries} />
    </div>
  );
}