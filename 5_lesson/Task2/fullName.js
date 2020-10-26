let user = {
    get name() {
      return this._name;
    },
    get surname(){
        return this._surname;
    },
    
  
    set name(value) {
      if (value.match(/\s/g)) {
        console.log("введите имя без пробела");
        return;
      }
      this._name = value;
    },
    set surname(value) {
        if (value.match(/\s/g)) {
            console.log("введите фамилию без пробела");
            return;
          }
          this._surname = value;
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
      }

  };
  
  user.name ="Pete";
  user.surname = "Rick";
  console.log("Имя " + user.name);
  console.log("Фамилия " + user.surname);
  console.log(user.fullName);
  
