
// Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
 
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
 
// rot13("SERR CVMMN!") should decode to FREE PIZZA!
 
// rot13("SERR YBIR?") should decode to FREE LOVE?
 
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.


let rot13 = (str)=>{
	// console.log('Input string is:',str)
	let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']	
	let res = ''	

	for(let i=0; i<str.length; i++){
		if(alphabet.indexOf(str[i]) === -1){ // If character not in alphabet, add it directly to string
			res += str[i]
		}else{ // If character in alphabet, shift it.
			if((alphabet.indexOf(str[i])-13)<0){ // Check if letter will be in range of array after shifting by -13, if not, add alphabet length before querying alphabet array.
				res += alphabet[alphabet.indexOf(str[i])-13+alphabet.length]
			}else{ // if character will be within range of array after shifting by -13, add it to result string.
				res += alphabet[alphabet.indexOf(str[i])-13]
			}
		}
	}
	return res
}
console.log(rot13('SERR PBQR PNZC!'))
