


let pokemonRepository = (function() {
  let pokemonList = [];

// returns the pokemonList
  function getAll(){
     return pokemonList;
   }
//adds pokemon to the pokemonList
  function add(pokemon){
    return pokemonList.push(pokemon);
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

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function loadList(){
    return fetch(apiUrl).then(function (response){
      return response.json();
    }).then(function(json){
      json.results.forEach(function (item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (err) {
      console.log(err);
    })
}

function loadDetails(item){
  let url = item.detailsUrl;
  return fetch(url).then(function(response){
  return response.json();
  }).then(function(details){
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
  }).catch(function(err){
    console.error(err);
  });
}


//function for addEventListener as a parameter
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function(){
        console.log(pokemon);
      });
    }

  return {
    add: add,

    getAll: getAll,

    addListitem: addListitem,

    showDetails: showDetails,

    loadList: loadList,

    loadDetails: loadDetails,

  };


})();




  pokemonRepository.loadList().then(function(){


    // lopps over the  IIFE pokemonList
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListitem(pokemon);

    });
})
