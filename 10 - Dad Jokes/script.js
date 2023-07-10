const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)
generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        },
    }

    const respond = await fetch('https://icanhazdadjoke.com', config)

    const data = await respond.json()
    jokeEl.innerHTML = data.joke 

}
// USING .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((respond) => respond.json())
//     .then((data)=>{
//         jokeEl.innerHTML= data.joke
//     })
// }