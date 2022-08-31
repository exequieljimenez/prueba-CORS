// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json))

let lista = document.getElementById("lista")

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(resp => resp.json())
//     .then((data) => {
//         let counter = 1
//         for(let pokemon of data.results) {
//             let nuevoElemento = document.createElement("div")
//             nuevoElemento.innerHTML = `
//                                     <div class="listaStyle">
//                                     Nombre ${counter}: ${pokemon.name}
//                                     </div>`
//             lista.appendChild(nuevoElemento)
//             counter++  
//         }
        
//     })

// console.log(fetch('https://jsonplaceholder.typicode.com/posts/1'))

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data[0].title)
        console.log(data[0].body)
        console.log(data)
        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.title}</p>`
            
            lista.append(li)
        })
    })