function clorox(num) {

    for (let i = 1; i <= num; i++){

        if (i % 3 === 0 && i % 5 === 0){
            console.log("CLXDTC")
        } else if (i % 3 === 0){
            console.log ("CLX")
        } else if (i % 5 === 0){
            console.log ("DTC")
        } else {
            console.log (i)
        };
    };
};

clorox(100)
