const btn = document.getElementById("btn");
const color = document.querySelector(".color");
main = document.querySelector("div.main")


function getRandomNumber(tamanhoVetor) {
  return Math.floor(Math.random() * tamanhoVetor);
}

function gerarCoresSimples(){
  const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
    
  btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber(colors.length);
  
    main.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });
}

function gerarCoresHexadecimais(){
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    
  btn.addEventListener("click", function () {
    let codigoHex = "#"

    for (let index = 0; index < 6; index++) {
      codigoHex += hex[getRandomNumber(hex.length)]
    }
  
    main.style.backgroundColor = codigoHex;
    color.textContent = codigoHex;
  });
}


document.addEventListener('DOMContentLoaded', gerarCoresSimples); // Deixa como padrão essa função, logo quando a pagina é carregada 
document.querySelector('a.simples').addEventListener("click", gerarCoresSimples)
document.querySelector('a.hex').addEventListener("click", gerarCoresHexadecimais)