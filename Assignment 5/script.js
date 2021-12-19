/* Part 2 */
console.log('PART 2')
/*Creates a for loop where i is printed (i runs from 1 to 20) */
for(var i=1; i<21; i++) {
    console.log(i)
}

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/*Creates a for loop that goes through the array numbers */
for(let n=0; n<numbers.length;n++) { 
    /*For loop that replaces numbers divisible by 3 with 'eple' */
    if(numbers[n]%3 === 0) {
        numbers[n] = "eple"
    }
    /*For loop that replaces numbers divisible by 5 with 'kake' */
    if(numbers[n]%5 === 0) {
        numbers[n] = "kake"
    }
    /*Prints the numbers */
    console.log(numbers[n])

}

/* Part 4 */
/*Accesses the id 'title' from the html-file */
const title = document.getElementById('title');
/*The string implemented for the title */
title.innerText='Hello, JavaScript';

/* Part 5 */

/* Declares the constant oneButton*/
let oneButton = document.getElementById('magic');

function changeDisplay () {
    /*Changes the display to none */
    oneButton.style.display = "none";
}

function changeVisibility () {
    /*Changes the visibility to hidden */
    oneButton.style.visibility = "hidden";
    /*Changes the display to block */
    oneButton.style.display = "block";
}

function reset () {
    /*Changes the visibility to visible */
    oneButton.style.visibility = "visible";
    /*Changes the display to block */
    oneButton.style.display = "block";

}

/*Declares a variable for the display button*/
let displayButton = document.getElementById('display');
/*Creates the event for click. Calls for the function changeDisplay() */
displayButton.addEventListener('click', (event) => {
    changeDisplay()
})

/*Declares a variable for the visibility button*/
let visibilityButton = document.getElementById('visibility');
/*Creates the event for click. Calls for the function changeVisibility() */
visibilityButton.addEventListener('click', (Event) => {
    changeVisibility()
})

/*Declares a variable for the reset button*/
let resetButton = document.getElementById('reset');
/*Creates the event for click. Calls for the function reset() */
resetButton.addEventListener('click', (Event) => {
    reset()
})

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

/*Declares a constant for picking up the ul-element*/
const techList = document.getElementById('tech');
/*Creates a loop for adding the elements in the list*/
for (let i=0; i < technologies.length; i++) {
    /*Declares a constant for creating an li-element*/
    const techItem = document.createElement('li');
    techItem.innerText = technologies[i];
    /*Adding the i-th element in the list to the website */
    techList.appendChild(techItem);
}

