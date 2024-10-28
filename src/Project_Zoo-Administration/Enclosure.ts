
export enum EnclosureID {
    SavannahHabitat, 
    JungleHabitat, 
    AquaticHabitat, 
    ReptileHouse
}
class Enclosure {
    _id: EnclosureID; 
    _name: string; 
    builtInYear: number;

    constructor(id:EnclosureID, name: string, builtInYear: number){
        this._id = id; 
        this._name = name; 
        this.builtInYear = builtInYear; 
    }
}



export default Enclosure
