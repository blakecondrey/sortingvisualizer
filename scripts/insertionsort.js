const SELECT_COLS = '#ff0000';
const DESELECT_COLS = '#28559e';
const COMPLETE_COLS = '#64ffda';
const INSERTION_COLS = '#ffa500';

async function insertionSort() {
	disableUserInput();

	const column = document.querySelectorAll(".column");
	for (let i = 1; i < column.length; i++) {
		let key = column[i].style.height;
		let j = i - 1;
		column[i].style.background = INSERTION_COLS;
		await pauseSorter(pauseTime);
		while (j >= 0 && (parseInt(column[j].style.height) > parseInt(key))) {
			column[j + 1].style.height = column[j].style.height;
			column[j].style.background = SELECT_COLS;
			j--;
			await pauseSorter(pauseTime);
			for (let k = i; k >=0; k--) {
				column[k].style.background = DESELECT_COLS;
			}
		}
		column[j + 1].style.height = key;
	}
	for (let k = column.length - 1; k >= 0; k--) {
		column[k].style.background = COMPLETE_COLS;
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}