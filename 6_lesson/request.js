(async () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=779222b5c67e8d3dfd38dae89311dd4f';
    let response = await fetch(url);
    
    let weather_data = await response.json();

    function obertka(){
        mass = [];
        function recursive(weather_data) { 
         
            for (let i in weather_data) { 
                let value = weather_data[i]; 
    
                if (typeof value == "object") { 
                    mass.push(i); 
                    recursive(value); 
                } else { 
                    mass.push(`${i} = ${value}`); 
                } 
             
        } 
    } 
    recursive(weather_data);
    
    mass.forEach(item =>{
        if(item != 0){
        let list = document.createElement("li");
        document.querySelector(".ul1").append(list);
        list.innerHTML += item;
        list.className = "ul1";
        if(item.match(/[=]/g)){
            list.style.backgroundColor = "grey";
        
    } 
}})

    }
    obertka();

    
    console.log(weather_data);
    })();