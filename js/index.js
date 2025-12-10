
const cardsContainer = document.getElementById("cards__container")

fetch("https://hp-api.onrender.com/api/characters")
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {
            const newCharacter = document.createElement("div")
            newCharacter.classList.add("card")
            
            const imgHp = character.image ? character.image : "https://via.placeholder.com/300x400?text=Sin+Imagen"

            newCharacter.innerHTML = `

                <div class= "img__container">
                    <img src ="${imgHp}" alt ="${character.name}">
                </div>
                
                <div class="card__content">
                    <h2>${character.name}</h2>
                    <p><strong>House:</strong> ${character.house || "Unknown"}</p>
                    <p><strong>Species:</strong> ${character.species}</p>
                    <p><strong>Age:</strong> ${character.yearOfBirth ? 2025 - character.yearOfBirth : "Unknown"}</p>

                </div>
                `

            if(character.house == "Gryffindor") {
                newCharacter.classList.add("card-gryffindor")

            }else if (character.house == "Slytherin"){
                newCharacter.classList.add("card-slytherin")
            }else if(character.house == "Hufflepuff"){
                newCharacter.classList.add("card-hufflepuff")
            }else if(character.house == "Ravenclaw") {
                
                newCharacter.classList.add("card-ravenclaw")
            }
            
            cardsContainer.appendChild(newCharacter)

        });

    })
    .catch(error => console.error(error))


