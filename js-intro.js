// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
console.log(mantra[0]);
// 2. Write the code that determines if there is a 'x' in mantra.
console.log(mantra.includes('x'));
// 3. Write the code that determines if there is a 'v' in mantra.
console.log(mantra.includes('v'));
// Stretch: Write the code that returns the position of 'v' in mantra.
console.log(mantra.search('v'));

// Consider the following statement:

var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

for(let i = 0; i < mantra.length; i++){
  console.log(mantra[i]);
}

// Stretch: Using a while loop.
var mantra = "Be the dev";

let i = 0
while (i < mantra.length) {
  console.log(mantra[i]);
  i++
}
// Super Stretch: Using forEach().
//forEach() can only be used on an array?

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
function removeVowel(str) {
  let newString = str.split('')
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let arr1 = []
  for(let i = 0; i < newString.length; i++){
    if(!vowels.includes(newString[i])){
      arr1.push(newString[i])
    }
  }
   return finalArr = arr1.join('')
}
console.log(removeVowel(message));
// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

// const cats = toonimals.filter(function(obj) {
//   return obj.animal === 'cat'
// })
// console.log(cats);

catsOnly = (arr) => {
      let cats = arr.filter(function(value){
        if(value.animal === 'cat'){
          return value.name
        }
      })
    return cats
}
console.log(catsOnly(toonimals));
