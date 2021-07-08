export interface BabyName {
    id: number;
    name: string;
    sex: string;
  }

export interface BabyNamesProps {
    allBabyNames: BabyName[];
    chosenNames: BabyName[];
    setChosenNames(names: BabyName[]): void;
  }  

export interface SearchBabyNameProps {
    search: string;
    setSearch(search: string): void;
    setFilter(sex: string): void
  }