async function selectionSort() {
	disableUserInput();

	const column = document.querySelectorAll(".column");
	for (let i = 0; i < column.length - 1; i++) {
		markColumn(column[i], COLORS.selector);
		let min = i;
		for (let j = i + 1; j < column.length; j++) {
			markColumn(column[j], COLORS.selector);
			if (compareColumns(column[min], column[j])) {
				min = j;
				markColumn(column[min], COLORS.inserter);
				await pauseSorter(pauseTime);
			}
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

		swapColumns(column[i], column[min]);
		markColumn(column[i], COLORS.deselector);
	}
	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete);
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}