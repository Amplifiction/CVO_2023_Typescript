"use strict"; /*Overbodig. Wordt automatisch toegevoegd in de JS. En TS is strict genoeg ;) */

const leeftijdStudent: number = 40;
const achternaam: string = "Stevens";
const isStudent: boolean = true;
const dagenVanDeWeek: string[] = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
const vandaag: string = dagenVanDeWeek[3];
const persoonInfo: [leeftijd: number, naam: string] = [40, "Bart Stevens"]; /*leeftijd en naam zijn hier labels. Kunnen verder niet worden opgeroepen of gebruikt. Hebben dezelfde waarde als een comment. */
enum windrichting { "Noord", "Oost", "Zuid", "West" };
const huidigeRichting: windrichting = windrichting.Noord;
enum seasons { "Spring", "Summer", "Autumn", "Winter" };
const currentSeason = seasons.Winter; /*Geeft geen fout, maar is best practice om type (: seasons) te definiëren.*/
enum planets {
    Mercury = "Small and close to the Sun",
    Venus = "Similar in size to Earth, but very hot",
    Earth = "Our home planet",
    Mars = "The red planet",
    Jupiter = "The largest planet",
    Saturn = "Known for its rings",
    Uranus = "An ice giant",
    Neptune = "A distant blue world"
}
const favoritePlanet: planets = planets.Earth;
const mijnData: any = false;
const externeInput: unknown = 35;

console.log(`===========================START_LOGS===========================`);
console.log(`De leeftijd van student ${achternaam} is ${leeftijdStudent}.`);
console.log(`Vandaag is het ${vandaag}.`);
console.log(`Persoon Info: Naam is ${persoonInfo[1]} en de leeftijd is ${persoonInfo[0]}.`);
console.log(`De wind komt uit ${windrichting[huidigeRichting]}. (windrichting[huidigeRichting])`);
console.log(`De wind komt uit ${huidigeRichting}. (huidigeRichting)`); /*Dit geeft de index omdat er geen inhoud werd gespecifieerd*/
console.log(`Huidig seizoen: ${seasons[currentSeason]}`);
//console.log(`Favoriete planeet: ${planets[favoritePlanet]}`); /*Werkt niet omdat index werd overschreven (door beschrijving).*/
console.log(`Favoriete planeet: ${favoritePlanet}`);
console.log(`Mijn data: ${mijnData}`);
console.log(`Externe Input ${externeInput}`);
console.log(`===========================EINDE_LOGS===========================`);