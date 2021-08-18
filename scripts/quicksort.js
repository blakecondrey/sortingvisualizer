async function partition(column, left, right) {
	let pivot = right;
	let i = left - 1;
	markColumn(column[pivot], COLORS.selector);

	for (let j = left; j <= right - 1; j++) {
		markColumn(column[j], COLORS.partitioner);
		await pauseSorter(pauseTime);
		if (compareColumns(column[pivot], column[j])) {
			i++;
			markColumn(column[i], COLORS.inserter);
			markColumn(column[j], COLORS.inserter);
			await pauseSorter(pauseTime);
			swapColumns(column[i], column[j]);
			markColumn(column[i], COLORS.deselector);
			markColumn(column[j], COLORS.deselector);
			await pauseSorter(pauseTime);
		}
	}
	swapColumns(column[++i], column[right]);

	await pauseSorter(pauseTime);

	for(let k = 0; k <= pivot; k++) {
		markColumn(column[k], COLORS.complete);
	}

	for (let k = pivot + 1; k < column.length; k++) {
		markColumn(column[k], COLORS.complete);
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
		markColumn(column[k], COLORS.complete);
	}
	await quickSortHelper(column, 0, parseInt(column.length) - 1);
	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete);
	}
	enableUserInput();
}