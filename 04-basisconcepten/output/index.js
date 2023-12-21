"use strict"; /*Overbodig. Wordt automatisch toegevoegd.*/
const leeftijdStudent = 40;
const achternaam = "Stevens";
const isStudent = true;
const dagenVanDeWeek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
const vandaag = dagenVanDeWeek[3];
const persoonInfo = [40, "Bart Stevens"]; /*leeftijd en naam zijn hier labels. Kunnen verder niet worden opgeroepen of gebruikt. Hebben dezelfde waarde als een comment. */
var windrichting;
(function (windrichting) {
    windrichting[windrichting["Noord"] = 0] = "Noord";
    windrichting[windrichting["Oost"] = 1] = "Oost";
    windrichting[windrichting["Zuid"] = 2] = "Zuid";
    windrichting[windrichting["West"] = 3] = "West";
})(windrichting || (windrichting = {}));
;
const huidigeRichting = windrichting.Noord;
var seasons;
(function (seasons) {
    seasons[seasons["Spring"] = 0] = "Spring";
    seasons[seasons["Summer"] = 1] = "Summer";
    seasons[seasons["Autumn"] = 2] = "Autumn";
    seasons[seasons["Winter"] = 3] = "Winter";
})(seasons || (seasons = {}));
;
const currentSeason = seasons.Winter; /*Geeft geen fout, maar is best practice om type (: seasons) te definiëren.*/
var planets;
(function (planets) {
    planets["Mercury"] = "Small and close to the Sun";
    planets["Venus"] = "Similar in size to Earth, but very hot";
    planets["Earth"] = "Our home planet";
    planets["Mars"] = "The red planet";
    planets["Jupiter"] = "The largest planet";
    planets["Saturn"] = "Known for its rings";
    planets["Uranus"] = "An ice giant";
    planets["Neptune"] = "A distant blue world";
})(planets || (planets = {}));
const favoritePlanet = planets.Earth;
const mijnData = false;
const externeInput = 35;
console.log(`===========================START_LOGS===========================`);
console.log(`De leeftijd van student ${achternaam} is ${leeftijdStudent}.`);
console.log(`Vandaag is het ${vandaag}.`);
console.log(`Persoon Info: Naam is ${persoonInfo[1]} en de leeftijd is ${persoonInfo[0]}.`);
console.log(`De wind komt uit ${windrichting[huidigeRichting]}. (windrichting[huidigeRichting])`);
console.log(`De wind komt uit ${huidigeRichting}. (huidigeRichting)`); /*Dit geeft de index omdat er geen inhoud werd gespecifieerd*/
console.log(`Huidig seizoen: ${seasons[currentSeason]}`);
//console.log(`Favoriete planeet: ${planets[favoritePlanet]}`); /*Werkt niet omdat er inhoud werd gedefinieerd.*/
console.log(`Favoriete planeet: ${favoritePlanet}`);
console.log(`Mijn data: ${mijnData}`);
console.log(`Externe Input ${externeInput}`);
console.log(`===========================EINDE_LOGS===========================`);
