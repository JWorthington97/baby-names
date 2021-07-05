interface SearchBabyNameProps {
  search: string;
  setSearch(search: string): void;
}

function SearchBabyName({
  search,
  setSearch,
}: SearchBabyNameProps): JSX.Element {
  return (
    <div className="search">
        <input value={search} onChange={(event) => setSearch(event.target.value)} />
    </div>
  );
}
export default SearchBabyName;
