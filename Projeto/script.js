let prev = document.getElementById("prev")
let next = document.getElementById("next")


next.onclick = () =>{
    let itens = document.querySelectorAll(".item")
    document.querySelector(".slider").appendChild(itens[0])
}

prev.onclick = () =>{
    let itens = document.querySelectorAll(".item")
    document.querySelector(".slider").prepend(itens[itens.length - 1])
}