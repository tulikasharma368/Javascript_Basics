function promises(value1, value2){
    return new Promise((resolve, reject) => {
        console.log("This is a promise function A")
        var x = 0;
        if(x == 0){
            resolve();
        }
        else{
            reject();
        }
    })
}

promises("Tulika", "Sharma")
    .then(() => {
        console.log("succesful");
    }).catch((err) => {
        console.log("Failure");
    });
