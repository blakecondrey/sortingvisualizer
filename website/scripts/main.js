let speedValue = Number(document.querySelector("#sort-speed").value);
let algorithm = new SortingAlgorithm(speedValue);
let newArray = [];
let arrayElement = document.getElementById("array-size");
document.querySelector("#sort-speed").disabled = true;

generateRandomArray();

function generateRandomArray() {
    newArray.length = 0;
    const column = document.querySelector("#columns");
    let arraySize = arrayElement.value;
    column.innerHTML = '';
    for (let i = 0; i < arraySize; i++) {
        newArray.push(getRandomInteger(5, 700));
    }
    const columns = document.querySelector("#columns");
    for (let i = 0; i < arraySize; i++) {
        const column = document.createElement("div");
        column.style.height = `${newArray[i] / 1.5}px`;
        column.classList.add('column');
        column.classList.add('generated-column');
        column.classList.add(`column${i}`);
        columns.appendChild(column);
    }
}

function getRandomInteger() {
    // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const algorithms = [
    "#bubble-sort",
    "#insertion-sort",
    "#selection-sort",
    "#merge-sort",
    "#quick-sort"
]

function enableUserInput() {
    for (i in algorithms) {
        document.querySelector(algorithms[i]).disabled = false;
    }
    document.querySelector("#generate-array").disabled = false;
    document.querySelector("#array-size").disabled = false;
    document.querySelector("#sort-speed").disabled = false;        
}

function disableUserInput() {
    for (i in algorithms) {
        document.querySelector(algorithms[i]).disabled = true;
    }
    document.querySelector("#generate-array").disabled = true;
    document.querySelector("#array-size").disabled = true;
    document.querySelector("#sort-speed").disabled = true;
}

let sortSpeed = document.getElementById("sort-speed");
sortSpeed.addEventListener("input", () => {
    waitTime = 250 / (parseInt(sortSpeed.value));
})

arrayElement.addEventListener("input", generateRandomArray);