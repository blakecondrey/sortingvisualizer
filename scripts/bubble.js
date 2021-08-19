/* Bubble Sort arranges 'N' elements of an array/list in ascending order
* by commencing at 0th index and comparing it's value to the 1st index.
* If 0th > 1st, the elements will swap values. The algorithm then proceeds
* to the next indexed elements and performs the comparing function and 
* and repeats until array is sorted.
* Bubble Sort is the simplest sorting method.
* Space-time complexity of O(n^2) 
*/
async function bubbleSort() {
	disableUserInput();
	// Select columns in the array for manipulation in algorithm
	const column = document.querySelectorAll(".column");
	// outer loop to traverse length of array
	for (let i = 0; i < column.length - 1; i++) {
		// inner loop to traverse and compare column values
		for (let j = 0; j < column.length - i - 1; j++) {
			// see helper functions
			if (compareColumns(column[j], column[j + 1])) {
				markColumn(column[j], COLORS.selector);
				markColumn(column[j + 1], COLORS.selector);	
				swapColumns(column[j], column[j + 1]);
				await pauseSorter(2 * pauseTime);
				markColumn(column[j], COLORS.deselector);
				markColumn(column[j + 1], COLORS.deselector);
				await pauseSorter(pauseTime);
			}
			// breaks loop condition to mark columns as sorted
			// prior to compare function
			else {
				markColumn(column[j], COLORS.deselector);
				markColumn(column[j + 1], COLORS.deselector);
				await pauseSorter(pauseTime);
			}
			// once columns are sorted, loop traverses array
			// of columns to return to original color
			for (let k = j; k >= 0; k--) {
				markColumn(column[k], COLORS.complete);
			}
		}
	}
	// return to completed color
	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete)
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}