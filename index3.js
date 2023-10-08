const array = [25, 50, 75, 100, "125"]

const reverseArr = (arr) => {
    let temp = 0
    console.log(arr)
    for(let i = 0; i < arr.length/2; i++){
        let j = arr.length - 1 - i
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        temp = 0
    }
    console.log(arr)
}

reverseArr(array)