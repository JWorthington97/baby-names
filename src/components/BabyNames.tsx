import { useState } from "react";
import babyNames from "../baby-names.json";
import GetBabyNames from ".//GetBabyNames";
import SearchBabyName from "./SearchBabyName";

function BabyNames(): JSX.Element {
  const [chosenNames, setChosenNames] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const mainBodyBabyNames = babyNames
    .filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()))
    .filter((obj) => !chosenNames.includes(obj.name));
  // make case INsensitive

  return (
    <>
      <SearchBabyName search={search} setSearch={setSearch} />
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
