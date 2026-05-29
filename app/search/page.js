import CountrySearch from "../../components/CountrySearch";

export const metadata = { title: "Search Countries — World Explorer" };

export default function SearchPage() {
  return (
    <div>
      <div className="page-header">
        <h1>Search Countries</h1>
        <p>Find any country by name</p>
      </div>
      <CountrySearch />
    </div>
  );
}