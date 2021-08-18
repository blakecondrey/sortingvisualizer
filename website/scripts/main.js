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
		newArray.push(randomIntFromInterval(5, 700));
	}
	const columns = document.querySelector("#columns");

	for (let i = 0; i < arraySize; i++) {
		const column = document.createElement("div");
        column.style.height = `${newArray[i] / 1.5}px`;
        column.classList.add('column');
        column.classList.add('generated-column');
        column.classList.add(`columnNo${i}`);
        columns.appendChild(column);
	}
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

arrayElement.addEventListener("input", generateRandomArray);
