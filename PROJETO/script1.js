let tmp
function tempo(){
    let re = document.getSelector('#main')
    let hora = new Date()
    relogio.innerHTML = (hora.toLocaleDateString()).slice(-8)
}
document.querySelector('#ligar').addEventListener('click', () =>{
    tmp = setInterval(tempo,1000)
})
document.querySelector('#desligar').addEventListener('click', () =>{
    clearInterval(tmp)
})