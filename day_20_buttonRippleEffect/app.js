const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        //shows position on page that user clicks
        const x = e.clientX;
        const y = e.clientY;

        //shows position of where button is located on page
        //e.target is element that is fired off on (the button in our case)
        //property offsetTop, bottom left right property on e.target
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        //takes position of where user clicks and the position of the button and subtracts it
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
        //this preteands to this element
        this.appendChild(circle);

       //want to remove styles after a certain timne
        setTimeout(() => circle.remove(), 500)
    })
})

