function reverseWords(params) {
    let str = prompt("enter a string :")
    let rev = str.split("").reverse().join(" ")
    console.log(rev);
}