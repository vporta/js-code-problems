// Create a function `multiplyByFive` that multiplys any number by 5. Make sure to return the value.
 
// The function takes a number paramter and returns the value of the number multiplied by 5

function multiplyByFive(num){
  return num * 5;
}

// Create a Function `greeting(name);` that accepts a name and returns a personalized greeting if a name is present
// If there isn't a name just return the greeting.
// ex: greeting("Bob"); returns "Hello, Bob".

function greeting(name){
  if(name){
    return "Hello, " + name + "!";
  } else {
    return "Hello!";
  }
}

// do not worry if you do not understand "typeof name ==="undefined"
// function greeting(name){
//  if(typeof name === "undefined"){
//    return "Hello!";
//  } else {
//    return "Hello, " + name + "!";
//  }
// }


// Create the function `areYouPlayingBanjo` If your name starts with the letter "S" or lower case "s", you are playing Banjo!
 
// The function takes a name argument as its only argument, and returns one of the following strings:
 
// EXAMPLES
// - INPUT: areYouPlayingBanjo("Scott");
// - OUTPUT: "Scott" plays banjo";
 
// - INPUT: areYouPlayingBanjo("Nimit");
// - OUTPUT: "Nimit does not play banjo";

// - INPUT areYouPlayingBanjo();
// - OUTPUT: "Please provide a name to see if they play banjo!";

// function areYouPlayingBanjo(name) {
//     if(name){
//         if(name[0].toLowerCase() === "s"){
//             return name + " plays banjo!";
//         } else {
//             return name + " does not play banjo!";
//         }
//     } else {
//         return "Please provide a name to see if they play banjo!";
//     }
// }

function areYouPlayingBanjo(name) {
    if(name[0].toLowerCase() === "s" ){
            return name + " plays banjo!";
    } else {
        return name + " does not play banjo!";
    }
}



/* Ask Politely */
// find ? mark at end of sentence
// find if please? already exists
// add it if it doesn't
// - numbers take the source length not the index



function askPolitely(sentence){
  // testes the last characer
  if(sentence.slice(-1) === "?"){
    if(sentence.slice(-7) === " please?"){
      return sentence;  
    }else {
      return sentence.slice(0,-1) + " please?"; 
    }
    
  } else {
    return sentence;
  }
}

// *** lastDigit ***
// Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. 
// Note that the % "mod" operator computes remainders, so 17 % 10 is 7. 

// The remainder operator returns the first operand modulo the second operand, that is, var1 modulo var2,
// in the preceding statement, where var1 and var2 are variables.

function lastDigit(firstNum, secondNum){
  if(firstNum % 10 === secondNum % 10){
    return true;
  } else {
    return false;
  }
}

// If we do 23 % 10,
// first, we divide 23 by 10 which equals 2.3
// then take .3 * (the divisor) 10
// = 3

function lastDigit(num1,num2){
    num1 = num1.toString();
    num2 = num2.toString();
    
    
    if(num1[num1.length-1] === num2[num2.length-1]){
        return true;
    } else {
        return false;
    }
}

// **** SLICE ****
// 'hello'.slice('hello'.length-1, 'hello'.length);


// Create the function `maxOfThree` that evaluates three numbers and returns the largest number out of the three.

// The function takes three number arguments and returns the highest number out of the three.

// EXAMPLES

// - INPUT: maxOfThree(5, 4, 10);
// - OUTPUT: 10
// - INPUT: maxOfThree(7, 7, 4);
// - OUTPUT: 7

function maxOfThree(num1, num2, num3){
// enter code here
  if(num1 > num2 && num1 > num3){
    return num1;
  } else if(num2 > num3){
    return num2;
  } else {
    return num3;
  }
}


function askPolitely(sentence){
  // tests last character to last character
  // sentence[sentence.length-1];
  if(sentence.slice(sentence.length - 1) === "?"){
    // check for please?
    if(sentence.slice(sentence.length - 7) === "please?"){
      return sentence;
      } else {
        // everything inbetween 0 and the last character
        return sentence.slice(0,sentence.length-1) + " please?";  
      }
  } else {
    return sentence;
  }
}





function askPolitely(sentence){
  if(sentence.slice(-1) === "?"){
    if(sentence.slice(-7) === "please?"){
      return sentence;
      } else {
        return sentence.slice(0,-1) + " please?"; 
      }
  } else {
    return sentence;
  }
}



// Basic Card Game Solution

function winner(deckSteve, deckJosh) {
  var rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  var steve_score = 0;
  var josh_score  = 0;

  
  for (var card_idx = 0; card_idx < deckSteve.length; card_idx++) {
  
    if (rank.indexOf(deckSteve[card_idx]) > rank.indexOf(deckJosh[card_idx])) {
      steve_score++;
    } else if (rank.indexOf(deckSteve[card_idx]) < rank.indexOf(deckJosh[card_idx])) {
        josh_score++;      
    }
    
  }
  
  if (steve_score > josh_score) {
    var msg = "Steve wins " + steve_score + " to " + josh_score;
  } else if (steve_score < josh_score) {
    var msg = "Josh wins " + josh_score + " to " + steve_score;
  } else {
    var msg = "Tie";
  }
  
  return msg;
}

// MIN

function min(arr, toReturn) {
  // TODO
  var returnValue;
  for(var i = 0; i < arr.length; i++){
      if(arr[i] <= returnValue || typeof returnValue === "undefined"){
        returnValue = arr[i];
      }
  }
  if(toReturn === "value"){
    return returnValue;
  } else {
    return arr.indexOf(returnValue);
  }
}

// *** Palindrome Solution ***
function palindrome(str){
  var reversedStr = "";
  str = str.toLowerCase();
  for(var length = str.length - 1; length >= 0; length--){
    reversedStr += str[length];
  }
  if(reversedStr === str){
    return true;
  }
  return false;
}

// *** Grid Generator Solution ***
 
var gridGenerator = function(size){
  var board = "";
  for(var i = 0; i < size; i++){
    for(var j = 0; j < size; j++){
      if((i+j) % 2 === 0){
  board += "#"; 
      } else {
  board += " ";
      }
    }
  board += "\n";
  } 
  return board;
};

// *** isPrime Solution ***
 
function isPrime(num){
  for(var i=2; i < num; i++){
  if(num%i ==0){
      return false;
  }
  }
  return true;
}

// Rotate
function rotate(arr, steps) {
    while(steps--){
        var item = arr.pop();
        arr.unshift(item);
    }
    return arr;
}

function rotate(arr,steps){
    while(steps > 0){
        var item = arr.pop();
        arr.unshift(item);
        steps--;
    }
    return arr;

}

// Index Of

function indexOf(str, queryStr) {
    for (var i = 0 ; i <= str.length - queryStr.length ;  i++) {
    for(var j = 0; j < queryStr.length; j++) {
      
      if(str[i+j] !== queryStr[j]) {
        break;
      }
      if(j === queryStr.length - 1) {
        return i;
      }
    }
  }
  return -1;

}


var recReverseString = function(str){
  // base case  
  if(str.length-1 === 0){
    return str[str.length-1];
  }

   return str[str.length-1] + recReverseString(str.slice(0, str.length-1));
}


function recFactorial(n){
  if( n === 0){
    return 1;
  }
  return n * recFactorial(n-1);
}

function recCountZeros(array){
  var total = 0;
  if(array.length - 1 === 0 && array[array.length-1] === 0){
    return total++;
  } else if(array.length-1 === 0){
    return total;
  }
  if(array[array.length-1] === 0){
    total++;    
  }

  return total + recCountZeros(array.slice(0,-1));  
}


function recSmallestInt(array){
  if(array.length-1 === 0){
    return array[array.length-1];
  }
  var numToCompare = recSmallestInt(array.slice(0,-1));
  if(array[array.length-1] >= numToCompare){
    return numToCompare;
  };
  return array[array.length-1];
}

function reverseString(word){
  var finalString = "";
  for(var i = word.length -1; i >= 0; i--){
    finalString+= word[i];
  }
  return finalString;
}
 
// *** VOWEL COUNT ***
function vowelCount(str) { 
 
  str = str.toLowerCase();
  var cnt = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') 
       cnt++;
  }
  // code goes here
  return cnt;             
}
 
// *** VOWEL COUNT ***
// Using .indexOf
function vowelCount(str) { 
  str = str.toLowerCase();
  var vowels = "aeiou";
  var cnt = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) 
       cnt++;
  }
  return cnt;             
}
 
 
// *** Factorial (looping, no recursion) ***
function firstFactorial(num){
    var total = 1;
    for(num; num > 0; num--){
        total*=num;
    }
    return total;
}
 
// // *** CHANGE SOLUTION ***
// function change(str){
//     var string = str.toLowerCase();
//     var finalString = "";
//     var alphabet = "abcdefghijklmnopqrstuvwxyz";
 
//     for(var i = 0; i < alphabet.length; i++){
//         if(string.indexOf(alphabet[i]) !== -1){
//             finalString += 1;
//         } else {
//             finalString += 0;
//         }
//     }
    
//     return finalString;
    
// }


/* 
    under_score to camelCase
*/

function underToCamel(underName) {
    var camelCaseOutput = "";
    
    /* Solution 1 */    
    var foundUnder = false;
    for(var i = 0; i<underName.length; i++) {
        // underName[i];
        if (underName[i] === "_") {
            foundUnder = true;
        } else {
            if (foundUnder) {
                camelCaseOutput += underName[i].toUpperCase();
                foundUnder = false;
            } else {
                camelCaseOutput += underName[i];
            }
        }
    }

    /* Solution 2 */    
    // var underWordArray = underName.split("_");
    // camelCaseOutput = underWordArray[0].toLowerCase();
    // for(var j = 1; j < underWordArray.length; j++) {
    //     camelCaseOutput += underWordArray[j][0].toUpperCase();
    //     camelCaseOutput += underWordArray[j].slice(1).toLowerCase();
    // }
    
    return camelCaseOutput;
}


// NOTE: There are a lot of Edge Cases this does not pass, this is a basic solution.
// 3 FULL SPACES ( SPACES Between)
// ***AB CHECK***
function aBCheck(str){
  for(var i =0; i < str.length; i++){
      if(str[i] === "a" || str[i] === "b"){
          if(str[i+4] === "a" || str[i+4] === "b"){
              return true;
          }
      }
  }
  return false;
}




function underToCamel(underName) {
    var camelCaseOutput = "";
    
    /* Solution 1 */    
    var foundUnder = false;
    for(var i = 0; i<underName.length; i++) {
        // underName[i];
        if (underName[i] === "_") {
            foundUnder = true;
        } else {
            if (foundUnder) {
                camelCaseOutput += underName[i].toUpperCase();
                foundUnder = false;
            } else {
                camelCaseOutput += underName[i];
            }
        }
    }

    /* Solution 2 */    
    // var underWordArray = underName.split("_");
    // camelCaseOutput = underWordArray[0].toLowerCase();
    // for(var j = 1; j < underWordArray.length; j++) {
    //     camelCaseOutput += underWordArray[j][0].toUpperCase();
    //     camelCaseOutput += underWordArray[j].slice(1).toLowerCase();
    // }
    
    return camelCaseOutput;
}
// SUM OF DIGITS
function sumOfDigits(num){
  var sum = 0;
  
  while(num > 0){
    sum += num % 10;
    num = Math.floor(num/10);
  }

  return sum;
}