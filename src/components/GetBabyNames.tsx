import { BabyNamesProps } from '../utils/Types'

function GetBabyNames({
  allBabyNames,
  chosenNames,
  setChosenNames,
}: BabyNamesProps): JSX.Element {
  return (
    <>
      <div className="names">
        Chosen Names:{" "}
        {chosenNames.map((baby) => (
          baby.sex === "m" ?
          <button
            className="boy"
            key={baby.name}
            onClick={() =>
              setChosenNames([...chosenNames].filter((x) => x !== baby))
            }
          >
            {baby.name}
          </button> :
          <button
          className="girl"
          key={baby.name}
          onClick={() =>
            setChosenNames([...chosenNames].filter((x) => x !== baby))
          }
        >
          {baby.name}
        </button>
        ))}
      </div>

      <div className="names">
      {allBabyNames.map((baby) =>
        baby.sex === "m" ? (
          <button
            className="boy"
            key={baby.name}
            onClick={() => setChosenNames([...chosenNames, baby].sort((a, b) => (a.name > b.name) ? 1 : -1))}
          >
            {baby.name}
          </button>
        ) : (
          <button
            className="girl"
            key={baby.name}
            onClick={() => setChosenNames([...chosenNames, baby].sort((a, b) => (a.name > b.name) ? 1 : -1))}
          >
            {baby.name}
          </button>
          
        )
      )}
      </div>
    </>
  );
}

export default GetBabyNames;
