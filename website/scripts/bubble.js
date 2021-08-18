async function bubbleSort() {
	disableUserInput();
	
	const column = document.querySelectorAll(".column");
	for (let i = 0; i < column.length - 1; i++) {
		for (let j = 0; j < column.length - i - 1; j++) {
			if (parseInt(column[j].style.height) > parseInt(column[j + 1].style.height)) {
				column[j].style.background = SELECT_COLS;
				column[j + 1].style.background = SELECT_COLS;
				swapColumns(column[j], column[j + 1]);
				await pauseSorter(2 * pauseTime);
				column[j].style.background = DESELECT_COLS;
				column[j + 1].style.background = DESELECT_COLS;
				await pauseSorter(pauseTime);
			}
			else {
				column[j].style.background = DESELECT_COLS;
				column[j + 1].style.background = DESELECT_COLS;
				await pauseSorter(pauseTime);
			}
			for (let k = j; k >= 0; k--) {
				column[k].style.background = COMPLETE_COLS;
			}
		}
	}

	for (let k = column.length - 1; k >= 0; k--) {
		column[k].style.background = COMPLETE_COLS;
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}