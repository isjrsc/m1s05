const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}

const soPares = numeros.filter(numeroAtual => {
  if(numeroAtual % 2 == 0){
    return true
  }
})

console.log("O novo array com números pares é ", soPares)