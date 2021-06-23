//puts in node list of all elements
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
    //want to figure out when to trigger content to come 
    //in based on height of window
    //makes it a little less than height of viewport
    const triggerBottom = window.innerHeight / 5 * 4
    //node list where we loop through
    boxes.forEach(box => {
        //returns DOMRect(RECTANGLE) object returns description of size and position of rectangle
        //returns info about size of element and its position relative to the viewport (where in viewport is it)
        //we want top of box info
        const boxTop = box.getBoundingClientRect().top
        // we want to see if box top is less than trigger bottom and add show class or remove it depending
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
    


