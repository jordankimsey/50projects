const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        //target in data target attribute 
        // +turns string into a number
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        //speed of incrememt, can be adjusted
        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            //calls function every millisecond until target
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target;
       }
    }
    updateCounter();
})


