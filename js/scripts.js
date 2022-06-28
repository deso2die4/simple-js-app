
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

/*
  pokemonList.forEach(function(pokemon) {
    if (pokemon.height > 15) {
       document.write(pokemon.name + ' height: ' + pokemon.height + ' Wow thats big!!!' + '<br>');
    } else {
       document.write(pokemon.name + ' height: ' + pokemon.height + '<br>');
    }

  });
*/
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
  button.addEventListener('click', showDetails);
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

//document.write(pokemonRepository.getAll());
pokemonRepository.add({name: 'Pikachu'});
console.log(pokemonRepository.getAll());

let pokemonListprinted = document.createElement('p');
pokemonListprinted.innerText = 'hallo';

/*
  pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height > 15) {
       document.write(pokemon.name + ' height: ' + pokemon.height + ' Wow thats big!!!' + '<br>');
    } else {
       document.write(pokemon.name + ' height: ' + pokemon.height + '<br>');
    }

  });
*/

    // lopps over the  IIFE pokemonList
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListitem(pokemon);

    });
