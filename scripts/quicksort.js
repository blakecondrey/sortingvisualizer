async function partition(column, left, right) {
	let pivot = right;
	let i = left - 1;
	column[pivot].style.background = SELECT_COLS;

	for (let j = left; j <= right - 1; j++) {
		column[j].style.background = PARTITION_COLS;
		await pauseSorter(pauseTime);
		if (parseInt(column[j].style.height) < parseInt(column[pivot].style.height)) {
			i++;
			column[i].style.background = INSERTION_COLS;
			column[j].style.background = INSERTION_COLS;
			await pauseSorter(pauseTime);
			swapColumns(column[i], column[j]);
			column[i].style.background = DESELECT_COLS;
			column[j].style.background = DESELECT_COLS;
			await pauseSorter(pauseTime);
		}
	}
	swapColumns(column[++i], column[right]);

	await pauseSorter(pauseTime);

	for(let k = 0; k <= pivot; k++) {
		column[k].style.background = COMPLETE_COLS;
	}

	for (let k = pivot + 1; k < column.length; k++) {
		column[k].style.background = COMPLETE_COLS;
	}

	return i;
}

async function quickSortHelper(column, left, right) {
	if (left < right) {
		let pivotIndex = await partition(column, left, right);
		await quickSortHelper(column, left, pivotIndex - 1);
		await quickSortHelper(column, pivotIndex + 1, right);
	}
}

async function quickSort() {
	disableUserInput();
	let column = document.querySelectorAll(".column");
	for (let k = column.length - 1; k >= 0; k--) {
		column[k].style.background = COMPLETE_COLS;
	}
	await quickSortHelper(column, 0, parseInt(column.length) - 1);
	for (let k = column.length - 1; k >= 0; k--) {
		column[k].style.background = COMPLETE_COLS;
	}
	enableUserInput();
}