var modal = document.getElementById("myModal")

// Get the <span> element that closes the modal
var voltarBtn = document.getElementById("voltarBtn");

var pokemons = document.getElementsByClassName("pokemon");

const convertPokemonToHtml = pokemon => {

  return `
  <div class="modal-content ${pokemon.type}">
    <div>
        <span id="voltarBtn" class="close" onclick="closeModal()">X</span>
    </div>
    <div class="headerPokemon">
      <div class="title">
        <span class="name">${pokemon.name}</span>
        <span class="number"> #${pokemon.number}</span>
      </div>
      <div class="types">
        ${pokemon.types.map((type) => `<span class="type ${type}">${type}</span>`).join('')}
      </div>
    </div>
    <div class="image-div">
      <img class="imgPokemon"
        src="${pokemon.photo}"
        alt="${pokemon.name}">
    </div>
    <div class="tabsInfo">
    
      <div id="About" class="about-div">
          <div class="table">
            <p class="tableHeader">
              <span class="about-title">Height:</span> ${pokemon.height}cm
            </p>
            <p class="tableHeader">
              <span class="about-title">Weight:</span> ${pokemon.weight}Kg
            </p>
            <p class="tableHeader">
              <span class="about-title">Abilities:</span> ${pokemon.abilities.join(', ')}
            </p>
      </div>
      <div class="stats-div">
          <p class="tableHeader">
              HP: ${pokemon.stats["hp"]} 
              <br>
              <progress class="stats" value="${pokemon.stats["hp"]}" max="100"></progress>
          </p>
          <p class="tableHeader">
              Attack: ${pokemon.stats["attack"]}
              <br> 
              <progress class="stats" value="${pokemon.stats["attack"]}" max="100"></progress>
          </p>
          <p class="tableHeader">
              Defense: ${pokemon.stats["defense"]}
              <br>
              <progress class="stats" value="${pokemon.stats["defense"]}" max="100"></progress>
          </p>
          <p class="tableHeader">
              Sp. Attack: ${pokemon.stats["special-attack"]} 
              <br>
              <progress class="stats" value="${pokemon.stats["special-attack"]}" max="100"></progress>
          </p>

          <p class="tableHeader">
              Sp. Defense: ${pokemon.stats["special-defense"]} 
              <br>
              <progress class="stats" value="${pokemon.stats["special-defense"]}" max="100"></progress>
          </p>
          <p class="tableHeader">
              Speed: ${pokemon.stats["speed"]} 
              <br>
              <progress class="stats" value="${pokemon.stats["speed"]}" max="100"></progress>
          </p>
      </div>
      </div> 
    </div>
  </div>
  
  `

}

function openModal(id) {
  modal.style.display = "block";
  pokeApi.getPokemonCompleto(id).then((pokemon) => {
    // debugger
    const newHtml = convertPokemonToHtml(pokemon)
    modal.innerHTML = newHtml;
  })
}


// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
