function promises(value1, value2){
    return new Promise((resolve, reject) => {
        console.log("This is a promise function A")
        var x = 1;
        if(x == 0){
            reject("There is some error");
        }
        else{
            //console.log("inside resolve")
            resolve("Smooooth");
            //console.log("inside resolve")
        }
    })
}

async function asyncAwait() {
    try {
        const smthng =  await promises("something", "something else");     
        console.log(smthng);
    } catch (error) {
        console.log(error);
    }
   
   //console.log("smthng");
}

asyncAwait();