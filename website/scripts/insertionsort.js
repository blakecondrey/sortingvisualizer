/*
* Insertion Sort algorithm virtually splits array of N elements into
* a sorted and unsorted parts. Elements in the unsorted part of the array
* are selected and inserted into correct position into the sorted
* of the array, similar to the way humans sort and organize a hand
* of cards dealt in nearly every card-playing game.
*/

async function insertionSort() {
	disableUserInput();
	// Select columns in the array for manipulation in algorithm
	const column = document.querySelectorAll(".column");
	// Iterate from column[1] to column[n] (n = length = last element)
	for (let i = 1; i < column.length; i++) {
		// set key for comparison to predecessor
		let key = column[i].style.height;
		// set column for comparison to key
		let j = i - 1;
		markColumn(column[i], COLORS.inserter);
		await pauseSorter(pauseTime);
		// while-loop for comparison of col[j] to key moves elements of
		// col[0 -> i - 1] ahead of current position
		while (j >= 0 && (parseInt(column[j].style.height) > parseInt(key))) {
			swapColumns(column[j + 1], column[j]);
			markColumn(column[j], COLORS.selector);
			j--;
			await pauseSorter(pauseTime);
			for (let k = i; k >=0; k--) {
				markColumn(column[k], COLORS.deselector);
			}
		}
		// values swap
		column[j + 1].style.height = key;
	}
	// columns are sorted and revert to original color
	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete);
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}