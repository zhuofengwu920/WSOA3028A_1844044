

const person = document.querySelectorAll('.person');
const personStyler = [];

const field = document.querySelector('.person-field');

var xR = 0;
var yR = 0;



var leftLimit = (field.clientWidth / -2.3);
var rightLimit = (field.clientWidth / 2.3);
var topLimit = 0;
var botLimit = (field.clientHeight * 0.75);

function randomMove(tempStyler) {
    var nxR = (Math.random() * (rightLimit - leftLimit)) + leftLimit;
    var nyR = (Math.random() * (botLimit - topLimit)) + topLimit;

    var time = Math.floor(Math.random() * (2000 - 1000 + 1) ) + 1000;

    popmotion.tween({
        from: { x: xR, y: yR, scale: 1 },
        to: { x: nxR, y: nyR, scale: 1 },
        ease: popmotion.easing.easeInOut,
        duration: time
    }).start({
        update: v => { tempStyler.set(v) },
        complete: () => {
            xR = tempStyler.get('x'),
            yR = tempStyler.get('y'),
            randomMove(tempStyler)
        }
    })
}

function fieldInit()
{
    var counter = 0;
    
    for(let item of person)
    {
        personStyler[counter] = popmotion.styler(item);

        randomMove(personStyler[counter]);
    }
}

document.addEventListener("DOMContentLoaded", () => fieldInit());
