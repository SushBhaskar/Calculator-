//if block
let cat = "meow meow"
if(cat === "meow meow"){
    console.log("cat sounds meow meow")
}

//if else block
let a=18
if(a>22){
    console.log("a is greater than 20")
}
else{
    console.log("a is less than 20")
}

//if else if block
let signal = "green"
if(signal==="red"){
    console.log("Please stop")
}
else if(signal==="orange"){
    console.log("Be ready")
}
else{
    console.log("you can go")
}

//Nested if block
let trafic = "green"
if(trafic==="green"){
    console.log("you can go")
    let pedistrians = true
    if(pedistrians){
        console.log("Please Hold on")
    }
    else{
        console.log("Go")
    }
}
else if(trafic==="orange"){
    console.log("Be ready")
}
else{
    console.log("Stop")
}

// 1. WAP  to find the num is +ve / -ve
// 2. WAP to find the num is even / odd
// 3. WAp to find the num is +ve / -ve if the num is +ve find whether it is even / odd

//1
let x=21
if(x>0){
    console.log("Number is positive")
}
else{
    console.log("number is negative")
}

//2
let z=33
if(z%2===0){
    console.log(z+ " is even number")
}
else{
    console.log(z+ " is odd number")
}

//3 - NESTED IF 
let y=75
if(y>0){
    console.log(y+ " is positive number")
        if(y%2===0){
            console.log(y+ " is even number")
        }
        else{
            console.log(y+ " is odd number")
        }
}
else{
    console.log(y+ " is negative number")
}

//SWITCH CASE
let color="green"
switch(color)
{
    case "red" : console.log("The color is red")
    break
    case "green" : console.log("The color is green")
    break
    case "blue" : console.log("The color is blue")
    break
    case "black" : console.log("The color is black")
    break
    default : console.log("Matching color not found")
    break //its optional to give break in the end of case
}