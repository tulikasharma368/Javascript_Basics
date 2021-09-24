const person = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + " from " + city + ", " + country;
    }
}

const person1 = {
    firstName: "Elon",
    lastName: "Musk"
}

const person2 = {
    firstName: "Jeff",
    lastName: "Bezos"
}

const callVal = person.fullName.call(person1, "Mumbai", "India");
const callVal1 = person.fullName.call(person2, "New York", "USA");
console.log(callVal);
console.log(callVal1);

const applyVal = person.fullName.apply(person1, ["Mumbai", "India"]);
const applyVal1 = person.fullName.apply(person2, ["New York", "USA"]);
console.log(applyVal);
console.log(applyVal1);