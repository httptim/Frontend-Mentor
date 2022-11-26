

const ratingContainer = document.getElementById("ratingState");
const rateBtns = document.getElementById("ratingContainer");
const submitBtn = document.getElementById("submitBtn");

const thankContainer = document.getElementById("thankState");
const thankrate = document.getElementById("thankRating");


let ratelist = [
    'rb1',
    'rb2',
    'rb3',
    'rb4',
    'rb5'
];

let chosenRate = "5";

rateBtns.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }

    for (k in ratelist) {
        const rb = document.getElementById(ratelist[k]);
        rb.classList.remove("btnsel");
    }

    chosenRate = event.target.innerText;


    event.target.classList.add("btnsel");
});

submitBtn.addEventListener("click", () => {
    thankrate.innerText = chosenRate;
    ratingContainer.style.display = "none";
    thankContainer.style.display = "flex";
});