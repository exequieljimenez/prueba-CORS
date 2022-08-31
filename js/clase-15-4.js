fetch('albums.json')
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data))