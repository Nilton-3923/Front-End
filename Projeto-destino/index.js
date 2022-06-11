const respostaElement  = document.querySelector('.resposta')
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#button")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


// Fazendo pergunta 
function fazerPergunta(){
  respostaElement.style.opacity = 1;
  if (inputPergunta.value == ""){
    respostaElement.innerHTML = "É necessário digitar uma pergunta válida!"
    respostaElement.classList.add('aviso')
    
    setTimeout(function() {
      respostaElement.style.opacity = 0;
    }, 3000)

    return
  }

  //Desabilitando o botão
  buttonPerguntar.setAttribute("disabled", true)

  //Mundando a cor da frase
  respostaElement.classList.remove('aviso')

  //Mostrando a pergunta 
  const pergunta = "<div>"+inputPergunta.value+"</div>"

  //Tamanho do array
  const totalRespostas = respostas.length
  //Gerando um valor aleatorio
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  //Apresentando a resposta 
  respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

  //Sumindo a resposta depois de 3.s

  setTimeout(function() {
    respostaElement.style.opacity = 0
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)

  
    
}

