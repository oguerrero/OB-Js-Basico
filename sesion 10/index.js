// Formas de exportar modulos
// 1. CommonJS - require
// 2. Import ES6 - import

const moduloMatematicas = require('./modulos/matematicas')

const suma = moduloMatematicas.suma

suma(5)
