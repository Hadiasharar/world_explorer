import CountriesClient from "../../components/CountriesClient";

export default function CountriesPage() {
  return (
    <div>
      <div className="page-header">
        <h1>Explore Countries</h1>
        <p>Browse countries from around the world</p>
      </div>
      <CountriesClient />
    </div>
  );
}