// let count = 0;

// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(btn => {
//   btn.addEventListener("click", e => {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });
// });


const btnDecrease = document.querySelector('.decrease')
const btnIncrease = document.querySelector('.increase')
const reset = document.querySelector('.reset')
const valorNumero = document.querySelector('#value')

let contador = 0

function atualizarContadorETrocarCor(){
  valorNumero.textContent = contador
  if(contador < 0){
    valorNumero.style.color = "red"
  }else if(contador > 0){
    valorNumero.style.color = "green"
  }else{
    valorNumero.style.color = "black"
  }
}

btnIncrease.addEventListener('click', () =>{
  contador++
  atualizarContadorETrocarCor()
})
btnDecrease.addEventListener('click', () =>{
  contador--
  atualizarContadorETrocarCor()
})
reset.addEventListener('click', () =>{
  contador = 0
  atualizarContadorETrocarCor()
})



