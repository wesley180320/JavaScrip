function returnEvenvalues(array) {

    for (let i = 0; i < array.length; i++) {
        let evenNums = [];
        if (array[i] % 2 == 0) {
            evenNums.push(array[i]);
        }
        console.log('os numeros pares são', evenNums);
    }
}
let array = [1, 2, 4, 5, 7, 8];

returnEvenvalues(array);