var readLine = require('readline');
var RL = readLine.createInterface(process.stdin, process.stdout);

function resort(name, location, callback){
    console.log("Hey!");
    callback(name, location);
}

function rooms(callback){
    console.log("The available rooms are:");
    callback(["Single room", "Double room", "Suite", "Dorm room"]);
}

function message(num,callback){
    console.log("\nMessage:");
    callback(num);
} 

const practice = resort("Markson Resort", "Kalpa", (name, location) =>{
    console.log("Heartiest welcome to the " + name + ", " + location + "\n");
    rooms((arr) => {
        arr.forEach(roomType => {
            console.log(roomType);
        });
        
        message("9",(contact)=>{
            console.log("Call at " + contact + " for anything. Enjoy your stay");
        })

    });
});