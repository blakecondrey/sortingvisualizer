class Helper {
    
    constructor(time, array = []) {
        this.time = parseInt(250/time);
        this.array = array;
    }

    pauseSorter = async() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, this.time);
        });
    }

    selectColumns = async (column) => {
        columm = this.array[column].getAttribute("column");
        column.style.background = '#ff0000';
    }

    compareColumns = async (colOne, colTwo) => {
        await this.pauseSorter();
        let colValOne = Number(this.colOne.getAttribute("column"));
        let colValTwo = Number(this.colTwo.getAttribute("column"));
        if (colValOne > colValTwo) {
            return true;
        }
        return false;
    }

    swapColumns = async (colOne, colTwo) => {
        await this.pauseSorter();
        let tempCol = colOne.style.height;
        colOne.style.height = colTwo.style.height;
        colTwo.style.height = tempCol;
    }

    deselectColumns = async (column) => {
        column = this.array[column].getAttribute("column");
        column.style.background = '#28559e';
    }

    finishColumn = async (columm) => {
        column = this.array[column].getAttribute("column");
        columm.style.background = '#64ffda';
    }

    animate = async (ms) => {
        return new Promise(resolve => {
            setTimeout(() => {resolve('') }, ms);
        });
    }
}