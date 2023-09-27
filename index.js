//to reverse an array you do not need a nested for loop
//to reverse a string you must concatenate the string to a new variable since a string is immutable

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = ["string1", "string2", "string3"]

const reverse = (input) => {
    console.log("before: ", input)
    let temp = 0
    for (let i = 0; i < input.length / 2; i++) {
        let j = input.length - 1 - i
        temp = input[j]
        input[j] = input[i]
        input[i] = temp
        temp = 0
    }
    console.log("after: ", input)
}

// reverse(arr1)
reverse(arr2)