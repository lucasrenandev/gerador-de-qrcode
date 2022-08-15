const container = document.querySelector(".container")
const input = container.querySelector("main input")
const button = container.querySelector("main button")
const footerImg = container.querySelector("footer img")

button.addEventListener("click", () => {

    let inputValue = input.value

    if(!inputValue) {
        window.alert("Insira uma URL ou texto para gerar um QR Code")
    }
    else {
        button.innerHTML = "Gerando QR Code..."
        footerImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`
        footerImg.addEventListener("load", () => {
            button.innerHTML = "Gerar QR Code"
            container.classList.add("active")
        })
    }
})

input.addEventListener("keyup", () => {
    
    if(!input.value) {
        container.classList.remove("active")
    }
    
})