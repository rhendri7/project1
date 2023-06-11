//

var randomString = "";

randomString =+ crypto.getRandomValues().toString(25);
//crypto.get returns a random sequence of cryptological values
console.log(randomString);
// generates string of random length between 5 & 25 characters


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInteger(5));
