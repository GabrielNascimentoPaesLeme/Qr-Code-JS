const container = document.querySelector("#container");
const btn = document.querySelector("#qr-reader button");
const input = document.querySelector("#qr-reader input");
const img = document.querySelector("#qr-code img")

console.log(img)

//Função para Gerar o Qr
function geraQrCode (){
    const inputValue = input.value

    if(!inputValue) return;

    btn.innerText = 'Gerando código...'

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`

    img.addEventListener("load", () => {
        container.classList.add("active")
        btn.innerText = 'Código gerado.'
    });

}

//Evento Gerar QR
btn.addEventListener("click", () => {
    geraQrCode();
} )

//Gerando QR com tecla enter
input.addEventListener("keydown", (tecla) => {
    if (tecla.code === "Enter"){
        geraQrCode()
    }
} )

//Limpando area de input
input.addEventListener("keyup", () => {
    if(!input.value){
        container.classList.remove("active")
        btn.innerText = 'Gerar Qr Code...'
    }
})