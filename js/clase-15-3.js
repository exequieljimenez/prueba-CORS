let lista = document.getElementById("lista")

fetch('http://www.omdbapi.com/?i=tt0006206&apikey=62e0ebc6')
    .then((resp) => resp.json())
    .then((data) => {
            lista.innerHTML = `
                <h4>${data.Title} del director ${data.Director}</h4>
                <img src="${data.Poster}">`
        
    })
