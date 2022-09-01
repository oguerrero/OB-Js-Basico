let nombre = "Oscar"
console.log(nombre)
let apellido = "Guerrero"
console.log(apellido)
let estudiante = `${nombre} ${apellido}`
console.log(estudiante)
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)
let letterCount = estudiante.length
console.log(letterCount)
let firstLetterName = nombre[0]
console.log(firstLetterName)
let lastLetterApellido = apellido.slice(-1)
console.log(lastLetterApellido)
let estudianteSinEspacios = estudiante.replace(" ", "")
console.log(estudianteSinEspacios)
let isNombreinEstudiante = estudiante.includes(nombre)
console.log(isNombreinEstudiante)

