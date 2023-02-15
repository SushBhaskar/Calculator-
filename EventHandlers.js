//Events : used to perform 

//onclick event
let datebtn = document.getElementById("datebtn")
function showDate(){
    let date = new Date().toLocaleDateString()
    alert(`Today's date is ${date}`)
}
datebtn.addEventListener("click", showDate)

//ondblclick event - (on double click)
    let btn = document.getElementById("btn")    
    function getButtonText(event){
        console.log(btn.innerText)   
        console.log(event.target.innerText) //its by using event
    }
    btn.addEventListener("dblclick" , getButtonText)

        // function getButtonText(event)   // [ another way by using event object]
        // {
        //     console.log(event.target.innerText)
        // }


//on click - to get the input text as output
    let name1 = document.getElementById("name")
    let submit_btn = document.querySelector(".submit_btn")
    function getVal(){
        let fname1 = document.getElementById("fname").value
        //console.log(fname1)
        name1.innerHTML = `<b>${fname1}</b>`
    }
    submit_btn.addEventListener("click" , getVal)

//onsubmit - should get the form data
    function getFormData(event){
        let username1 = event.target.username.value;
        let password1 = event.target.pwd.value;
        console.log(`username : ${username1}`)
        console.log(`password : ${password1}`)
        event.preventDefault()
    }
    //  [OR]     Another way of getting form data
    
        // function getFormData(event){
        //     console.log(event.target.username.value)
        //     console.log(event.target.pwd.value)
        //     event.preventDefault()
        // }