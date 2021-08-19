async function bubbleSort() {
	disableUserInput();
	
	const column = document.querySelectorAll(".column");
	for (let i = 0; i < column.length - 1; i++) {
		for (let j = 0; j < column.length - i - 1; j++) {
			if (compareColumns(column[j], column[j + 1])) {
				markColumn(column[j], COLORS.selector);
				markColumn(column[j + 1], COLORS.selector);	
				swapColumns(column[j], column[j + 1]);
				await pauseSorter(2 * pauseTime);
				markColumn(column[j], COLORS.deselector);
				markColumn(column[j + 1], COLORS.deselector);
				await pauseSorter(pauseTime);
			}
			else {
				markColumn(column[j], COLORS.deselector);
				markColumn(column[j + 1], COLORS.deselector);
				await pauseSorter(pauseTime);
			}
			for (let k = j; k >= 0; k--) {
				markColumn(column[k], COLORS.complete);
			}
		}
	}

	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete)
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}