//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Digite qual o dia da semana");

if (diaDaSemana == "Sábado"){
    alert("Bom fim de semana!");
    }else if (diaDaSemana == "Domingo"){
        alert("Bom fim de semana!");
    }else {
        alert("Boa semana")
    }

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Digite um número inteiro: ");

if (numero > 0) {
    alert("Você digitou um número positivo");
}else {
    alert("Você digitou um número negativo");
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt("Digite sua pontuação: ")

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
}else {
    alert("Tente novamente para ganhar")
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoDaConta = "R$10000.00";

alert(`Saldo dasua conta é ${saldoDaConta}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let seuNome = prompt("Digite seu nome: ");

alert("Boas-vindas " + seuNome)

//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10){
    alert(`Contador ${contador}`)
    contador++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador = 10;
while (contador >= 1){
    alert(`Contador ${contador}`)
    contador--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contador = prompt("Digite um número")

while(contador >= 0) {
    console.log(`contador ${contador}`);
    contador--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contador = prompt("Digite um número")
let progressao = 0;

while(contador != progressao) {
    console.log(`contador ${progressao}`);
    progressao++;
}

//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log ("Boas-vindas");

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Jonathan";
console.log(`Olá, ${nome}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome = "Jonathan";
alert(`Olá, ${nome}`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt("Qual sua linguagem de programação favorita?")
console.log(linguagem);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1, valor2, resultado;
valor1 = 10;
valor2 = 30;
resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1, valor2, resultado;
valor1 = 10;
valor2 = 30;
resultado = valor1 - valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt("Digite sua idade: ");
if (idade >= 18){
    conseole.log("Você é maior de idade!");
}else {
    console.log("Você é menor de idade!");
}

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Digite um número");
if (numero > 0){
    console.log("É positivo");
}else if (numero < 0){
    console.log("É negativo")
}else{
    console.log("É 0")
}

//Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;
while(contador <= 10){
    console.log(contador)
    contador++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 6;
let resultado = nota >= 7 ? "Aprovado" : "Reprovado"; 
console.log(resultado)

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numero = Math.random();
console.log(numero)

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numero = parseInt(Math.random() * 10) + 1;
console.log(numero);

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numero = parseInt(Math.random() * 1000) + 1;
console.log(numero)