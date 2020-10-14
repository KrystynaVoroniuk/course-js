let my_div = document.querySelector('.block');
my_div.onmousedown = function(event) { 

    my_div.className = "block";
    my_div.style.position = 'absolute';
    my_div.style.zIndex = 1000;

    document.body.append(my_div);

  
    moveAt(event.pageX, event.pageY);
  

    function moveAt(pageX, pageY) {
      my_div.style.left = pageX - my_div.offsetWidth / 2 + 'px';
      my_div.style.top = pageY - my_div.offsetHeight / 2 + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
 
    document.addEventListener('mousemove', onMouseMove);
  

    my_div.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      my_div.onmouseup = null;
    };
  
  };
