import { BabyNamesProps } from '../utils/Types'

function GetBabyNames({
  allBabyNames,
  chosenNames,
  setChosenNames,
}: BabyNamesProps): JSX.Element {
  return (
    <>
      <div>
        Chosen Names:{" "}
        {chosenNames.map((baby) => (
          <button
            onClick={() =>
              setChosenNames([...chosenNames].filter((x) => x !== baby))
            }
          >
            {baby}
          </button>
        ))}
      </div>

      <div className="names">
      {allBabyNames.map((obj) =>
        obj.sex === "m" ? (
          <button
            className="boy"
            key={obj.name}
            onClick={() => setChosenNames([...chosenNames, obj.name])}
          >
            {obj.name}
          </button>
        ) : (
          <button
            className="girl"
            key={obj.name}
            onClick={() => setChosenNames([...chosenNames, obj.name])}
          >
            {obj.name}
          </button>
          
        )
      )}
      </div>
    </>
  );
}

export default GetBabyNames;
