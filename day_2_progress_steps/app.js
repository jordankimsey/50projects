const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
//brings all the circles into node array we can access
const circles = document.querySelectorAll('.circle');

let currentActive = 1

next.addEventListener('click', () => {
    //pluses one when next button clicked
    currentActive++;

    //keeps function in bounds of how many circles
    //circles is node list and has length property
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
    
})

prev.addEventListener('click', () => {
    //decerments one when next button clicked
    currentActive--;

   //this will make sure prev cannot go below 1
    if (currentActive < 1) {
        currentActive = 1;
    }
    
    update();
})



//updates dom when button clicked 
//called inside event listenrs on button
function update() {
    //takes circles node list and can loop through
    //for each takes in function
    //for each syntx forEach((element, index, array) => {...} )
    //we can name params whatever we want order what matters
    circles.forEach((circle, idx) => {
        //for each circle going to check if index is 
        //less than current active
        if (idx < currentActive) {
            //adds active class onto circle
            circle.classList.add('active');
        } else {
            //if not smaller than currentActive remove active class
            circle.classList.remove('active');
        }
    })

    //gets all the active classes
    const actives = document.querySelectorAll('.active');

    //this is percentage width that progress bar moves when clicked but we must
    //subtract one from length to get correct length otherwise bar overshoots
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    //wanna check current active 
    if (currentActive === 1) {
        //initally set to true 
        //this disables prev button when at 1
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        //if we are at the end of the list next is disable
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
