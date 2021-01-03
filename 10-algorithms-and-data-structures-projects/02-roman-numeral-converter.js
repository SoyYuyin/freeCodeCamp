// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
 
// Convert the given number into a roman numeral.
 
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let roman = []

    let addRomanLetter = (letter,times)=>{
        for(let i=0; i<times;i++){
            roman.push(letter)
        }
    }

    let m = Math.floor(num/1000)
    console.log('m',m)
    if(m){
        addRomanLetter('M',m)
        num -= m*1000
    }

    let d = Math.floor(num/500)
    if(num<900){
        addRomanLetter('D',d)
        num -= d*500
    }else{
        roman.push('CM')
        num -= 900
    }

    let c = Math.floor(num/100)
    if(num<400){
        addRomanLetter('C',c)
        num-=c*100
    }else{
        roman.push('CD')
        num -= 400
    }

    let l = Math.floor(num/50)
    if(num<90){
        addRomanLetter('L',l)
        num-=l*50
    }else{
        roman.push('XC')
        num -= 90
    }

    let x = Math.floor(num/10)
    if(num<40){
        addRomanLetter('X',x)
        num-=x*10
    }else{
        roman.push('XL')
        num -= 40
    }

    let v = Math.floor(num/5)
    if(num<9){
        addRomanLetter('V',v)
        num-=v*5
    }else{
        roman.push('IX')
        num -= 9
    }

    let i = Math.floor(num/1)
    if(num<4){
        addRomanLetter('I',i)
        num-=i*1
    }else{
        roman.push('IV')
        num -= 4
    }

    console.log('roman:',roman.join(''),'\n','num left:',num,'\n')
    return roman.join('')
}

convertToRoman(36);
