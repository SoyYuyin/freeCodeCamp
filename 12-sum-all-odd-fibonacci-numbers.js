// 12 Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let fibNums = [1, 1]
  for (let i = 2; i <= num; i++) {
    let next = fibNums[i - 1] + fibNums[i - 2]
    if (next <= num) {
      fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
  }

  let fibOddNums = fibNums.filter((x) => !(x % 2 == 0))
  let sumOdds = fibOddNums.reduce((sum, x) => sum + x, 0)

  return sumOdds
}

sumFibs(4)

// We cannot filter inside the reducer, we should filter first before reducing (adding the numbers)
// this is incorrect:
// let sumOdds = fibNums.reduce((sum,x) => {
//   if(!(x%2 == 0)){
//     sum+x
//   }},0)
// Also, using the ! (not) operaton on a number like 4, would yield false, since 4 is 'thruthy', therefore, we need to add a parenthesis in the filter condition like !(x%2 == 0).
