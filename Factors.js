function factors(){
    let number = parseInt(prompt("Enter a number :"));
    for(let i = 0; i < number; i++){
        if(number % i === 0){
                    console.log(i);
                }
    }
}