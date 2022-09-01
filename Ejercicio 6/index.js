const listaCompras = ['huevo', 'pan', 'jamon', 'papas', 'queso']
console.log(listaCompras)
listaCompras.push('Aceite de Girasol')
console.log(listaCompras)
listaCompras.pop()
console.log(listaCompras)

const listaPeliculas = [
  {
    titulo: 'Batman: el caballero de la noche',
    director: 'Christopher Nolan',
    fechaEstreno: new Date(2008, 7, 18)
  },
  {
    titulo: '28 Days Later',
    director: 'Danny Boyle',
    fechaEstreno: new Date(2002, 11, 1)
  },
  {
    titulo: 'Shaun of the Dead',
    director: 'Edgar Wright',
    fechaEstreno: new Date(2004, 3, 29)
  }
]
console.log(listaPeliculas)

const peliculas2010 = listaPeliculas.filter(
  (pelicula) => pelicula.fechaEstreno > new Date(2010, 1, 1)
)
console.log(peliculas2010)
const directores = listaPeliculas.map((pelicula) => pelicula.director)
console.log(directores)
const titulos = listaPeliculas.map((pelicula) => pelicula.titulo)
console.log(titulos)
const directoresYtituloConcat = directores.concat(titulos)
console.log(directoresYtituloConcat)
const directoresYtituloSpread = [...directores, ...titulos]
console.log(directoresYtituloSpread)
