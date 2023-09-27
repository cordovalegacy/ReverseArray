//to reverse an array you do not need a nested for loop

const arr1 = [1, 2, 4, 6, 8, 9, 3, 4]
const arr2 = [4, 6, 3, 2, 3, 6, 9, 4, 11]

const reverseArr2 = (array) => {
    console.log("1: ", array)
    let temp = 0
    for(let i = 0; i < array.length / 2; i++){
        let j = array.length - 1 - i
        temp = array[j]
        array[j] = array[i]
        array[i] = temp
        temp = 0
    }
    console.log("2: ", array)
}

reverseArr2(arr1)
reverseArr2(arr2)