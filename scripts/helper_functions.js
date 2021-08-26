// Helper functions

// visually selects column in array
function markColumn(column, color) {
    column.style.background = color;
}

// compares two columns using greater-than to prepare for swap
function compareColumns(colOne, colTwo) {
    if (parseInt(colOne.style.height) > parseInt(colTwo.style.height)) {
        return true;
    }
    return false;
}

// column values swapped
function swapColumns (colOne, colTwo) {
    let tempCol = colOne.style.height;
    colOne.style.height = colTwo.style.height;
    colTwo.style.height = tempCol;
}

// HTML id's for disable/enable functions
const ALGORITHMS = [
    "#bubble-sort",
    "#insertion-sort",
    "#selection-sort",
    "#merge-sort",
    "#quick-sort"
]

// function to disable buttons and inputs during sort
function disableUserInput() {
    for (i in ALGORITHMS) {
        document.querySelector(ALGORITHMS[i]).disabled = true;
    }
    document.querySelector("#generate-array").disabled = true;
    document.querySelector("#array-size").disabled = true;
    document.querySelector("#sort-speed").disabled = false;
}

// after sort, function enables buttons for new arrays/sorts
function enableUserInput() {
    for (i in ALGORITHMS) {
        document.querySelector(ALGORITHMS[i]).disabled = false;
    }
    document.querySelector("#generate-array").disabled = false;
    document.querySelector("#array-size").disabled = false;
    document.querySelector("#sort-speed").disabled = true;     
}

// colors for marking function
const COLORS = {
    selector: '#ff0000',
    deselector: '#28559e',
    complete: '#64ffda',
};

// animation function that pauses sorter for visual effect
let pauseTime = 250;
function pauseSorter(ms) {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, ms);
	})
}

// speed toggler calls animation (pause) function to
// determine speed of algorithm
let sortSpeed = document.getElementById("sort-speed");
sortSpeed.addEventListener("input", () => {
    pauseTime = 250 / (parseInt(sortSpeed.value));
})