const name="biswanath"
const repoCount=50

// console.log(name + repoCount + " Value"); This line is very old syntax so no recommend for use ,

//console.log('Hello my name is ${name} and my repo Count is ${repoCount}');  this syntax is modern syntax

const gameName = new String('Biswanath');
console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringOne = "     biswnath    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https//biswanath.com/biswanath%20bhuyan"
console.log(url.replace('%20','-'));
console.log(url.includes('biswanath'));