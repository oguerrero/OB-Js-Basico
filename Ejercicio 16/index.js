const parrafos = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.seccion')
const trash = document.querySelector('.trash')

parrafos.forEach((parrafo) => {
  parrafo.addEventListener('dragstart', (event) => {
    console.log('Estoy arrastrando el párrafo: ' + parrafo.innerText)
    parrafo.classList.add('dragging')
    event.dataTransfer.setData('id', parrafo.id)
    const elementoFantasma = document.querySelector('.imagen-fantasma')
    event.dataTransfer.setDragImage(elementoFantasma, 0, 0)
  })

  parrafo.addEventListener('dragend', () => {
    // console.log("He terminado de arrastrar")
    parrafo.classList.remove('dragging')
  })
})

secciones.forEach((seccion) => {
  seccion.addEventListener('dragover', (event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy' // copy por defecto
    // console.log("Drag Over")
    //
  })

  seccion.addEventListener('drop', (event) => {
    console.log('Drop')
    const idParrafo = event.dataTransfer.getData('id')
    // console.log("Párrafo id: ", idParrafo)
    const parrafo = document.getElementById(idParrafo)
    seccion.appendChild(parrafo)
  })
})

trash.addEventListener('dragover', (event) => {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'copy'
})

trash.addEventListener('drop', (event) => {
  const idParrafo = event.dataTransfer.getData('id')
  const parrafo = document.getElementById(idParrafo)
  parrafo.classList.add('hide')
})
