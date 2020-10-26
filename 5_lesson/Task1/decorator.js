function countCall(){
    console.log("Вызов по счёту");
  }
  
  function calls(func){
    let time = 0;
    
    return function increase(){ 
        func()
        time = time + 1;
        console.log(time);
       
    
      }

        

    };
    
  
  let recording = calls(countCall);
  
  
  recording();
  recording();
  recording();
  
  
  