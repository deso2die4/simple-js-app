let pokemonList = [
  {name: 'crazyPokemon', height: 9, type: ['crazyness','loco'] },
  {name: 'bigPokemon', height: 30, type: ['bigness','tall'] },
  {name: 'coolPokemon', height: 12, type: ['coolness','chill'] }
];

for ( i = 0; i < pokemonList.length; i++) {  //A Loop that goes over each Arraya in the pokemonList 
  if (pokemonList[i].height > 15) {
    document.write(pokemonList[i].name + " height: " + pokemonList[i].height + " Wow thats big!!!" + "<br>");
  } else {
    document.write(pokemonList[i].name + " height: " + pokemonList[i].height + "<br>");
  }
}
