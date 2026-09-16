const cards = document.getElementById("cards");

fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
  .then(response => response.json())
  .then(data => {

    data.results.forEach(pokemon => {

      fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {

          const card = document.createElement("div");
          card.className = "card";

          card.innerHTML = `
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h2>${data.name}</h2>
            <p>Pokémon #${data.id}</p>
          `;

          cards.appendChild(card);
        });

    });

  })
  .catch(error => {
    console.log("Error:", error);
  });
