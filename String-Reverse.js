function reverse(){
    let str = prompt("enter a string :");
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--){
            rev += str[i];
        }

        console.log(rev);
}