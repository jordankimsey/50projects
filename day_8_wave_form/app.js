const labels = document.querySelectorAll(".form-control label");

//labels is node list so we use for each
labels.forEach((label) => {
  //this splits all the letters in the label and puts them into
  //an empty array
  label.innerHTML = label.innerText
    //takes inner text and splits them into empty array
    .split("")
    //manipuliate array to turn it into array of something else
    //around each letter in array we want to add a span with that
    //letter in it
    //inline style takes index and multipes it to get wave transition
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 40}ms">${letter}</span>`
    )
    //turns it from array to string
    .join("");
});
