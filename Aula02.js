//Exercício 1 - Frase na tela - Implemente um programa que escreva na tela a frase "O primeiro programa a gente nunca esquece!"

console.log("Exercício 01");
console.log("------------");
console.log();

console.log("O primeiro programa a gente nunca esquece!");
console.log();
console.log();


//Exercício 2 - Etiqueta - Elabora um programa que escreva seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

console.log("Exercício 02");
console.log("------------");
console.log();

let nome = prompt("Digite seu nome completo: ");
let endereco = prompt("Digite seu endereço: ");
let cep_fone = prompt("Digite seu CEP e telefone: ");
console.log();


console.log("Nome: " + nome);
console.log("Endereço: " +endereco);
console.log("CEP e Telefone: " +cep_fone);
console.log();
console.log();

// Exercício 3 - Letra de música - Faça um programa que mostre na tela uma letra de música que você goste.

console.log("Exercício 03");
console.log("------------");
console.log();

console.log("Até Quando Esperar - Plebe Rude");
console.log();
console.log(`Não é nossa culpa
Nascemos já com uma bênção
Mas isso não é desculpa
Pela má distribuição
Com tanta riqueza por aí
Onde é que está? Cadê sua fração?
Com tanta riqueza por aí
Onde é que está? Cadê sua fração?
Até quando esperar?
E cadê a esmola
Que nós damos sem perceber?
Que aquele abençoado
Poderia ter sido você
Com tanta riqueza por aí
Onde é que está? Cadê sua fração?
Com tanta riqueza por aí
Onde é que está? Cadê sua fração?
Até quando esperar a plebe ajoelhar
Esperando a ajuda de Deus?
Até quando esperar a plebe ajoelhar
Esperando a ajuda de Deus
Posso
Vigiar teu carro?
Te pedir trocados?
Engraxar seus sapatos?
Posso?
Vigiar teu carro?
Te pedir trocados?
Engraxar seus sapatos?
Sei, não é nossa culpa
Nascemos já com uma bênção
Mas isso não é desculpa
Pela má distribuição
Tanta riqueza por aí
Onde é que está? Cadê sua fração?
Até quando esperar a plebe ajoelhar?
Esperando a ajuda de Deus
Até quando esperar a plebe ajoelhar?
Esperando a ajuda do divino Deus`);

console.log();
console.log();

// // Exercício 04 - Tabela de notas - Você foi contratado por uma escola para fazer o sistema de boletim dos alunos.
// // Como primeiro passo, escreva um programa que produza a seguinte saída:

// ALUNO(A) NOTA
// ======== ====
// ALINE    9.0
// MARIO    DEZ
// SÉRGIO   4.5
// SHIRLEY  7.0

console.log("Exercício 04");
console.log("------------");
console.log();

console.log("ALUNO(A) NOTA");
console.log("=======  ====");
console.log("ALINE    9.0");
console.log("MÁRIO    DEZ");
console.log("SÉRGIO   4.5");
console.log("SHIRLEY  7.0");

console.log();
console.log();

//  Exercício 05 - Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha um das opções, exibindo qual foi a opção escolhida.

// Cadastro de clientes
// 0 - Fim
// 1 - Inclui
// 2 - Altera
// 3 - Exclui
// 4 - Consulta

console.log("Exercício 05");
console.log("------------");
console.log();

console.log("Preencha os dados abaixo: ");
console.log("-------------------------");
console.log();

let identifica = prompt("Informe seu nome: ");
let idade = +prompt("Informe sua idade: ");
let sapato = +prompt("Qual o número do seu sapato: ")

console.log();
console.log("Você inseriu os seguintes dados:")
console.log();

console.log("Nome: " +identifica);
console.log("Idade: " +idade);
console.log("Sapato: " +sapato);
console.log();

console.log("Escolha agora uma das opções:");
console.log();

console.log("0 - Fim");
console.log("1 - Consulta");
console.log("2 - Altera");
console.log("3 - Exclui");
console.log("4 - Consulta");
console.log();

let opcao = prompt("Insira a opção desejada: ");
console.log();
console.log("Você escolheu a opção: "  +opcao);

console.log();
console.log();


//Exercício 06 - Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário:

// - Quantidade de vida um monstro (entre 10 e 50)
// - Valor do ataque do jogador por turno (entre 5 e 10)
// - Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o mosntro.
// - Exiba: O jogador irá derrotar o monstro em X turnos.


console.log("Exercício 06");
console.log("------------");
console.log();

let vid = prompt("Informe a quantidade de vida do monstro (entre 10 e 50: ");
console.log();
 
let ataque = prompt("Qual o valor do ataque (entre 5 e 10): ");
console.log();
  
let turnos = (vid / ataque);
console.log("Quantidade de turnos para derrotar o monstro: " +turnos); 

console.log();
console.log();

// Exercício 07 - E os 10% do garçom?
// - Defina uma variável para o valor de uma refeição que custou R$ 42,54
// - Defina uma variável para o valor da taxa de serviço que é de 10%
// - Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formação: R$ 9999,99

console.log("Exercício 07");
console.log("------------");
console.log();

console.log("Butecos Canecos - Valor");
console.log();

console.log("Filé de Maçaranbuda  -  R$ 42,54");
console.log();
let valor = 42.54
let taxa = 42.54 * 10 / 100
console.log("10% do Garçom: R$ " +taxa.toFixed(2));
console.log();
let soma = valor + taxa
console.log("Valor total: R$ " +soma.toFixed(2));

console.log();
console.log();

// Exercício 08 - Qual o valor do troco ?
// - Defina uma variável para o valor de uma compra que custou R$100,98
// - Defina uma variável para o valor que o cliente pagou R$ 150,00
// - Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

console.log("Exercício 08");
console.log("------------");
console.log();

console.log("Lojas Marambaia - Ticket de compra 003");
console.log();
console.log("Valor total da compra: R$ 100,98");
console.log();
console.log("Valor pago: R$ 150,00");
console.log();
let valor8 = (100.98);
let pago = (150.00);
let troco = pago - valor8;
console.log("Troco ao cliente: R$ " +troco.toFixed(2));

console.log();
console.log();

// Exercício 09 - Você está na flor da idade ?
// Defina uma variável para o valor do ano do nascimento
// Defina uma variável para o ano atual
// Defina uma variável que calcula o valor final da idade da pessoa
// Exiba a mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

console.log("Exercício 09");
console.log("------------");
console.log();

console.log("Você está na flor da idade ?");
console.log();
let idade9 = +prompt("Informe o ano de seu nascimento: ");
console.log();
let atual = +prompt("Informe o ano atual: ");
let eai = atual - idade9;
console.log();
console.log("Parabéns você tem somente", +eai, "anos. ");
console.log();
console.log("Você está na flor da idade !");

console.log();
console.log();

// Exercício 10 - Conversor de moedas
// Crie um programa que solicite um valor em real ao usuário e converta esse valor para:
// - DOLAR
// - EURO
// - LIBRA ESTERLINA
// - DOLAR CANADENSE
//- PESO ARGENTINO
//- PESO CHILENO

console.log("Exercício 10");
console.log("------------");
console.log();

console.log("Conversor de moedas da Blue.");
console.log();

let reais = +prompt("Informe a quantia em REAIS: R$")
console.log();

console.log("Esse valor é equivalente a: ");
console.log();
let dolar = reais / 5.30;
let euro = reais / 6.22
let libra = 7.24
let dolarc = 4.14
let peso = 0.26
let pesoa = 0.05

console.log(("DOLAR: US$"), + dolar.toFixed(2));
console.log(("EURO: EUR"), + euro.toFixed(2));
console.log(("LIBRA: GBP"), + libra.toFixed(2));
console.log(("DOLAR CANADENSE: CAD"), + dolarc.toFixed(2));
console.log(("PESO MEXICANO: MXN"), + peso.toFixed(2));
console.log(("PESO ARGENTINO: ARS"), + pesoa.toFixed(2));
console.log();
console.log("Cotação em 21/09/2021.");
console.log();
console.log("Obrigado por utilizar nosso conversor de moedas.");

console.log();
console.log();

Exercício 11 - Calcular de aumento de alguel - Parte 1

A sua calculadora vai receber o valor do aluguel e calcular o aumento baseado no IGPM de 31%.
A calculadora deve apresentar o aluguem reajustado no formado R$9999,99

Exemplo:

Valor do aluguel = R$1000,00
Valor do aluguem reajustado: R$1310,00


console.log("Exercício 11");
console.log("------------");
console.log();

console.log("Calculo de aumento de aluguel - Parte 1");
console.log();

let aluguel = +prompt("Informe o valor do aluguel atual: R$")
console.log();

console.log("Índice IGPM de 31%")
console.log();

let reajuste = aluguel * 31 / 100;
console.log("O valor do reajuste será de: R$ " +reajuste.toFixed(2));
console.log();

let  atualizado = aluguel + reajuste;
console.log("O novo valor do aluguel será de: R$ " +atualizado.toFixed(2));

console.log();
console.log();


Exercício 12 - Calculadora de aumento de alguem - Parte 2

Altere sua calculadora (feita na parte 1), para receber além do valor do aluguel, também o percentual do reajuste no formato 99%.


console.log("Exercício 12");
console.log("------------");
console.log();

console.log("Calculo de aumento de aluguel - Parte 2");
console.log();

let aluguel = +prompt("Informe o valor do aluguel atual: R$")
console.log();

let percent = +prompt("Informe o percentual de acrescimo ( % ): ");

console.log();

let reajuste = aluguel * percent / 100;
console.log("O valor do reajuste será de: R$ " +reajuste.toFixed(2));
console.log();

let  atualizado = aluguel + reajuste;
console.log("O novo valor do aluguel será de: R$ " +atualizado.toFixed(2));

console.log();
console.log();


