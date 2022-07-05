


let pokemonRepository = (function() {
  let pokemonList = [
    {name: 'crazyPokemon', height: 9, type: ['crazyness','loco'] },
    {name: 'bigPokemon', height: 30, type: ['bigness','tall'] },
    {name: 'coolPokemon', height: 12, type: ['coolness','chill'] }
  ];

// returns the pokemonList
  function getAll(){
     return pokemonList;
   }
//adds pokemon to the pokemonList
  function add(pokemon){
    return pokemonList.push(pokemon);
  }

//function for addEventListener as a parameter
    function showDetails(pokemon) {
      console.log(pokemon);
    }
//function for foreach loop
  function addListitem(pokemon) {
  let pokemonList = document.querySelector('.pokemon-list');
  let pokemonList2 = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button-design');
  button.addEventListener('click', function(){
    showDetails(pokemon);
  });
  pokemonList.appendChild(pokemonList2);
  pokemonList2.appendChild(button);
  }


  return {
    add: add,

    getAll: getAll,

    addListitem: addListitem,

    showDetails: showDetails,

  };


})();

pokemonRepository.add({name: 'Pikachu'});
console.log(pokemonRepository.getAll());

let pokemonListprinted = document.createElement('p');
pokemonListprinted.innerText = pokemonRepository.getAll();



    // lopps over the  IIFE pokemonList
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListitem(pokemon);

    });
