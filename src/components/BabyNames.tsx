import { useState } from "react";
import babyNames from "../baby-names.json";
import { BabyName } from "../utils/Types";
import GetBabyNames from ".//GetBabyNames";
import SearchBabyName from "./SearchBabyName";


function BabyNames(): JSX.Element {
  const [chosenNames, setChosenNames] = useState<BabyName[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("")
  
  // Maybe have another variable of just the names? But that doesn't really make sense

  const mainBodyBabyNames = babyNames
    .filter((baby) => baby.sex === filter || filter === "")
    .filter((baby) => baby.name.toLowerCase().includes(search.toLowerCase()))
    .filter((baby) => !chosenNames.includes(baby))
    .sort((a, b) => (a.name > b.name) ? 1 : -1);
  // make case INsensitive

  return (
    <>
      <SearchBabyName search={search} setSearch={setSearch} setFilter={setFilter} />
      <hr />
      <GetBabyNames
        allBabyNames={mainBodyBabyNames}
        chosenNames={chosenNames}
        setChosenNames={setChosenNames}
      />
      {/*Need a new GetFavouriteBabyNames component too that has buttons  */}
    </>
  );

  //Need an onclick to remove from the bulk names, and add to the favourites, and an onClick going the other way to restore them to the main population
  // Line 7 maybe have an object there instead
}

export default BabyNames;
