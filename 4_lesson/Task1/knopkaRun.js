function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let knopka = document.getElementById('my-button');
knopka.onmouseover = function(event){
    let target = event.target;
    target.style.top = getRandomInt(0, 150) + "px";
    target.style.left = getRandomInt(0, 150) + "px";
}


