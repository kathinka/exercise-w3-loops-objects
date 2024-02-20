const pokemons = [
	"Bulbasaur",
	"Ivysaur",
	"Venusaur",
	"Charmander",
	"Charmeleon",
	"Charizard",
	"Squirtle",
	"Wartortle",
	"Blastoise",
	"Metapod",
	"Weedle",
	"Pikachu",
	"Pidgey"
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works
const bringOnThePokemons = () => {
	for (i = 0; i < pokemons.length; i++) {
		console.log(pokemons[i]);
	}
}
bringOnThePokemons();
// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.
Pikachu = { name: 'Pikachu', strength: 100, temper: 'mild', element: 'electrical' }
pokemons.splice(11, 1, (Pikachu))

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.
console.log(`${pokemons[11].name} is a ${pokemons[11].element} pokemon with ${pokemons[11].strength} strength`)
// 4)
// Add the property stillToCatch: true to the Pikachu object.
pokemons[11].stillToCatch = true;
// 5)
// change the value of the key strength in the Pikachu object.
pokemons[11].strength = 32;
// 6)
// Delete a property from the Pikachu object.

// 7)
delete pokemons[11].temper
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
	{
		name: "Bulbasaur",
		element: "water",
		strength: 13
	},
	{
		name: "Charmander",
		element: "fire",
		strength: 32
	}
];

Bulbasaur = (moreAboutPokemons[0])
Charmander = (moreAboutPokemons[1])
pokemons.splice(0, 1, (Bulbasaur))
pokemons.splice(3, 1, (Charmander))
// 8)
// Print out all the NAMES of the pokemons in this new array.

const printAllNames = () => {
	for (i = 0; i < pokemons.length; i++) {
		if (pokemons[i].hasOwnProperty('name')) {
			console.log(pokemons[i].name);
		}
	}
}
printAllNames();

// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.
const printAllPokemonsObjects = () => {
	for (i = 0; i < pokemons.length; i++) {
		if (typeof pokemons[i] === 'object') {
			console.log(`${pokemons[i].name} is a ${pokemons[i].element} pokemon with the strength of ${pokemons[i].strength}`);
		}
	}

};

printAllPokemonsObjects();