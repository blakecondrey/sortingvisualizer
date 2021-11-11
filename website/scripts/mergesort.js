/*
* Merge Sort is an algorithm that "divides and conquers", by splitting the
* array into two halves, then calls itself for the two halves and
* finshes by merging the two halves.
* merge(column, start, middle, end) assumes that col[start...middle]
* col[middle + 1, end] are sorted, completes merger of the sub-arrays
* SEE https://en.wikipedia.org/wiki/File:Merge_sort_algorithm_diagram.svg for 
* a visual diagram.
*/
async function merge(column, start, middle, end) {
	const firstAuxillaryArrayValue = middle - start + 1;
	const secondAuxillaryArrayValue = end - middle;

	// temporary arrays
	let left = [];
	let right = [];

	// // copy data to temporary arrays of left and right (lines 17-27)

	for (let i = 0, j = i - 1; i < firstAuxillaryArrayValue, j < secondAuxillaryArrayValue; i++, j++) {
		markColumn(column[start + i], COLORS.selector);
		markColumn(column[middle + 1 + j], COLORS.selector);
		await pauseSorter(pauseTime / 10);
		left[i] = column[start + i].style.height;
		right[j] = column[middle + 1 + j].style.height;
	}

	//------------PREVIOUS IMPLEMENTATION BELOW-----------------|		
	// for (let i = 0; i < firstAuxillaryArrayValue; i++) {				    |
	// 	markColumn(column[start + i], COLORS.selector);         |
	// 	left[i] = column[start + i].style.height;               |
	// 	await pauseSorter(pauseTime);                           |
	// }                                                        |
    //                                                          |
	// for (let i = 0; i < secondAuxillaryArrayValue; i++) {                   |
	// 	markColumn(column[middle + 1 + i], COLORS.selector);    |
	// 	right[i] = column[middle + 1 + i].style.height;         |
	// 	await pauseSorter(pauseTime);                           |
	// }                                                        |
	//----------------------------------------------------------|

	// i = 0 is init index of first subarray
	// j = 0 is init index of second subarray
	// k = start is init index of merged subarray
	let i = 0, j = 0, k = start;

	while( i < firstAuxillaryArrayValue && j < secondAuxillaryArrayValue) {
		//compareColumns() obsolete for merge()
		// must be <=
		if (parseInt(left[i]) <= parseInt(right[j])) {
			markColumn(column[k], COLORS.deselector);
			// virtual swap
			column[k].style.height = left[i];
			i++;
			//k++;
		}
		else {
			markColumn(column[k], COLORS.deselector);
			column[k].style.height = right[j];
			j++;
			// k++;
		}
		k++;
		await pauseSorter(pauseTime / 10);
	}

	// copy remaining elements of left[], if any
	while (i < firstAuxillaryArrayValue) {
		markColumn(column[k], COLORS.deselector);
		column[k].style.height = left[i];
		i++;
		k++;
		await pauseSorter(pauseTime);
	}
	// copy remaining elents of right[], if any
	while (j < secondAuxillaryArrayValue) {
		markColumn(column[k], COLORS.deselector);
		column[k].style.height = right[j];
		j++;
		k++;
		await pauseSorter(pauseTime / 10);
	}
}

// left is left index, right is right index of sub-array of array to sort
async function mergeHelper(column, left, right) {
	if (left >= right) {
		// recursive return
		return;
	}
	const mid = left + Math.floor((right - left) / 2);
	await mergeHelper(column, left, mid);
	await mergeHelper(column, mid + 1, right);
	await merge(column, left, mid, right);
}

// inside mergeSort() driver function
async function mergeSort() {
	disableUserInput();
	let column = document.querySelectorAll(".column");
	await mergeHelper(column, 0, parseInt(column.length) - 1);
	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete);
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}