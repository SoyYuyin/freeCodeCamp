// Roman Numeral Converter
 
// Convert the given number into a roman numeral.
 
// All roman numerals answers should be provided in upper-case.

let convertToRoman = (num) => { 
	let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1] 
	let roman =   ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'] 
	let res = []

	for(let i = 0; i < decimal.length; i++){
		if(Math.floor((num / decimal[i])>=1)){ 
			while(num>=decimal[i]){
				res.push(roman[i])		
				num -= decimal[i]
// 				console.log(res)
// 				console.log(num,'\n')
			}
		}
		
	}
	return res.join('')
}
console.log(convertToRoman(1994))
