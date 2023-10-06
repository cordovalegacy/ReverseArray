

const array = [2, 6, 4, 8, 10, 11, 3, 7]

const reverseArray = (arr) => {
    let temp = 0
    console.log(arr)
    for(let i = 0; i < arr.length / 2; i++){
        let j = arr.length - 1 - i
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            temp = 0
    }
    console.log(arr)
}

reverseArray(array)