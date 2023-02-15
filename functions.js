function addTwoNums(a,b){
    return a+b
}
addTwoNums(5,5)

console.log(addTwoNums(5,5)) //[1 way]

// let result=addTwoNums(3,5) //[2 way] //8
// console.log(result)

//largest of 2 nums using functions
    function largestNum(x,y){
        if(x>y){
            console.log(x+ " is the largest")
        }
        else{
            console.log(y+ " is the largest")
        }
    }
    largestNum(5,15) //no need of printing again coz we already gave inside if block
    // let large=largestNum(3,7)
    // console.log(large)

//get avg of numbers using functions
    // let avg
    function avgNum(p,q,r,s){
        return (p+q+r+s)/4
    }
    console.log(avgNum(2,2,2,2))

//create a function wch accepts one arg i.e string and reverse that string [or] REVERSE A STRING 
    
    let str = "hey"
    let revStr = " "
    for(s=str.length-1; s>=0; s--)
        {
            revStr += str[s];
        }
    console.log(revStr)

    // function revStr(str){
    //     for(let x = str.length-1; x>=0; x--){
    //         revStr += str[x]
    //     }
    //     return str
    // }
    // console.log(revStr("SUSH"))

    //TYPES OF FUNCTIONS - 1) General/Named/Normal function 2) Anonymous function 3) Arrow Fumction

    //Genernal func
        function avgNum(p,q,r,s){
            return (p+q+r+s)/4
        }
        console.log(avgNum(2,2,2,2))

    //Anonymous function - will not have func name so, declare a variable and store func in that variable
        let addNums= function(a,b){
            return a+b
        }
        console.log(addNums(2,2))

    //Arrow Function - will not have func name and function keyword so, 
                        // declare and store the func in a variable, instead of func keyword use => (arrow)
        let nums = (a,b) => {
            return a+b
        }
        console.log(nums(5,4))
    

let n;
function prime(n){
    if(n==1){
        //console.log("it is not a  prime number")
        return false
    }
    else if(n==2){
        //console.log("it is a prime number ")
        return true
    }
    else{
        for(let y = 2; y<n; y++){
            //console.log("it is not a prime number")
            return false
        }
    }
    //console.log("it is a ptime number")
    return true
}
console.log(prime(2))

