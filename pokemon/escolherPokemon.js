
//Constantes dos cartões dos pokemons
const pikachu = document.querySelector('.tipo-eletrico')
const bulbassaur = document.querySelector('.tipo-grama')
const charmander = document.querySelector('.tipo-fogo')
const gyarados = document.querySelector('.tipo-agua')
const gengar = document.querySelector('.tipo-trevas')
const dragonite = document.querySelector('.tipo-dragao')

//Seletores 
const lPikachu = document.getElementById('pikachuListagem')
const lBulbassaur = document.getElementById('bulbassaurListagem')
const lCharmander = document.getElementById('charmanderListagem')
const lGyarados = document.getElementById('gyradosListagem')
const lGengar = document.getElementById('gengarListagem')
const lDragonite = document.getElementById('dragoniteListagem')


function escolha(idPokemon){

    switch (idPokemon) {
        case 1:
            console.log("1");
            
            //Para sumir os outros cards
            lBulbassaur.classList.remove('ativo');
            lCharmander.classList.remove('ativo');
            lGyarados.classList.remove('ativo');
            lGengar.classList.remove('ativo');
            lDragonite.classList.remove('ativo');

            //Para aparecer o card selecionado
            lPikachu.classList.add('ativo');

            bulbassaur.classList.remove('aberto');
            charmander.classList.remove('aberto');
            dragonite.classList.remove('aberto');
            gyarados.classList.remove('aberto');
            gengar.classList.remove('aberto');
            pikachu.classList.add('aberto');


        break;

        case 2:
            console.log("2");

            //Para sumir os outros cards
            lPikachu.classList.remove('ativo');
            lCharmander.classList.remove('ativo');
            lGyarados.classList.remove('ativo');
            lGengar.classList.remove('ativo');
            lDragonite.classList.remove('ativo');

            //Para aparecer o card selecionado
            lBulbassaur.classList.add('ativo');

            bulbassaur.classList.add('aberto');
            charmander.classList.remove('aberto');
            dragonite.classList.remove('aberto');
            gyarados.classList.remove('aberto');
            gengar.classList.remove('aberto');
            pikachu.classList.remove('aberto');
 
        break;

        case 3:
            console.log("3");

            //Para sumir os outros cards
            lBulbassaur.classList.remove('ativo');
            lGyarados.classList.remove('ativo');
            lPikachu.classList.remove('ativo');
            lGengar.classList.remove('ativo');
            lDragonite.classList.remove('ativo');

            //Para aparecer o card selecionado
            lCharmander.classList.add('ativo');

            bulbassaur.classList.remove('aberto');
            charmander.classList.add('aberto');
            dragonite.classList.remove('aberto');
            gyarados.classList.remove('aberto');
            gengar.classList.remove('aberto');
            pikachu.classList.remove('aberto');
        break;

        case 4:
            console.log("4");

            lBulbassaur.classList.remove('ativo');
            lCharmander.classList.remove('ativo');
            lPikachu.classList.remove('ativo');
            lGengar.classList.remove('ativo');
            lDragonite.classList.remove('ativo');

            //Para aparecer o card selecionado
            lGyarados.classList.add('ativo');
            gyarados.classList.add('aberto');

            bulbassaur.classList.remove('aberto');
            charmander.classList.remove('aberto');
            dragonite.classList.remove('aberto');
            gengar.classList.remove('aberto');
            pikachu.classList.remove('aberto');
        break;

        case 5:
            console.log("5");

            //Para sumir os outros cards
            lBulbassaur.classList.remove('ativo');
            lCharmander.classList.remove('ativo');
            lGyarados.classList.remove('ativo');
            lPikachu.classList.remove('ativo');
            lDragonite.classList.remove('ativo');

            //Para aparecer o card selecionado
            lGengar.classList.add('ativo');

            bulbassaur.classList.remove('aberto');
            charmander.classList.remove('aberto');
            dragonite.classList.remove('aberto');
            gyarados.classList.remove('aberto');
            gengar.classList.add('aberto');
            pikachu.classList.remove('aberto');
        break;

        case 6:
            console.log("6");

            //Para sumir os outros cards
            lBulbassaur.classList.remove('ativo');
            lCharmander.classList.remove('ativo');
            lGyarados.classList.remove('ativo');
            lGengar.classList.remove('ativo');
            lPikachu.classList.remove('ativo');

            //Para aparecer o card selecionado
            lDragonite.classList.add('ativo');

            bulbassaur.classList.remove('aberto');
            charmander.classList.remove('aberto');
            dragonite.classList.add('aberto');
            gyarados.classList.remove('aberto');
            gengar.classList.remove('aberto');
            pikachu.classList.remove('aberto');

            
        break;
    }
    
}