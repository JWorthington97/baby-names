interface SearchBabyNameProps {
    search: string,
    setSearch(search: string): void
}

function SearchBabyName({search, setSearch}: SearchBabyNameProps): JSX.Element {
    return <input value={search} onChange={(event) => setSearch(event?.target.value)}/>
}
export default SearchBabyName