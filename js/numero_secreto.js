//função de resetar o input quando clicado no campo
function converter_algarismo() {

    //buscar valor inserido
    let numero_tentativa = parseInt(document.getElementById("numero_input").value)
    console.log("numero inserido: nº " + numero_tentativa)

    //caso digitem numero menor do que 1
    if (numero_tentativa < 1) {
        document.getElementById("numero_input").value = 1
        console.log("você digitou " + numero_tentativa + " Apenas valores a partir de 1 são aceitos e o numero foi convertido automaticamente")
    }
    if (numero_tentativa > 20) {
        document.getElementById("numero_input").value = 20
        console.log("vocÊ digitou " + " Apenas valores até 20 são aceitos e o seu numero foi convertido automaticamente")
    }
}


//função de apagar o input ao clicar
function apagar(id) {
    document.getElementById(id).value = ""
    console.log("campo " + id + " selecionado e apagado")
}


//gerar o numero secreto ao carregar a pagina
var numero_secreto = parseInt(Math.random() * 21)
console.log("o numero secreto foi gerado aleatoriamente e é " + numero_secreto)

//caso numero secreto seja gerado menor do que 1
if (numero_secreto < 1) {
    numero_secreto = 1
    console.log("o numero secreto foi gerado menor do que o valor minimo e convertido automaticamente para o numero inteiro e valido mais próximo: " + numero_secreto)
}
//caso o numero secretro seja gerado maior do que 20
else if (numero_secreto > 20) {
    numero_secreto = 20
    console.log("o numero secreto foi gerado maior do que um valor válido e convertido automaticamente para o numero inteiro e valido mais próximo: " + numero_secreto)
}


// //criar um contador de tentativas, para um total de 5 chances de adivinhar o numero
var chances = 0

//identificaros elementos que vão ser reexibidas e/ou escondidas
var div_advinhar = document.getElementById("area_advinhar")
var div_reiniciar = document.getElementById("area_reiniciar")
var acertou_img = document.getElementById("acertou")
var errou_img = document.getElementById("errou")


//rodar a função de adivinhação
function adivinhar() {
    //fazer o botão buscar o numero digitado
    var numero_tentativa = parseInt(document.getElementById("numero_input").value)
    console.log("você chutou o nº " + numero_tentativa)


    //se chances já acabaram
    if (chances == 4 && numero_tentativa != numero_secreto) {
        console.log("essa foi a ultima tentativa")

        //exibir mensagem final 
        document.getElementById("resposta").innerHTML = "Fim de jogo. <br> O numero secretão era " + numero_secreto
        
        //esconder botão de continuar o jogo
        div_advinhar.classList.toggle("esconder")

        //exibir botão de reiniciar o jogo
        div_reiniciar.classList.remove("esconder")
    }

    //se dentro de 5 chances, permitir função para adivinhar
    else if (chances < 5) {
        //aumentar o contador de chances a cada tentativa
        chances = chances + 1
        console.log(chances + "º tentativa usada. Você tem " + (5 - chances) + " chances, de um total de cinco")

        //buscar o valor digitado
        // let numero_tentativa = parseInt(document.getElementById("numero_input").value)
        console.log("você chutou o numero " + numero_tentativa)

        //verificar se o valor digitado é igual ao numero_secreto
        //caso o input tentativa seja igual ao numero secreto
        if (numero_tentativa == numero_secreto) {
            document.getElementById("resposta").innerHTML = "Ora ora, temos um Cheroque Rolmes por aqui. <br> O numero secretão era " + numero_secreto
            //caso acertem, jogar o numero de tentativas para o máximo, forçando o fim do jogo
            numero_tentativa = 5

            //exibir meme sheroque rolmes/acertou
            acertou_img.classList.toggle("esconder")

            //esconder imagem errou caso ja tenha aparecido
            errou_img.classList.add("esconder")


            //esconder botão de continuar o jogo
            div_advinhar.classList.toggle("esconder")

            //exibir botão de reiniciar o jogo
            div_reiniciar.classList.toggle("esconder")

            console.log("Numero adivinhado. Parabãins Shinji")
        }

        //Se o input tentativa for diferente do numero_secreto
        //caso em que o input é maior que numero secreto
        else if (numero_tentativa > numero_secreto) {
            //exibir meme
            errou_img.classList.remove("esconder")

            //exibir mensagem de dica
            document.getElementById("resposta").innerHTML = "Errou! <br> O número secretão é menor do que " + numero_tentativa + "<br>" + "Você tem mais " + (5 - chances) + " chance(s)"
        }

        //caso em que o input é menor que numero secreto
        else if (numero_tentativa < numero_secreto) {
            //exibir meme
            errou_img.classList.remove("esconder")

            //exibir mensagem de dica
            document.getElementById("resposta").innerHTML = "Errou! <br> O número secretão é maior do que " + numero_tentativa + "<br>" + "Você tem mais " + (5 - chances) + " chances(s)"
        }
        //hipotese de erro ao inserir qualquer outra coisa
        else {
            chances = chances - 1
            console.log("sua ultima chance foi creditada e você tem " + (5 - chances) + " restantes")
            alert("Erro. Digite apenas numeros entre 1 e 20")
        }
    }
}

function reiniciar() {
    console.clear()
    //resetar o contador de chances
    chances = 0
    console.log("numero de chances resetado para " + chances)

    //sortear novo numero secreto sem atualizar a pagina
    numero_secreto = parseInt(Math.random() * 21)
    console.log("Um novo numero secretão foi gerado aleatoriamente e é " + numero_secreto)

    //esconder botão de continuar o jogo
    div_advinhar.classList.toggle("esconder")

    //exibir botão de reiniciar o jogo
    div_reiniciar.classList.toggle("esconder")

    //apagar o paragrafo de resultado/dica
    document.getElementById("resposta").innerHTML = ""

    //apagar o ultimo input tentado
    document.getElementById("numero_input").value = ""
    //apagar imagens
    errou_img.classList.add("esconder")
    acertou_img.classList.add("esconder")
}
