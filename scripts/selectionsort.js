const SELECT_COLS = '#ff0000';
const DESELECT_COLS = '#28559e';
const COMPLETE_COLS = '#64ffda';
const INSERTION_COLS = '#ffa500';

async function selectionSort() {
	disableUserInput();

	const column = document.querySelectorAll(".column");
	for (let i = 0; i < column.length - 1; i++) {
		column[i].style.background = SELECT_COLS;
		let min = i;
		for (let j = i + 1; j < column.length; j++) {
			column[j].style.background = SELECT_COLS;
			if (parseInt(column[j].style.height) < parseInt(arr[min].style.height)) {
				min = j;
				column[min].style.background = INSERTION_COLS;
				await pauseSorter(pauseTime);
			}
			else {
				column[j].style.background = SELECT_COLS;
				await pauseSorter(pauseTime);
			}
			for (let k = min + 1; k < column.length; k++) {
				column[k].style.background = COMPLETE_COLS;
			}
			for (let l = i + 1; l < min; l++) {
				column[l].style.background = COMPLETE_COLS;
			}
		}

		swapColumns(column[i], column[min]);
		column[i].style.background = SELECT_COLS;
	}
	for (let k = column.length - 1; k >= 0; k--) {
		column[k].style.background = COMPLETE_COLS;
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}