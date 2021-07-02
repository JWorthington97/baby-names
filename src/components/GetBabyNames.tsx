interface BabyName {
    id: number,
    name: string,
    sex: string
}

interface BabyNamesProps {
    allBabyNames: BabyName[],
    chosenNames: string[],
    setChosenNames(names:string[]): void
}


function GetBabyNames({allBabyNames, chosenNames, setChosenNames}: BabyNamesProps): JSX.Element{
    return <>
    <div>Chosen Names: {chosenNames.map((baby => 
        <button onClick={() => setChosenNames([...chosenNames].filter((x => x !== baby)))}>{baby}</button>))}
    </div>

    {allBabyNames.map((obj => 
        obj.sex === "m" ? 
        <button className="boy" key={obj.name} onClick={() => setChosenNames([...chosenNames,obj.name])}>{obj.name}</button> :
        <button className="girl" key={obj.name} onClick={() => setChosenNames([...chosenNames,obj.name])}>{obj.name}</button> 
        ))}
    </>
}

export default GetBabyNames