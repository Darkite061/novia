let gifs = [
    "https://media2.giphy.com/media/ZbNf1WwVYwqeOXsLmV/giphy.gif?cid=ecf05e47f4gjsp1pqmz4ejzutk6bl5vcz15plko7d0ahwa7o&rid=giphy.gif&ct=g", 
    "https://media0.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif?cid=ecf05e47cdok3zat2qay98u9joz0pf6dim82i4nmxa3eb6li&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/94EQmVHkveNck/giphy.gif?cid=ecf05e47jpmqkkq843w29vghgzr5y1fvcud4vj68s8qfe517&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/obBRY85qHrHIOX7TsF/giphy.gif?cid=ecf05e47g01tgl9ov0hv15occzb2bphprisls03jshtr0d40&rid=giphy.gif&ct=g"
];

function moveElmRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btn_si = document.querySelector('#btn_si');
let btn_no = document.querySelector('#btn_no');
const gif = document.getElementById("gif");


btn_no.addEventListener('click', function() {
    alert('¿Cómo de que no? 😥😢😰😭');
});

btn_si.addEventListener('click', function() {
    clearInterval(tim);
    btn_no.remove();

    const mensaje = encodeURIComponent(
        "Siiii ❤️ Acepto ser tu novia 🥰"
    );

    alert("Sabía que dirías que sí, Vanessa 💖");

    window.open(
        "https://wa.me/5213310983477?text=" + mensaje,
        "_blank"
    );
});

function rogar() {
    const img = document.createElement("img");
    let cambio = Math.floor(Math.random() * gifs.length);  
    img.src = gifs[cambio];

    gif.appendChild(img);

    setTimeout(() => {
        if (gif.firstElementChild) {
            gif.removeChild(gif.firstElementChild);
        }
    }, 8000);
}

const mensajes = [
    "¿Segura, Vanessa? 🥺",
    "Piénsalo bien, bonita 💕",
    "Te invito algo fresquito 🧋",
    "Por favor, Vane 😭",
    "Mira al perrito 🐶",
    "Última oportunidad, Vanessa 😅"
];

btn_no.addEventListener('mouseenter', function(e) {
    e.target.innerText =
        mensajes[Math.floor(Math.random() * mensajes.length)];

    moveElmRandom(e.target);
});

var tim = setInterval(rogar, 8000);