import { SearchBabyNameProps } from '../utils/Types'

function SearchBabyName({
  search,
  setSearch,
  setFilter
}: SearchBabyNameProps): JSX.Element {
  return (
    <div className="search">
        <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} />
        <div />
        <button className="all" onClick={() => setFilter("")}>All</button>
        <button className="boy" onClick={() => setFilter("m")}>Boys</button>
        <button className="girl" onClick={() => setFilter("f")}>Girls</button>
        
    </div>
  );
}
export default SearchBabyName;
