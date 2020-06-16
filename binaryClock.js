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
        '8': '1000',
        '9': '1001',
    }

    return BINARY[num.toString()]
}
/**
 * Returns the tens digit of a number 'num'
 */
function getDigits(num){
    return {
        tens: Math.floor(num / 10),
        ones: num % 10
    }
}


/**
 * Updates the clock face 
 */
function updateClock(){
    let time, hours, minutes, seconds,
        digits, binaryDigits, 
        entries, entry, 
        tens_leds, tens_led, ones_leds, ones_led
        tens_arr=[], ones_arr=[];

    // Get the current time in hr, min, sec
    time = new Date();

    hours   = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    // get tens and ones digits for hr, min, sec
    digits = {
        hours  : getDigits(hours),
        minutes: getDigits(minutes),
        seconds: getDigits(seconds)
    };


    let keys = Object.keys(digits)
    binaryDigits = {};
    for(let i=0; i<keys.length; i++){
        let key = keys[i];
        let curDigit = digits[key];
        
        // console.log('key', key)
        binaryDigits[key] = {
            tens: toBinary(curDigit.tens),
            ones: toBinary(curDigit.ones),
        }

    }
    entries = Object.entries(binaryDigits)
    for(i=0; i<entries.length; i++){
        key   = entries[i][0];
        value = entries[i][1];

        tens_leds = document.querySelectorAll(`#${key} .tens .led`)
        ones_leds = document.querySelectorAll(`#${key} .ones .led`)
        
        tens_arr = value.tens.split('')
        ones_arr = value.ones.split('')
        
        console.log(tens_arr)
        
        for(let k=tens_leds.length-1; k>=0; k--){
            tens_led = tens_leds[k];
            
            if (tens_led){
                console.log(k, tens_led)

                if(tens_arr[k] == 1){
                    if(!tens_led.classList.contains('led-on')){
                        tens_led.classList.add('led-on')
                    }
                } else {
                    tens_led.classList.remove('led-on')
                }
            }
        }
        // console.log(ones_arr)

        // for(let j=ones_arr.length-1; j>=0; j--){
        //     ones_led = ones_leds[j];
            
        //     if (ones_led){
                // console.log(j, ones_led)

        //         if(ones_arr[j] == 1){
        //             if(!ones_led.classList.contains('led-on')){
        //                 ones_led.classList.add('led-on')
        //             }
        //         } else {
        //             ones_led.classList.remove('led-on')
        //         }
        //     }
        // }
    }

    // console.log(digits.hours, digits.minutes, digits.seconds)
    
}

window.onload = function(){



    // setInterval(updateClock,1000)
    updateClock()

}