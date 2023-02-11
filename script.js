const jokeEL = document.getElementById("joke")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", generateJoke)


generateJoke()

function generateJoke(){
    fetch("https://icanhazdadjoke.com", {
        headers: {
            "Accept": "application/json"
        }
    }).then((res) => res.json()).then(data => {
        jokeEL.innerHTML = data.joke
    })
}