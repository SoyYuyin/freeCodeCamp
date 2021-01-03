// Intermediate Algorithm Scripting: Arguments Optional
 
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.


function addTogether(a,...rest) {
  if(typeof(a) === 'string' || typeof(a) ==='object'){
    return undefined
  }

  if(!rest.length){ // If rest is empty, return a function 
    return nextNum => { // The function returns undefined if nextNum is an array(object), otherwise, returns the function adding nextNum and a
      if(typeof(nextNum) ==='object'){
        return undefined
      }else{
        return a+nextNum
      }
    }
  }else{ // If rest not a empty and it is not a string we assume it's a number, so we return sum of the 2 arguments
    if(typeof(rest[0]) === 'string'){ // ||typeof(rest[0]) === 'object' (didn't need this)
      return undefined
    }
    return a+rest[0]
  }

}

console.log(addTogether(2,3))
