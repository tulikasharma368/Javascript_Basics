function resort(name, location){
    return new Promise((resolve, reject) => {
        var x = 1;
        if(x == 0){
            reject("There is some error at resort function level");
        }
        else{
            resolve();
            console.log("Welcome to " + name + ", " + location);
        }
    })
}

function rooms(){
    return new Promise((resolve, reject) => {
        var x = 1;
        if(x == 0){
            reject("There is some error at room function level");
        }
        else{
            resolve();
            arr = ["Single room", "Double room", "Suite", "Dorm room"];
            console.log("The available rooms are: " + arr);
        }
    })
}

function message(contact){
    return new Promise((resolve, reject) => {
        var x = 1;
        if(x == 0){
            reject("There is some error at message function level");
        }
        else{
            resolve();
            console.log("For assistance dial: " + contact + " and enjoy your stay");
        }
    })
}


async function asyncAwait() {
    try {
        await resort("Markson resort", "Kalpa");     
        await rooms();
        await message(9);
    } catch (error) {
        console.log(error);
    }
   
   //console.log("smthng");
}

asyncAwait();