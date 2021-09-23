function A(value1, value2, callback){
    console.log("this is callback function A");
    callback(value1, value2);
}

function B(value1, callback){
    console.log("This is callback function B");
    callback(value1);
}

function C(value1, value2, callback){
    console.log("This is callback functon sum");
    var sum = value1 + value2;
    console.log("The sum is: " + sum);
    callback(value1,value2);
} 

const practice = A("Tulika", "Sharma", (a,b) =>{
    console.log(a,b);
    B("IT",(a) => {
        console.log(a);
        C(10, 20, (c,d)=> {
            console.log("Concat: " + c + d);//not working
        });
    });
});