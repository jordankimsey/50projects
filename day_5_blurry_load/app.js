const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0


//calls blurring function every 30ms
let int = setInterval(blurring, 30)


function blurring() {
    load++;
    if (load > 99) {
        //once load is 100 interval is cleared
        //must have int passed into to clear
        clearInterval(int)
        }
    //this shows what percentage of load we are on in
    //the dom
    loadText.innerText = `${load}%`
//takes load percentage and changes opacity from blur(1) to no Blur(0)
    //in given time
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    //sets blur of 30 and sets to zero when load 0-100
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
//from stack overflow
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

