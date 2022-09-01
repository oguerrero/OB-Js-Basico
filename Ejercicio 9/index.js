function ejercicio () {
  return true
}
console.log(ejercicio())

async function funcionAsincrona () {
  setTimeout(() => {
    console.log('Soy una promesa')
  }, 5000)
}

funcionAsincrona()

function indicesPares (current) {
  return current % 2 === 0 ? current + 2 : current + 1
}

console.log(indicesPares(2))
console.log(indicesPares(1))
