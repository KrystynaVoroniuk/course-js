function countCall(){
    console.log("Вызов по счёту");
  }
  
  function calls(func){
    let time = 0;
    func()
    return function increase(){ 

        time = time + 1;
        console.log(time);
       
    
      }

        

    };
    
  
  let recording = calls(countCall);
  
  
  recording();
  recording();
  recording();
  
  
  