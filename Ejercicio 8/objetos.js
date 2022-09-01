const datosPersonales = {
  nombre: 'Oscar',
  apellido: 'Guerrero',
  edad: 23,
  altura: 1.75,
  eresDesarrolador: true
}
console.log(datosPersonales)

const edad = datosPersonales.edad
console.log(edad)

const datosAmigos1 = {
  nombre: 'Enrique',
  apellido: 'Villareal',
  edad: 22,
  altura: 1.75,
  eresDesarrolador: true
}

const datosAmigos2 = {
  nombre: 'Alan',
  apellido: 'Franco',
  edad: 29,
  altura: 1.7,
  eresDesarrolador: true
}

const lista = [datosPersonales, datosAmigos1, datosAmigos2]
console.log('Lista Ordenada')
const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)
