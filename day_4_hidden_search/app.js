const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    //adds and removes class name
    search.classList.toggle('active');
    //puts cursor in search bar
    input.focus();
})