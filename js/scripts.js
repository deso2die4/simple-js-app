
//for ( i = 0; i < pokemonList.length; i++) {  //A Loop that goes over each Arraya in the pokemonList
//  if (pokemonList[i].height > 15) {
//    document.write(pokemonList[i].name + " height: " + pokemonList[i].height + " Wow thats big!!!" + "<br>");
//  } else {
//    document.write(pokemonList[i].name + " height: " + pokemonList[i].height + "<br>");
//  }
//}

//pokemonList.forEach(function(pokemon) {
//  if (pokemon.height > 15) {
//     document.write(pokemon.name + ' height: ' + pokemon.height + ' Wow thats big!!!' + '<br>');
//  } else {
//     document.write(pokemon.name + ' height: ' + pokemon.height + '<br>');
  //}

//});



let pokemonRepository = (function() {
  let pokemonList = [
    {name: 'crazyPokemon', height: 9, type: ['crazyness','loco'] },
    {name: 'bigPokemon', height: 30, type: ['bigness','tall'] },
    {name: 'coolPokemon', height: 12, type: ['coolness','chill'] }
  ];


  pokemonList.forEach(function(pokemon) {
    if (pokemon.height > 15) {
       document.write(pokemon.name + ' height: ' + pokemon.height + ' Wow thats big!!!' + '<br>');
    } else {
       document.write(pokemon.name + ' height: ' + pokemon.height + '<br>');
    }

  });

  function getAll(){
     return pokemonList;
   }

  function add(pokemon){
    return pokemonList.push(pokemon);
  }



  return {
    add: add,

    getAll: getAll,

  };


})();

document.write(pokemonRepository.getAll());
pokemonRepository.add({name: 'Pikachu'});
console.log(pokemonRepository.getAll());



  pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height > 15) {
       document.write(pokemon.name + ' height: ' + pokemon.height + ' Wow thats big!!!' + '<br>');
    } else {
       document.write(pokemon.name + ' height: ' + pokemon.height + '<br>');
    }

  });
