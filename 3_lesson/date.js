let date1 = new Date('2020-09-07T01:15');
let date2 = new Date('2020-09-21T05:15');


function differenceday(date1, date2){
    let count = 0;

    while(date1.getTime() < date2.getTime()){
        if(date1.getDay() !== 0 && date1.getDay() !== 6){
            count++;
        }
        date1.setDate(date1.getDate() + 1) ;


    }
    return count;



}
console.log(differenceday(date1, date2));