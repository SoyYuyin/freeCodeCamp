// Telephone Number Validator
 
// Return true if the passed string looks like a valid US phone number.
 
// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
 
//     555-555-5555
//     (555)555-5555
//     (555) 555-5555
//     555 555 5555
//     5555555555
//     1 555 555 5555
 
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false

let numberValidator = (num) => {
	let reg1 = /^1?\s?\d{3}(-|\s)\d{3}(-|\s)\d{4}$/g  // 555-555-5555 or 555 555 5555 or 1 555 555 5555
	let reg2 = /^1?\s?\(\d{3,3}\)\s?\d{3,3}-\d{4,4}$/g // (555)555-5555 or (555) 555-5555 
	let reg3 = /^1?\d{10,10}$/g 

	let regs = [reg1,reg2,reg3]
	let flag = false
	for(let reg of regs){
		if(reg.test(num)){
			flag = true	
		}
	}
	return flag
}

console.log(numberValidator("555-555-5555"))
