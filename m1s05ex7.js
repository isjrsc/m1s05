const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}

for(let i = 0; i < 5; i++){
  console.log(`O ${i + 1} número é ${numeros[i]}`)
}

const quadrados = numeros.map(numeroatual => numeroatual ** 2)

console.log("O array dos quadrados do números é ", quadrados)