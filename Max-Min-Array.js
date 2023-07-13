let arrayList = [1, 2, 85, 69, 45, 23, 63];

let max = arrayList[0];
let min = arrayList[0];

for (let i = 1; i < arrayList.length; i++) {
    if (arrayList[i] > max) {
        max = arrayList[i];
    }
}
console.log("Maximum Value is -- "+ max);

for(let i = 1; i < arrayList.length; i++) {
    if (arrayList[i] < min) {
        min = arrayList[i];
    }
}
console.log("Minimum Value is -- " + min);