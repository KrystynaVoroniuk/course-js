function Constructor(m, n){
    let mass = [];
    for (let i = 0; i < m; i++){
        mass[i] = [];
        for (let j = 0; j < n; j++){
            mass[i][j] = Math.ceil(Math.random() * 10);
        }
    }

    this.matrix = mass;
        
}

let constr = new Constructor(3, 3);
console.log(constr.matrix);

