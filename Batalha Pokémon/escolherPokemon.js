
//Variaveis dos cartões dos pokemons
const pikachu = document.getElementById('Pikachu')
const bulbassaur = document.getElementById('Bulbassauro')
const charmander = document.getElementById('Charmander');
const gyarados = document.getElementById('Gyrados');
const gengar = document.getElementById('Gengar');
const dragonite = document.getElementById('Dragonite');


function escolha(idPokemon){

    switch (idPokemon) {
        case 1:
            console.log("1");
            
            //Para sumir os outros cards
            bulbassaur.style.display = "none";
            charmander.style.display = "none";
            dragonite.style.display = "none";
            gyarados.style.display = "none";
            gengar.style.display = "none";

            //Para aparecer o card selecionado
            pikachu.style.display = "block";


        break;

        case 2:
            console.log("2");

            //Para sumir os outros cards
            charmander.style.display = "none";
            dragonite.style.display = "none";
            gyarados.style.display = "none";
            gengar.style.display = "none";
            pikachu.style.display = "none";
            //Para aparecer o card selecionado
            bulbassaur.style.display = "block";
 
        break;

        case 3:
            console.log("3");

            //Para sumir os outros cards
            bulbassaur.style.display = "none";
            dragonite.style.display = "none";
            gyarados.style.display = "none";
            gengar.style.display = "none";
            pikachu.style.display = "none";
            //Para aparecer o card selecionado
            charmander.style.display = "block";
        break;

        case 4:
            console.log("4");

            bulbassaur.style.display = "none";
            charmander.style.display = "none";
            dragonite.style.display = "none";
            gyarados.style.display = "none";
            gengar.style.display = "none";
            pikachu.style.display = "none";

            //Para aparecer o card selecionado
            pikachu.style.display = "block";
        break;

        case 5:
            console.log("5");

            bulbassaur.style.display = "none";
            charmander.style.display = "none";
            dragonite.style.display = "none";
            gyarados.style.display = "none";
            gengar.style.display = "none";
            pikachu.style.display = "none";

            //Para aparecer o card selecionado
            pikachu.style.display = "block";
        break;

        case 6:
            console.log("6");

            bulbassaur.style.display = "none";
            charmander.style.display = "none";
            dragonite.style.display = "none";
            gyarados.style.display = "none";
            gengar.style.display = "none";
            pikachu.style.display = "none";

            //Para aparecer o card selecionado
            pikachu.style.display = "block";
        break;
    }
    
}