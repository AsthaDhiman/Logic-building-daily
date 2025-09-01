//Write a function that finds and prints the small number amonng three given number.

function smallNumber(a,b,c){
    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){
        throw new Error("Invalid input only integers are allowed!");
    }
    if(a<b && a<c){
        console.log(a);
    }else if(b<a && b<c){
        console.log(b);
    }else if(c<a && c<b){
        console.log(c);
    }
}

smallNumber(2,3,1);
// smallNumber("a","b","c"); //error
//smallNumber(1,2,"x"); //error


