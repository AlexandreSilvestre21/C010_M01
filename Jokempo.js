jogarNovamente = "sim";

while(jogarNovamente == "sim"){


var totalJ = 0;
var totalC = 0;


console.log("============================================================")
const frase = "                Projeto 02 - Jokempô! - @Blue\n";
console.log(frase.toUpperCase());

let rodadas = +prompt("Quantas partidas você quer jogar ?");


for (let i = 0; i < rodadas; i++)
{


console.log();
console.log("============================================================")
console.log("Escolha qualquer número de 1 a 3, sendo que...");
console.log();
console.log("01 = PEDRA");
console.log("02 = PAPEL");
console.log("03 = TESOURA");
console.log();


let escolha = +prompt("Sua escolha é: ") 

if (escolha === 1){ 
  console.log()
  console.log ("Você escolheu: PEDRA ")
}
  else if (escolha === 2){
    console.log()
    console.log ("Você escolheu: PAPEL ")
  }
  else if (escolha === 3){
    console.log()
    console.log ("Você escolheu: TESOURA ")
  }
  else {
    console.log("Opção inválida, tente novamente");
    console.log()
  }


let numero = Math.floor(Math.random() * 3 + 1).toFixed(0);

if (numero == 1){
  console.log("O computador escolheu: PEDRA ")
}
  else if (numero == 2){
  console.log("O computador escolheu: PAPEL ")
    }
  else if (numero == 3){
  console.log("O computador escolheu: TESOURA ");
  }

if (escolha == 1 && numero == 1){
  console.log()
  console.log("Deu empate !");
} 
else if (escolha == 1 && numero == 2){
  console.log()
  console.log("Computador ganhou !")
  totalC ++;
}
else if (escolha == 1 && numero == 3){
  console.log()
  console.log("Você ganhou !")
  totalJ ++;
}
else if (escolha == 2 && numero == 1){
  console.log()
  console.log("Você ganhou !")
  totalJ ++;
}

else if (escolha == 2 && numero == 2){
  console.log()
  console.log("Deu empate !");

}
else if (escolha == 2 && numero == 3){
  console.log()
  console.log("Computador ganhou !")
  totalC ++;

}
else if (escolha == 3 && numero == 1){
  console.log()
  console.log("Computador ganhou !")
  totalC ++;

}
else if (escolha == 3 && numero == 2){
  console.log()
  console.log("Você ganhou !")
  totalJ ++ ;
}
else if (escolha == 3 && numero == 3){
  console.log()
  console.log("Deu empate !");

}

}

console.log();
console.log("====================== * PLACAR  * =========================");
console.log();
console.log("Pontos do Jogador: ", +totalJ);
console.log("Pontos do Computador: ", +totalC);
console.log();
  
console.log("============================================================");

if (totalJ > totalC){
  console.log("                 PARABÉNS VOCÊ É O VENCEDOR !!!");
}
else if(totalJ < totalC){
  console.log("           O computador venceu, não foi dessa vez!");

}
else {
  console.log("             DEU EMPATE !!! VOCÊS SÃO FERAS !!!");
}

console.log("============================================================");

console.log();
let jogarNovamente = prompt("Quer jogar novamente (Sim) ou (Não) ?").toUpperCase();
console.log();

if (jogarNovamente == "SIM"){
  console.clear();
}

else if (jogarNovamente == "NÃO"){
  console.log("Obrigado por jogar ! Até a próxima.")
  console.log();
}
}
console.log("============================================================");
