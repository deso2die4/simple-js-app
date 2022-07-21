


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
  pokemonList2.classList.add('group-list-item');
  let button = $('<button data-target="#modal" data-toggle="modal"></button>');
  button.innerText = pokemon.name;
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.addEventListener('click', function(){
    showDetails(pokemon);
  //  showModal();
  });
  pokemonList.appendChild(pokemonList2);
  pokemonList2.appendChild(button);
  }

function showModal(item){
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  let modalHeader = $('.modal-header');


  modalTitle.empty();
  modalBody.empty();

  let nameElement = $('<h1>' + item.name + '</h1>');
  let imageElementFont = $('<img class="modal-img style="width:50%">');
  imgageElemetFront.attr("src", item.imageUrlFront);
  let imageElementBack = $('<img class="modal-img style="width:50%">');
  imgageElemetBack.attr("src", item.imageUrlBack);
  let heightElement = $('<p>' + ' height : ' + item.height + '</p>' );

  modalTitle.append(nameElement);
  modalBody.append(imageElementFont);
  modalBody.append(imageElementBack);
  modalBody.append(heightElement);

// shows on click the Details of the Pokemon in a modal
/*  function showModal(titel, content, image){
    let modalContainer = document.querySelector('.modal-container');
    modalContainer.classList.remove('invisible');
    let modal = document.querySelector('.modal')
    modalContainer.appendChild(modal);
    let buttonClose = document.createElement('div');
    buttonClose.classList.add('button-close');
    let title = modal.querySelector('h1');
    let text = modal.querySelector('p');
    title.innerText = titel;
    text.innerText = 'height: ' + content;
    let img = document.querySelector('.image');
    img.src = image;
    img.classList.remove('invisible');

  }
  /*
// hide function for modal
function hideModal() {
  let modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.add('invisible');
  let img = document.querySelector('.image');
  img.classList.add('invisible')

}
// hides the modal on click of button= close-button
/*
let closeButton = document.querySelector('.button-close');
closeButton.addEventListener('click', hideModal);
// hides modal when press Escape
window.addEventListener('keydown', (event) => {
  let modalContainer = document.querySelector('.modal-container');
  if(event.key === 'Escape' && !modalContainer.classList.contains('.invisible')) {
    hideModal();
  }
});
// hides modal on click outside the modal
/*
document.querySelector('.modal').addEventListener('click', function (target) {
  let modalContainer = document.querySelector('.modal-container');
  if (target.target === modalContainer) {
    hideModal();
  }
})
*/
  /*function showModal(){
    let modalContainer = document.createElement('div');
    document.body.appendChild(modalContainer);
    modalContainer.classList.add('modalContainer');
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modalContainer.appendChild(modal);
    let buttonClose = document.createElement('div');
    buttonClose.classList.add('button-close');
    let title = document.createElement('h1');
    modal.appendChild(title);
    let text = document.createElement('p');
    modal.appendChild(text);
    title.innerText = 'hello';
    console.log('hello');
  }*/









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
        showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
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


});




  pokemonRepository.loadList().then(function(){


    // lopps over the  IIFE pokemonList
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListitem(pokemon);

    });
});
