const SELECT_COLS = '#ff0000';
const DESELECT_COLS = '#28559e';
const COMPLETE_COLS = '#64ffda';
const INSERTION_COLS = '#ffa500';

async function merge(column, start, middle, end) {
	const valueFront = middle - start + 1;
	const valueStart = end - middle;

	let left = [];
	let right = [];

	for (let i = 0; i < valueFront; i++) {
		column[start + i].style.background = SELECT_COLS;
		left[i] = column[start + i].style.height;
		await pauseSorter(pauseTime);
	}

	for (let i = 0; i < valueStart; i++) {
		column[middle + 1 + i].style.background = SELECT_COLS;
		right[i] = column[middle + 1 + i].style.height;
		await pauseSorter(pauseTime);
	}

	let i = 0, j = 0, k = start;

	while( i < valueFront && j < valueStart) {
		if (parseInt(left[i]) <= parseInt(right[j])) {
			column[k].style.background = DESELECT_COLS;
			column[k].style.height = left[i];
			i++;
			k++;
		}

		else {
			column[k].style.background = DESELECT_COLS;
			column[k].style.height = right[j];
			j++;
			k++;
		}
		await pauseSorter(pauseTime);
	}
	while (i < valueFront) {
		column[k].style.background = DESELECT_COLS;
		column[k].style.height = left[i];
		i++;
		k++;
		await pauseSorter(pauseTime);
	}

	while (j < valueStart) {
		column[k].style.background = DESELECT_COLS;
		column[k].style.height = right[j];
		j++;
		k++;
		await pauseSorter(pauseTime);
	}
}


async function mergeHelper(column, left, right) {
	if (left >= right) {
		return;
	}
	const mid = left + Math.floor((right - left) / 2);
	await mergeHelper(column, left, mid);
	await mergeHelper(column, mid + 1, right);
	await merge(column, left, mid, right);
}

async function mergeSort() {
	disableUserInput();
	left column = document.querySelectorAll(".column");
	await mergeHelper(column, 0, parseInt(column.length) - 1);
	for (let k = column.length - 1; k >= 0; k--) {
		column[k].style.background = COMPLETE_COLS;
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}



