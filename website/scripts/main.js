// create empty array to be implemented in startup
let newArray = [];
// sizing variable for user to choose size of array
let arrayElement = document.getElementById("array-size");
document.querySelector("#sort-speed").disabled = true;

// page generates random array of size of value
// of input set in HTML for startup
generateRandomArray();

arrayElement.addEventListener("input", generateRandomArray);

function generateRandomArray() {
	newArray.length = 0;
	// HTML selects columns by ID
	const column = document.querySelector("#columns");
	let arraySize = arrayElement.value;
	column.innerHTML = '';
	for (let i = 0; i < arraySize; i++) {
		newArray.push(randomIntFromInterval(5, 700));
	}
	const columns = document.querySelector("#columns");
	// create columns to be generated
	for (let i = 0; i < arraySize; i++) {
		const column = document.createElement("div");
        column.style.height = `${newArray[i] / 1.5}px`;
        column.classList.add('column');
        column.classList.add('generated-column');
        column.classList.add(`columnNo${i + 1}`);
        columns.appendChild(column);
	}
}

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


