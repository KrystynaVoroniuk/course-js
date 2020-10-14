
function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function getRandomPlace(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}
function getRandomSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateColor1(event) {
    let target = event.target;
    target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
};

function f(){
    for (let i = 1; i <= 999; i++) { 
 
        div = document.createElement('div');
        div.style.background = generateColor();
        div.style.height = getRandomSize(10, 100) + "px";
        div.style.width = getRandomSize(10, 100) + "px";
        div.style.left = getRandomPlace(0,100) + "%";
        div.style.position = 'relative';
        div.style.display = 'block';
        div.className = "entry"; 
        document.body.append(div);

        div.addEventListener('click', generateColor1);

        
      }

 
    
     


}

f();
