/**
 * Returns a 4-digit binary string representation of a number 'num'
 */
function toBinary(num){
    
    const BINARY = {
        '0': '0000',
        '1': '0001',
        '2': '0010',
        '3': '0011',
        '4': '0100',
        '5': '0101',
        '6': '0110',
        '7': '0111',
        '8': '1111',
    }

    return BINARY[num.toString()]
}
/**
 * Returns the tens digit of a number 'num'
 */
function getDigits(num){
    return {
        tens: Math.floor(num / 10),
        ones: num%10
    }
}


/**
 * Updates the clock face 
 */
function updateClock(){
    let time, hours, minutes, seconds,
        digits, binary_digits;
    
    time    = new Date();

    hours   = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    digits   = {
        hours  : getDigits(hours),
        minutes: getDigits(minutes),
        seconds: getDigits(seconds)
    };

    let keys = Object.keys(digits)

    binaryDigits = {};
    for(let i=0; i<keys.length; i++){
        let key = keys[i];
        let curDigit = digits[key];
        
        console.log('key', key)
        binaryDigits[key] = {
            tens: toBinary(curDigit.tens),
            ones: toBinary(curDigit.ones),
        }
        // toBinary(curDigit.tens)
        // binaryDigits.key.ones = toBinary(curDigit.ones) 
    }
    console.log(binaryDigits)

    // console.log(digits.hours, digits.minutes, digits.seconds)
    
}

window.onload = function(){



    // setInterval(updateClock,1000)
    updateClock()

}