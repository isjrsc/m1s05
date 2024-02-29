const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}

const numerosOrdenados = [...numeros]

numerosOrdenados.sort((numero1 , numero2) => numero1 - numero2)

console.log(`A lista de números ordenados é ${numerosOrdenados.join(" ")}`)