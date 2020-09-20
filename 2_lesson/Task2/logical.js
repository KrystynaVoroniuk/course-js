
let outUser = {
    company: "partner's company",
    title: "Mrs",
    name: "David"
};

function uUser(user){
        if((user.company === "our company" || user.company === "partner's company") && (user.title === "Mr" || user.title === "Mrs")){
        console.log(user.name);
    } else {
        console.log("not our employee");
    }
    
}
uUser(outUser);

    



