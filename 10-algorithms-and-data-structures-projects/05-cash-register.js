
// Cash Register

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
	let changeAmmount = cash - price
	let coins = [{name:'ONE HUNDRED', val:100},{name:'TWENTY', val:20},{name:'TEN', val:10},{name:'FIVE', val:5},{name:'ONE', val:1},{name:'QUARTER', val:0.25},{name:'DIME', val:0.10},{name:'NICKEL', val:0.05},{name:'PENNY',val:0.01}]	

	let output = {status:'',change:[]}
	let drawer = {total:0}	

	for(let i=0; i<cid.length; i++){
		drawer[cid[i][0]] = cid[i][1]	
		drawer['total'] += cid[i][1]
	}

	if(drawer.total<changeAmmount){
		output.status= 'INSUFFICIENT_FUNDS' 
		return output	
	}else if(drawer.total === changeAmmount){
		output.change = cid
		output.status = 'CLOSED'
		return output
	}else{
		output.status = 'OPEN'
		for(let i=0; i<coins.length; i++){
			let coinName= coins[i]['name']
			let coinAmmount = coins[i]['val']
			let val = 0	

			while(drawer[coinName]>0 && changeAmmount-coinAmmount >= 0){
				val += coinAmmount	
				drawer[coinName] -= coinAmmount
				changeAmmount -= coinAmmount
				changeAmmount = Math.round(changeAmmount*100)/100
			}
	
			if(val>0){
				output.change.push([coinName, val])
			}
		}

		if(changeAmmount > 0){
			output = {status:'INSUFFICIENT_FUNDS',change:[]}
		}
	}


	return output;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) 

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) 
