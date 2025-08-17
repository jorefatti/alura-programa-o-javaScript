
alert("Boas vindas ao jogo do número secreto");

let quantidadeNumeroSecreto = 1000;
let numeroSecreto = parseInt(Math.random() * quantidadeNumeroSecreto}) + 1;
let chute;
let tentativas = 1;


while (chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 a ${quantidadeNumeroSecreto}`);

    if (chute == numeroSecreto) {
        break;
    }else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que o ${chute}`);
        }else {
            alert(`O número secreto é maior que o ${chute}`);
        }
        tentativas++;
    }  

}

let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
