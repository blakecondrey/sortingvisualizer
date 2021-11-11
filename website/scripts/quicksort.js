/*
* Quick Sort algorithm "divides and conquers", similar to the Merge Sort.
* An element is selected as the pivot and partitions a given array
* around the pivot. In the implementation below, the pivot is selected
* as the furthermost (or last) element and orders the pivot element
* of the array in the correct position of sorted array while 
* selecting elements smaller than pivot's element to the left of pivot
* and elements greater than pivot to the right.
*/
async function partition(column, left, right) {
	// places pivot equal to last element
	let pivot = right;
	// index smaller element = right position of pivot
	let i = left - 1;
	markColumn(column[pivot], COLORS.selector);

	for (let j = left; j <= right - 1; j++) {
		markColumn(column[j], COLORS.selector);
		await pauseSorter(pauseTime / 10);
		// if pivot is greater than current element
		if (compareColumns(column[pivot], column[j])) {
			// increment index of smaller element
			i++;
			markColumn(column[i], COLORS.complete);
			markColumn(column[j], COLORS.complete);
			await pauseSorter(pauseTime / 10);
			swapColumns(column[i], column[j]);
			markColumn(column[i], COLORS.deselector);
			markColumn(column[j], COLORS.deselector);
			await pauseSorter(pauseTime / 10);
		}
	}
	// swap columns in array
	swapColumns(column[i + 1], column[right]);

	await pauseSorter(pauseTime / 10);
	// 38 - 44 are for visual purpose
	for(let k = 0; k <= pivot; k++) {
		markColumn(column[k], COLORS.deselector);
	}

	for (let k = pivot + 1; k < column.length; k++) {
		markColumn(column[k], COLORS.deselector);
	}

	return i + 1;
}

/*
* recursive function implemented in main quickSort()
* column param is array to be sorted,
* left param is the starting index,
* right param is the end index.
*/
async function quickSortHelper(column, left, right) {
	if (left < right) {
		// set index of partitioner.
		let partitionIndex = await partition(column, left, right);
		// recursive function to sort elements before and after partition
		await quickSortHelper(column, left, partitionIndex - 1);
		await quickSortHelper(column, partitionIndex + 1, right);
	}
}

// driver quickSort() function
async function quickSort() {
	disableUserInput();
	let column = document.querySelectorAll(".column");
	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete);
		await pauseSorter(100 / newArray.length);
	}
	await quickSortHelper(column, 0, parseInt(column.length) - 1);
	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete);
		await pauseSorter(100 / newArray.length);
	}
	enableUserInput();
}