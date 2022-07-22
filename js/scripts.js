

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
  pokemonList2.classList.add('list-group-item');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button-design1');
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.type = 'button';
  button.dataset.toggle = 'modal';
  button.dataset.target = '#modal-container';
  button.addEventListener('click', function(){
    showDetails(pokemon);
  //  showModal();
  });
  pokemonList.appendChild(pokemonList2);
  pokemonList2.appendChild(button);
  }

// shows on click the Details of the Pokemon in a modal
  function showModal(titel, content, image){
    //let modalContainer = document.querySelector('.modal-container1');
  //  modalContainer.classList.remove('invisible1');
    //let modal = document.querySelector('.modal1')
  ////  modalContainer.appendChild(modal);
  //  let buttonClose = document.createElement('div');
  //  buttonClose.classList.add('button-close1');
    let title = document.querySelector('.modal-title');
    let text = document.querySelector('.modal-body');
    title.innerText = titel;
    text.innerText = 'height: ' + content;

    let img = $('<img class="modal-img" style="width:50%">');
    img.attr('src', image);

    //img.classList.remove('invisible1');
    text.append(img);

  }
// hide function for modal
//function hideModal() {
//  let modalContainer = document.querySelector('.modal-container1');
//  modalContainer.classList.add('invisible1');
//  let img = document.querySelector('.image1');
//  img.classList.add('invisible1')

//}
// hides the modal on click of button= close-button
//let closeButton = document.querySelector('.button-close1');
//closeButton.addEventListener('click', hideModal);
// hides modal when press Escape
//window.addEventListener('keydown', (event) => {
//  let modalContainer = document.querySelector('.modal-container1');
//  if(event.key === 'Escape' && !modalContainer.classList.contains('.invisible1')) {
//    hideModal();
//  }
//});
// hides modal on click outside the modal
//document.querySelector('.modal-container1').addEventListener('click', function (target) {
//  let modalContainer = document.querySelector('.modal-container1');
//  if (target.target === modalContainer) {
//    hideModal();
//  }
//})

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


})();




  pokemonRepository.loadList().then(function(){


    // lopps over the  IIFE pokemonList
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListitem(pokemon);

    });
})
