// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  function binaryToNum(binary){
    let val = 128
    let num = 0
    for(let digit of binary){
      if(Number(digit)){
        num += val
        val/=2
      }else{
        val /=2
      }
    }
    return  num
  }

  let unicode = str.split(' ').map(x=>binaryToNum(x))
  return unicode.map(num=>String.fromCharCode(num)).join('')
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// We could transform from binary string to Integer using parseInt(binaryString, 2);
