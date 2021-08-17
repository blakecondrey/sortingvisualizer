class SortingAlgorithm {

    constructor(time) {
        this.time = time;
        this.array = document.querySelectorAll(".column");
        this.helper = new Helper(this.time, this.array);
    }

    // BUBBLE SORT

    bubbleSort = async () => {
        this.disableUserInput();
        let algo = this.helper;
        let array = this.array;
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                await algo.selectColumns(j);
                await algo.selectColumns(j + 1);
                if (await algo.compareColumns(j, j + 1)) {
                    await algo.swapColumns(j, j + 1);
                }
                await algo.deselectColumns(j);
                await algo.deselectColumns(j + 1);
            }
            for (let k = j; k >= 0; k--) {
                array.setAttribute("class", "generated-column");
            }
        }
        for (let k = arr.length - 1; k >= 0; k--) {
            array.setAttribute("class", "generated-column");
        }
        this.enableUserInput();
    }

    // INSERTION SORT

    insertionSort = async () => {
        this.disableUserInput();
        let algo = this.helper;
        let array = this.array;
        for (let i = 0; i < array.length - 1; i++) {
            let j = i;
            while (j >= 0 && await algo.compareColumns(j, j + 1)) {
                await algo.selectColumns(j);
                await algo.selectColumns(j + 1);
                await algo.pauseSorter();
                await algo.swapColumns(j, j + 1);
                await algo.deselectColumns(j);
                await algo.deselectColumns(j + 1);
                j -= 1;
            }
        }
        for (let counter = 0; counter < array; counter++) {
            array.setAttribute("class", "generated-column");
        }
        this.enableUserInput();
    }

    // SELECTION SORT

    selectionSort = async () => {
        this.disableUserInput();
        let algo = this.helper;
        let array = this.array;
        for (let i = 0; i < array.length; i++) {
            let index = i;
            for (let j = i; j < array.length; j++) {
                await algo.selectColumns(index);
                await algo.selectColumns(j);
                if (await algo.compareColumns(index, j)) {
                    await algo.deselectColumns(index);
                    index = j;
                }
                await algo.deselectColumns(j);
                await algo.deselectColumns(index);
            }
            await algo.selectColumns(index);
            await algo.selectColumns(i);
            await algo.pauseSorter();
            await algo.swapColumns(index, i);
            await algo.deselectColumns(index);
            this.array[i].setAttribute("class", "generated-column");
        }
    }

    merge = async (start, middle, end) => {
        let array = this.array;
        let algo = this.helper;
        let newList = new Array();
        let counterFront = start;
        let counterMid = mid + 1;

        while (counterFront <= middle && counterMid <= end) {
            let valueFront = Number(array[counterFront].getAttribute("column"));
            let valueStart = Number(array[counterMid].getAttribute("column"));
            if (valueFront >= valueStart) {
                newList.push(valueStart);
                counterMid++;
            }
            else {
                newList.push(valueFront);
                counterFront++;
            }
        }
        while (counterFront <= middle) {
            newList.push(Number(array[counterFront].getAttribute("column")));
            counterFront++;
        }
        while (counterMid <= end) {
            newList.push(Number(array[counterMid].getAttribute("column")));
            counterMid++;
        }

        for (let c = start; c <= end; c++) {
            array[c].setAttribute("class", "generated-column");
        }

        for (let c = start, point = 0; 
            c <= end && point < newList.length; 
            c++, point++) {
            await algo.pauseSorter();
            array[c].setAttribute("column", newList[point]);
            array[c].style.height = `${3.5*newList[point]}px`;
        }
        for (let c = start; c <= end; c++) {
            array[c].setAttribute("class", "columns");
        }
    }

    mergeSortDiv = async (start, end) => {
        if (start < end) {
            let middle = start + Math.floor((end - start) / 2);
            await this.mergeSortDiv(start, end);
            await this.mergeSortDiv(middle + 1, end);
            await this.merge(start, middle, end);
        }
    }

    mergeSort = async () => {
        let array = this.array;
        this.disableUserInput();
        await this.mergeSortDiv(0, array.length - 1);
        for (let counter = 0; counter < array.length; counter++) {
            array[counter].setAttribute("class", "generated-column");
        }
        this.enableUserInput();
    }

    // QUICK SORT

    partition = async (start, end) => {
        let array = this.array;
        let algo = this.helper;
        let pivotPoint = array[end].getAttribute("column");
        let previousIndex = start - 1;

        await algo.selectColumns(end);
        for (let c = start; c < end; c++) {
            let currentValue = Number(array[c].getAttribute("column"));
            await algo.selectColumns(c);
            if (currentValue < pivotPoint) {
                previousIndex += 1;
                await algo.selectColumns(previousIndex);
                await algo.swapColumns(c, previousIndex);
                await algo.deselectColumns(previousIndex);
            }
            await algo.deselectColumns(c);
        }
        await algo.swapColumns(previousIndex + 1, end);
        await algo.deselectColumns(end);
        return previousIndex + 1;
    }

    quickSortDiv = async (start, end) => {
        if (start < end) {
            let pivotPoint = await this.partition(start, end);
            await this.quickSortDiv(start, pivotPoint - 1);
            await this.quickSortDiv(pivotPoint + 1, end);
        }
    }

    quickSort = async () => {
        let array = this.array;
        this.disableUserInput();
        await this.quickSortDiv(0, array.length - 1);
        for (let c = 0; c < array.length; c++) {
            array[c].setAttribute("class", "generated-column");
        }
    }
};