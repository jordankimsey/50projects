const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('textarea');

//automatically puts cursor into text area
textArea.focus();

//listens for when the key is released 
textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    //check to see if enter is pressed
    if (event.key === 'Enter') {
        setTimeout(() => {
            //clears input value after 10ms
          event.target.value = '' 
       }, 10)

        randomSelect();
    }
})


function createTags(input) {
    //create array by spliting at the coma of value typed
    //.filter() allows you to return certain things based on conditional
    //.trim() removes white space if not an empty string
    //.map() manipulates array returns array with tag with white space removed
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    
    //clears tag element
    tagsEl.innerHTML = '';

    //loop 
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

//random select feature
function randomSelect() {
    //number of times value will be highlighted before it stops
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        //highlights the selected random tag that was chosen
        highlightTag(randomTag);

        //removes highlighted tag
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)

    }, 100);

    //stops random highlight 
    setTimeout(() => {
        clearInterval(interval);

        //chooses random tag to stop on
        setTimeout(() => {
            const randomTag = pickRandomTag();
            //highlights random tag that was chosen
            highlightTag(randomTag);

        }, 100)

    }, times * 100)
}

//randomly selects choice 
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    //returns node list then we pick random node in list
    return tags[Math.floor(Math.random() * tags.length)];
}

//highlights choices 
function highlightTag(tag) {
    tag.classList.add('highlight');
}

//unhighlights choices 
function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}


