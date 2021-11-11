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
	// flag for while loop
	let isSorted = false;
	// counter for round comparison | incremented after for-loop escape
	let counter = 0;
	// outer loop to traverse length of array
	while(!isSorted) {
		isSorted = true;
		// inner loop to traverse and compare column values
		for (let i = 0; i < column.length - 1 - counter; i++) {
			if (compareColumns(column[i], column[i + 1])) {
				markColumn(column[i], COLORS.selector);
				markColumn(column[i + 1], COLORS.selector);
				// swapColumns(column[i], column[i + 1]);
				await pauseSorter(pauseTime / 25);
				swapColumns(column[i], column[i + 1]);
				markColumn(column[i], COLORS.deselector);
				markColumn(column[i + 1], COLORS.deselector);
				await pauseSorter(pauseTime / 25);
				// reenter while loop
				isSorted = false;
			}
			// breaks loop condition to mark columns as sorted
			// prior to compare function
			else {
				markColumn(column[i], COLORS.deselector);
				markColumn(column[i + 1], COLORS.deselector);
				await pauseSorter(pauseTime / 25);
				// reenter while loop
				isSorted = false;
			}
			// once columns are sorted, loop traverses array
			// of columns to return to original color
			for (let j = i; j >= 0; j--) {
				markColumn(column[j], COLORS.complete);
			}
		}
		// increase counter for inner loop comparison
		counter++;
	}
	// return to completed color
	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete)
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}