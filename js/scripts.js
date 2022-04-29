let pokemonRepository = (function () {
let pokemonList = [
  {name: 'crazyPokemon', height: 9, type: ['crazyness','loco'] },
  {name: 'bigPokemon', height: 30, type: ['bigness','tall'] },
  {name: 'coolPokemon', height: 12, type: ['coolness','chill'] }
];


  function add(pokemon) {
    pokemonList.push(pokemon);
  }


    function getAll() {
      return pokemonList;
    }

    return {
    add: add,
    getAll: getAll
  };
})();
console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'new Pokemon' });
//for (let i = 0; i < pokemonList.length; i++) {
  //  if (pokemonList[i]).height > 15) {
  //    document.write(pokemonList[i].name+'height:'+pokemonList[i].height+'Wow thats a big height!')
  //  else {
//      document.write(pokemonList[i].name+'height:'+pokemonList[i].height)
//    }
//    }
//}

pokemonRepository.getALL.forEach(function(name) {
   console.log(name);
});
