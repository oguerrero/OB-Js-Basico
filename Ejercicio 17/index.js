/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
let marker, marker2, marker3, map

// eslint-disable-next-line no-unused-vars
function initMap () {
  // console.log("Inicializando mapa")
  const posicion = {
    lat: 19.414916440660548,
    lng: -99.13031461638475
  }

  const posicion2 = {
    lat: 19.461620896617582,
    lng: -99.17064769079049
  }

  const posicion3 = {
    lat: 19.42983514808806,
    lng: -99.16637913035744
  }

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: posicion
  })

  marker = new google.maps.Marker({
    position: posicion,
    map,
    title: 'Posición Inicial'
  })

  marker2 = new google.maps.Marker({
    position: posicion2,
    map,
    title: 'Posición Inicial'
  })

  marker3 = new google.maps.Marker({
    position: posicion3,
    map,
    title: 'Posición Inicial'
  })
  // Obtener la geolocalización
  // marker.setPosition({ lat, lng })
  geoPosiciona()
}

function geoPosiciona () {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = { timeout: 60000 }
    // eslint-disable-next-line no-unused-vars
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
  } else {
    alert('Tu navegador no admite geolocalización')
  }
}

function centraMapa (position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}

function onError (error) {
  console.log('Se ha producido un error y lo hemos gestionado')
  console.error(error)
}
