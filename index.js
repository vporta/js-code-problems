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