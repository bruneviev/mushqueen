let exclamation = prompt("Para fins magicos, digite seu nome ou como deseja ser nomeado:");
alert(`Sinta-se em casa ${exclamation}.`);
alert(`Entenda que hoje voce e o responsavel pelo destino desse site e do seu proprio aproveitamento.`);
alert(`Voce criara uma historia guiada e suas decisoes terao consequencias futuras.`);

const active = document.getElementById("active");
const unnactive = document.getElementById("unnactive");
const container = document.getElementById("container");

active.addEventListener("click", () =>{
    container.classList.add("active");
})

unnactive.addEventListener("click", () =>{
    container.classList.remove("active");
})
