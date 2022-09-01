function ejercicio () {
  return true
}
console.log(ejercicio())

const funcionAsincrona = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Soy una promesa')
  }, 5000)
})

funcionAsincrona
  .then(() => console.log('Se ejecuto asincrono'))
  .catch(() => console.log('ERROR'))
  .finally(() => 'Ejecutado')

function * generaPares () {
  let id = 0
  while (true) {
    id += 2
    yield id
    if (id > 10) return
  }
}
const pares = generaPares()

console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
