import Enclosure, { EnclosureID } from "./Enclosure";
console.log(Enclosure);


export enum AnimalType {
    Mammal, 
    Reptile,
    Bird, 
    Fish, 
    Mollusk, 
    Amphibian
}
export enum SpecialNeeds {
    Meat = "Meat",
    Grass = "Grass", 
    Insects = "Insects", 
    Isolation = "Isolation",
    MedicalTreatment = "Medical Treatment"
}

class Animal {
    _emoji: string; 
    _name: string; 
    _yearOfBirth: number; 
    _continents: string[];
    _specialNeeds: SpecialNeeds;
    _enclosure: EnclosureID
    

    constructor(emoji: string, name: string, yearOfBirth: number, continents: string[], specialNeeds: SpecialNeeds, enclosureID: EnclosureID
    ) {
        this._emoji = emoji;
        this._name = name; 
        this._yearOfBirth = yearOfBirth; 
        this._continents = continents;
        this._specialNeeds = specialNeeds; 
        this._enclosure = enclosureID;
    }
}


export default Animal;