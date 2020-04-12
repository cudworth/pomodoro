const body = document.querySelector('body')
const clock = document.createElement('div')
clock.id = 'clock'
body.appendChild(clock)

const status_display = document.createElement('div')
status_display.id = 'status_display'
const clock_display = document.createElement('div')
clock_display.id = 'clock_display'
const keypad = document.createElement('div')
keypad.id = 'keypad'
const start_button = document.createElement('button')
const reset_button = document.createElement('button')
keypad.appendChild(start_button)
keypad.appendChild(reset_button)

appendDivs(clock, [status_display, clock_display, keypad])

start_button.textContent = 'Start'
reset_button.textContent = 'Reset'

let start = Date.now() / 1000;
let duration;
let myvar;
let status = 'pomodoro'

set_status(status_display, 'Pomodoro')
set_MM_SS(clock_display, 25 * 60)

function appendDivs(parent, divs){
    divs.forEach(element => {
        parent.appendChild(element)
    });
}

function set_MM_SS(element, time) {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    element.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
}

function set_status(display, status){
    display.textContent = status
}

function countdown(){
    const elapsed = Date.now() / 1000 - start;

    if (elapsed < duration){
        set_MM_SS(clock_display, duration - elapsed);
    } else {
        clearInterval(myvar)

        if (status == 'pomodoro'){
            start_break()
        } else {
            start_pomodoro()
        }

    }
}

start_button.addEventListener('click', function(e) {start_pomodoro()})

reset_button.addEventListener('click', function(e) {reset()})

function start_pomodoro(){
    start = Date.now() / 1000;
    duration = 25 * 60;
    status = 'pomodoro'
    set_status(status_display, 'Pomodoro')
    myvar = setInterval(countdown, 500);
}

function start_break(){
    start = Date.now() / 1000;
    duration = 5 * 60;
    status = 'break'
    set_status(status_display, 'Breaktime')
    myvar = setInterval(countdown, 500);
}

function reset(){
    clearInterval(myvar)
    set_status(status_display, 'Pomodoro')
    set_MM_SS(clock_display, 25 * 60)
}
