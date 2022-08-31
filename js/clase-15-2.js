let lista = document.getElementById("lista")

fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then((data) => {
        for(let datos of data) {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${datos.name} from house ${datos.house}</h4>
                <img src="${datos.image}">`
            lista.append(li)
        }
    })