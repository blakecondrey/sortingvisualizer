async function insertionSort() {
	disableUserInput();

	const column = document.querySelectorAll(".column");
	for (let i = 1; i < column.length; i++) {
		let key = column[i].style.height;
		let j = i - 1;
		markColumn(column[i], COLORS.inserter);
		await pauseSorter(pauseTime);
		while (j >= 0 && (parseInt(column[j].style.height) > parseInt(key))) {
			column[j + 1].style.height = column[j].style.height;
			markColumn(column[j], COLORS.selector);
			j--;
			await pauseSorter(pauseTime);
			for (let k = i; k >=0; k--) {
				markColumn(column[k], COLORS.deselector);
			}
		}
		column[j + 1].style.height = key;
	}
	for (let k = column.length - 1; k >= 0; k--) {
		markColumn(column[k], COLORS.complete);
		await pauseSorter(100 / newArray.length);
	}

	enableUserInput();
}