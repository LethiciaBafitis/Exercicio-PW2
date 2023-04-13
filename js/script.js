function minhaFuncao() {
 let sorteioCor = Math.floor(Math.random() * cores.length)
  document.body.style.backgroundColor = cores[sorteioCor];
}
const cores = ["##6dc8cf", "##9762b5", "#c48d89", "#bd24a3", "#7accb9", "#7aabcc", "#6fbd81", "#BA55D3", "#726691", "#ea94ff"];

// fundo

// função2
function minhaFuncao2(){
  let sorteioCor = Math.floor(Math.random() * coresBotao.length)
  botao.style.backgroundColor = coresBotao[sorteioCor];
}
const coresBotao = ["#6dc8cf", "##9762b5", "#c48d89", "#bd24a3", "#7accb9", "#7aabcc", "#6fbd81", "#726691", "#ea94ff", "#7B68EE","#9370DB","#8A2BE2","#4B0082","#9400D3","#9932CC","#BA55D3","#A020F0","#8B008B","#FF00FF"];
botao = document.getElementById("div-2");
function minhaFuncao3(){
  botao.style.backgroundColor='';
}
//
// funcao 4
function minhaFuncao4(){
  let sorteioCor = Math.floor(Math.random() * corBotao2.length)
  botao2.style.backgroundColor = corBotao2[sorteioCor];
}
const corBotao2 = ["#6dc8cf", "##9762b5", "#c48d89", "#bd24a3", "#7accb9", "#7aabcc", "#6fbd81", "#726691", "#ea94ff", "#7B68EE","#9370DB","#8A2BE2","#4B0082","#9400D3","#9932CC","#BA55D3","#A020F0","#8B008B","#FF00FF"];
botao2 = document.getElementById("div-3");
function minhaFuncao5(){
  botao2.style.backgroundColor='';
}
//
// funcao6
function minhaFuncao6(){
  let sorteioCor = Math.floor(Math.random() * corBotao3.length)
  botao3.style.backgroundColor = corBotao3[sorteioCor];
}
const corBotao3 = ["#6dc8cf", "#9762b5", "#c48d89", "#bd24a3", "#7accb9", "#7aabcc", "#6fbd81", "#726691", "#ea94ff", "#7B68EE","#9370DB","#8A2BE2","#4B0082","#9400D3","#9932CC","#BA55D3","#A020F0","#8B008B","#FF00FF"];
botao3 = document.getElementById("div-4");
function minhaFuncao7(){
  botao3.style.backgroundColor='';
}

//

// contador
let num = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".botao");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrescente")) {
      num--;
    } else if (styles.contains("crescente")) {
      num++;
    } else {
      num = 0;
    }

    if (num > 0) {
      value.style.color = "#800080";
    }
    if  (num < 0) {
      value.style.color = "#b666d2";
    }
    if (num === 0) {
      value.style.color = "#800080";
    }
    value.textContent = num;
  });
});
// array 2
nomes = new Array;
teste = document.getElementById("nome");

for(x=0;x<=0;x++){
  nomes[x] = prompt("Digite seu " + (x+1) + "º nome:"  +  nomes);
}

nome.innerHTML = nomes;    