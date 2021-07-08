export interface BabyName {
    id: number;
    name: string;
    sex: string;
  }

export interface BabyNamesProps {
    allBabyNames: BabyName[];
    chosenNames: string[];
    setChosenNames(names: string[]): void;
  }  

export interface SearchBabyNameProps {
    search: string;
    setSearch(search: string): void;
  }