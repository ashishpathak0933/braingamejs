const myNumbers = (array) => {
    for (let i = array.length - 1; i >1 ; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        console.log(i)
    }
    return array;
}

const shuffleNumber = myNumbers([1, 2, 3, 4, 5, 6]);
console.log(shuffleNumber);
