const hoy = new Date()
console.log(hoy)
const nacimiento = new Date(1999, 7, 13, 10, 50)
console.log(nacimiento)

const tarde = hoy.getHours() > nacimiento.getHours()
console.log(tarde)

const diaNacimiento = nacimiento.getDay()
const mesNacimiento = nacimiento.getMonth()
const yearNacimiento = nacimiento.getFullYear()

console.log(diaNacimiento, mesNacimiento, yearNacimiento)
