//Write  a function that calculates and print the area of rectangle given its length and width.

function areaOfRectangle(length,width){
    const area = length * width;
    console.log(area);
}

areaOfRectangle(20,40);
areaOfRectangle(-2,350); // length and width are not in negative numbers so we have to gave a validation for that

//with validation

function areaOfRectangle2(length,width){
    if(length <=0){
        throw RangeError("Length should be a positive number");
    }
    if(width <=0){
        throw RangeError("Width should be a positive number");
    }
    const area = length * width;
    console.log(`Area of rectangle is: ${area}`);

}

areaOfRectangle2(20,40);
areaOfRectangle2(-2,350);