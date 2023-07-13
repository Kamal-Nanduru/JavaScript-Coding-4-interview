let arr = [1, 100, 0, -1, 4, 2]

for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j+1]) {
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        } 
    }}
    console.log(arr);