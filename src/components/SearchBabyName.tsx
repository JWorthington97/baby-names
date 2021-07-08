import { SearchBabyNameProps } from '../utils/Types'

function SearchBabyName({
  search,
  setSearch,
}: SearchBabyNameProps): JSX.Element {
  return (
    <div className="search">
        <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} />
    </div>
  );
}
export default SearchBabyName;
