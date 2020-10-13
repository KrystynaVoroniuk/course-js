let my_div = document.querySelector('.block');
my_div.onmousedown = function(event) { // (1) отследить нажатие

    // (2) подготовить к перемещению:
    // разместить поверх остального содержимого и в абсолютных координатах
    my_div.className = "block";
    my_div.style.position = 'absolute';
    my_div.style.zIndex = 1000;
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.append(my_div);
    // и установим абсолютно спозиционированный мяч под курсор
  
    moveAt(event.pageX, event.pageY);
  
    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    function moveAt(pageX, pageY) {
      my_div.style.left = pageX - my_div.offsetWidth / 2 + 'px';
      my_div.style.top = pageY - my_div.offsetHeight / 2 + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (3) перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);
  
    // (4) положить мяч, удалить более ненужные обработчики событий
    my_div.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      my_div.onmouseup = null;
    };
  
  };
