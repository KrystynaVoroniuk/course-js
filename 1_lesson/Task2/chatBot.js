function Input() {
let zakaz = 0;
let menu = 0;
let add = 0;
let ladoshka = 0;
let result = [];

do{
    zakaz = prompt("Заказ здесь или с собой?")
}
    while (zakaz != "здесь" && zakaz != "с собой" );
    
do{
    
    do{ 
        menu = prompt(" Выберите что хотите из меню: бургер, кола, салат, кофе, пицца");
    }
        while(menu !== "бургер" && menu !== "кола" && menu !== "салат" && menu !== "кофе" && menu !== "пицца");
        
    result.push(menu);
    add = confirm("Что-нибудь еще?");
 }
    while ( add === true);
    
    ladoshka = prompt("купите ладошку для помощи детям?");
    
    
    return result;
}   

alert( `Ваш заказ: ${Input()}` );
       

   


