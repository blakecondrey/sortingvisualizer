// Helper functions

function markColumn(column, color) {
    column.style.background = color;
}

function compareColumns(colOne, colTwo) {
    if (parseInt(colOne.style.height) > parseInt(colTwo.style.height)) {
        return true;
    }
    return false;
}

function swapColumns (colOne, colTwo) {
    let tempCol = colOne.style.height;
    colOne.style.height = colTwo.style.height;
    colTwo.style.height = tempCol;
}

const ALGORITHMS = [
    "#bubble-sort",
    "#insertion-sort",
    "#selection-sort",
    "#merge-sort",
    "#quick-sort"
]

function disableUserInput() {
    for (i in ALGORITHMS) {
        document.querySelector(ALGORITHMS[i]).disabled = true;
    }
    document.querySelector("#generate-array").disabled = true;
    document.querySelector("#array-size").disabled = true;
    document.querySelector("#sort-speed").disabled = false;
}

function enableUserInput() {
    for (i in ALGORITHMS) {
        document.querySelector(ALGORITHMS[i]).disabled = false;
    }
    document.querySelector("#generate-array").disabled = false;
    document.querySelector("#array-size").disabled = false;
    document.querySelector("#sort-speed").disabled = true;     
}

const COLORS = {
    selector: '#ff0000',
    deselector: '#28559e',
    complete: '#64ffda',
    inserter: '#ffa500',
    partitioner: '#53f925'
};

let pauseTime = 250;
function pauseSorter(ms) {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, ms);
	})
}

let sortSpeed = document.getElementById("sort-speed");
sortSpeed.addEventListener("input", () => {
    pauseTime = 250 / (parseInt(sortSpeed.value));
})