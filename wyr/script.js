let button = document.querySelector(".container .bottom .btn")
let text = document.querySelector(".container .wyrBox p .text")
let hindi = document.querySelector(".container .wyrBox p .hindi")

let dares = ["dare 1", "dare 2", "dare 3", "dare 4", "dare 5"]

button.addEventListener("click", function () {
    button.innerText = "Loading..."
    fetch("https://api.truthordarebot.xyz/v1/wyr").then(res => res.json()).then(result => {
        text.innerText = result.question;
        hindi.innerText = result.translations.hi;
        button.innerText = "New WYR"
    })

})