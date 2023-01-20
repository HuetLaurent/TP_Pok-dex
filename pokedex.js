//methode fetch

fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
.then(response => response.json())
.then(data =>

    {
        for(let i = 0 ; i < data.length ; i++) {

            //creation des div ##### Carte Pokémon #####

            let newDiv = document.createElement("div");
            document.getElementById("pokeLibrary").appendChild(newDiv);
            newDiv.setAttribute("id",`div${data[i].id}`);
            newDiv.setAttribute("class","cartes");

            //creation des img dans les div ##### image Pokémon #####

            let newAvy = document.createElement("div");
            document.getElementById(`div${data[i].id}`).appendChild(newAvy);
            newAvy.setAttribute("id",`pokeAvy${i}`);
            newAvy.setAttribute("class","pokeAvy")

            let newImg = document.createElement("img");
            document.getElementById(`pokeAvy${i}`).appendChild(newImg);
            newImg.setAttribute("src",`${data[i].image}`);
            newImg.setAttribute("class","pokeImage");

            //nom et ID des pokémons

            let newNameDiv = document.createElement("div");
            document.getElementById(`div${data[i].id}`).appendChild(newNameDiv);
            newNameDiv.setAttribute("id",`NameDiv${i}`);
            newNameDiv.setAttribute("class","nameDiv");

            let newNameID = document.createElement("h1");
            document.getElementById(`NameDiv${i}`).appendChild(newNameID);
            newNameID.setAttribute("class","nameDivGauche");
            newNameID.textContent = `n°${data[i].id} :`;

            let newNameName = document.createElement("h1");
            document.getElementById(`NameDiv${i}`).appendChild(newNameName);
            newNameName.setAttribute("class","nameDivDroite");
            newNameName.textContent = `${data[i].name}`

            //types et couleur des cartes

            
        }
    }
    
)