let pokemonRepository = (function () {
  let pokemonList = [];

  // returns the pokemonList
  function getAll() {
    return pokemonList;
  }
  //adds pokemon to the pokemonList
  function add(pokemon) {
    return pokemonList.push(pokemon);
  }

  //function for foreach loop
  function addListitem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let pokemonList2 = document.createElement("li");
    pokemonList2.classList.add("list-group-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-design1");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.type = "button";
    button.dataset.toggle = "modal";
    button.dataset.target = "#modal-container";
    button.addEventListener("click", function () {
      showDetails(pokemon);
      //  showModal();
    });
    pokemonList.appendChild(pokemonList2);
    pokemonList2.appendChild(button);
  }

  // shows on click the Details of the Pokemon in a modal
  function showModal(item) {
    console.log("item", item);
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    modalTitle.empty();
    modalBody.empty();
    let nameElement = $("<h1>" + item.name + "</h1>");
    let imageElementBack = $(
      '<img class="modal-img" alt="back of ' +
        item.name +
        '" ' +
        ' style="width:50%">'
    );
    imageElementBack.attr("src", item.imageUrl);
    let heightElement = $("<p>" + "Height : " + item.height + "</p>");
    let typesDiv = document.createElement("div");
    typesDiv.classList.add("type-wrapper");
    typesDiv.classList.add("row");
    modalTitle.append(nameElement);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(typesDiv);
    $("#pokemonModal").modal("toggle");
  }

  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  //function for addEventListener as a parameter
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
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

pokemonRepository.loadList().then(function () {
  // lopps over the  IIFE pokemonList
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListitem(pokemon);
  });
});
