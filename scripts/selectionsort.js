/*
* Selection Sort sort an array of N elements by indexing the minimum-value
* element from unsorted portion of array and placing at the start.
* during sorting process, two subarrays of array(N) are maintained, one
* that is sorted, and the other which is unsorted. Through each iteration
* of traverse, the minimum element from the unsorted array is selected
* and placed into sorted array.
*/
async function selectionSort() {
	disableUserInput();

	const column = document.querySelectorAll(".column");
	// traverse array
	for (let i = 0; i < column.length - 1; i++) {
		// select element to be compared
		markColumn(column[i], COLORS.selector);
		// create and select minimum index for comparison
		// in unsorted portion of array
		let min = i;
		for (let j = i + 1; j < column.length; j++) {
			markColumn(column[j], COLORS.selector);
			if (compareColumns(column[min], column[j])) {
				// values swapped
				min = j;
				markColumn(column[min], COLORS.inserter);
				await pauseSorter(pauseTime);
			}
			// 27 - 38 are for visual purposes in site
			else {
				markColumn(column[j], COLORS.deselector);
				await pauseSorter(pauseTime);
			}
			for (let k = min + 1; k < column.length; k++) {
				markColumn(column[k], COLORS.complete);
			}
			for (let l = i + 1; l < min; l++) {
				markColumn(column[l], COLORS.complete);
			}
		}
		// otherwise swap and mark swapped
		swapColumns(column[i], column[min]);
		markColumn(column[i], COLORS.deselector);
	}
	// traverse backward and return to original color
	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete);
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}