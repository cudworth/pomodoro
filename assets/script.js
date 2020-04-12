const body = document.querySelector('body')
const clock = document.createElement('div')
body.appendChild(clock)

const status_display = document.createElement('div')
const clock_display = document.createElement('div')
const keypad = document.createElement('div')
const start_button = document.createElement('button')
const reset_button = document.createElement('button')
keypad.appendChild(start_button)
keypad.appendChild(reset_button)

appendDivs(clock, [status_display, clock_display, keypad])

start_button.textContent = 'Start'
reset_button.textContent = 'Reset'

set_MM_SS(clock_display, 0)


//TODO START BUTTON
//TODO RESET BUTTON
//TODO CLOCK DISPLAY
//TODO STATUS DISPLAY
//TODO countdown logic


set_status(status_display, status)
let start = Date.now() / 1000;
let duration = 4;
let myvar = setInterval(countdown, 500);

function appendDivs(parent, divs){
    divs.forEach(element => {
        parent.appendChild(element)
    });
}

function set_MM_SS(display, time) {
    const minutes = time % 60
    const seconds = (time - (minutes * 60)) % 1
    display.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
}

function set_status(display, status){
    display.textContent = status
}

function countdown(){
    const elapsed = Date.now() / 1000 - start;
    if (elapsed < duration){
        set_MM_SS(clock_display, elapsed);
    } else{
        clearInterval(myvar)
        console.log('fin')
    }
}

function reset_timer(){

}