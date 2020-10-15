let input = document.getElementById("myTextarea");
let content = document.getElementById("result1");
let speed = document.getElementById("result2");
let start = document.getElementById("myButton");
let sbros = document.getElementById("myButton1");

start.addEventListener('click', disab);
start.addEventListener('click', tic);
start.addEventListener('click', symbol);
start.addEventListener('click', calcSpeed);
start.addEventListener('click', discharge);


function disab() {
    input.disabled = false;
  }


function tic(){
    setTimeout(() => {
    input.disabled = true;
    }, 6000);

  }


function symbol(){
    function charCount(text){
        return text.length;
      }

    setTimeout(() => {
        content.innerHTML = "Количество символов: " + charCount(input.value);

      }, 6000);
      }

function calcSpeed(){
    setTimeout(() => {
        let min = 60;
        let s = input.value;
        let len = s.length;
        let res = len/min
        return speed.innerHTML = "Средняя скорость печати в секунду: " + res + " зн/мин";

      }, 6000);

    }

function discharge(){
    setTimeout(() => {
      sbros.hidden = false;
        
    }, 6000);
    sbros.onclick = function(){
      input.value = "";
      speed.innerHTML = "";
      content.innerHTML = "";
    };}


     






      
      
      
  
   