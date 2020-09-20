function myfunction(arg1){
    return function(arg2){
    console.log(`${arg1 + arg2}`);
    };
    }
    myfunction("Hello,");