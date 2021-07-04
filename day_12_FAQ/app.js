const toggles = document.querySelectorAll('.faq-toggle');

//.toggle() version
toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})

//without .toggle() version
// toggles.forEach((toggle) => {
//     toggle.addEventListener('click', () => {
//         if (toggle.parentNode.classList.value === 'faq active') toggle.parentNode.classList.remove('active');
//         else toggle.parentNode.classList.add('active');
//     })
// })






