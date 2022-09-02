const boton = document.getElementById('boton')

boton.addEventListener('click', () => {
  alert('Click en el botón')
  console.log('a')
})

$(() => {
  $('#botonJQ').click(() => {
    alert('Hola, estoy utilizando jQuery"')
  })
})
