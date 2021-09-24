function resort(name, location){
    return new Promise((resolve, reject) => {
        var x = 1;
        if(x == 0){
            reject("There is some error");
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
            reject("There is some error");
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
            reject("There is some error");
        }
        else{
            resolve();
            console.log("For assistance dial: " + contact + " and enjoy your stay");
        }
    })
}


resort("Markson resort", "Kalpa")
    .then(() => {
        rooms()
            .then(() => {
                message(9)
                    .then()
                    .catch((err) => {
                        console.log("Failure at the message function level");
                    })
            }).catch((err) => {
                console.log("Failure at the room function level");
            })
    }).catch((err) => {
        console.log("Failure at the resort function level");
    });
