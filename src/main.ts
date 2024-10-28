import Animal from "./Project_Zoo-Administration/Animal";
import Enclosure, {EnclosureID} from "./Project_Zoo-Administration/Enclosure";
import { SpecialNeeds } from "./Project_Zoo-Administration/Animal";

const allEnclosures: Enclosure[] = [
  new Enclosure(EnclosureID.SavannahHabitat, "Savannah-Habitat", 1989),
  new Enclosure(EnclosureID.ReptileHouse, "Reptile-House", 1990), 
  new Enclosure(EnclosureID.JungleHabitat, "Jungle-Habitat", 2015),
  new Enclosure(EnclosureID.AquaticHabitat, "Aquatic-Habitat", 1030),
]
const allAnimals: Animal[] = [
  new Animal("🐅", "Mike", 2016, ["Asia"], SpecialNeeds.Meat, EnclosureID.SavannahHabitat),
  new Animal("🐘", "Dumbo", 2012, ["Afrika"], SpecialNeeds.Grass, EnclosureID.SavannahHabitat),
  new Animal("🐊", "Wizard", 2018, ["Australien"], SpecialNeeds.Isolation, EnclosureID.ReptileHouse),
  new Animal("🐍", "Sneeky", 2020, ["Südamerika"], SpecialNeeds.MedicalTreatment, EnclosureID.ReptileHouse),
  new Animal("🦜", "Flippo", 2019, ["Südamerika"], SpecialNeeds.MedicalTreatment, EnclosureID.ReptileHouse),
  new Animal("🐒", "Bando", 2017, ["Afrika"], SpecialNeeds.Meat, EnclosureID.JungleHabitat),
  new Animal("🐆", "Spotty", 2014, ["Afrika"], SpecialNeeds.Grass, EnclosureID.JungleHabitat),
  new Animal("🐻", "Balon", 2013, ["Asien"], SpecialNeeds.Isolation, EnclosureID.JungleHabitat),
  new Animal("🐠", "Fischy", 2021, ["Ozeanien"], SpecialNeeds.Insects, EnclosureID.AquaticHabitat),
  new Animal("🐬", "Flipper", 2022, ["Ozeanien"], SpecialNeeds.Meat, EnclosureID.AquaticHabitat),
  new Animal("🦈", "Whity", 2020, ["Ozeanien"], SpecialNeeds.Insects, EnclosureID.AquaticHabitat),
  new Animal("🦎", "Lizzard", 2019, ["Australien"], SpecialNeeds.Insects, EnclosureID.ReptileHouse),
];

console.log(allEnclosures);
console.log(allAnimals);








