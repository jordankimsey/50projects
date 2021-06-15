// //selects all panels and puts it into a node list
// //where we can specifiy certain panels in that list
// //panels[2] = example on  how you access
// const panels = document.querySelectorAll('.panel');

// //for each is high order array method, this method takes in function and has an argument usually arrow function
// //we pass whatever we want to use in the iteration
// panels.forEach((panel) => {
//     //want to listen for a click on any of the panels in the loop
//     //when click occurs we want to run a function
//     panel.addEventListener('click', () => {
//         removeActiveClasses();
//         //class list gives list of the classes, then we can add methods onto these classes which allow us 
//         //to add classes
//         panel.classList.add('active');
//     })
// })

// function removeActiveClasses() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active');
//     })
// }

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    })
})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}