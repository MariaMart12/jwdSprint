//Form Validation

//Variable Target///
/*
const inputValue = document.getElementById("InputValue");
const assignValue = document.getElementById("assignValue");
const statusValue = document.getElementById("statusValue");
const dateValue = document.getElementById("dateValue");
const descValue = document.getElementById("descValue");

const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", validateForm)

const validateForm = (event)=>{
     event.preventDefault();
     //Task Name
     if(inputValue.value.trim() === ""){
        setError(inputValue, "Please Enter Your Name")
     }else{
          setSuccess(inputValue);
     }
     //Assign To
     if(assignValue.value.trim() === ""){
          setError(assignValue, "Please Choose Team Member")
       }else{
          setSuccess(assignValue);
     }
     //Status
     if(statusValue.value.trim() === ""){
          setError(statusValue, "Please Choose Your Status")
       }else{
          setSuccess(statusValue);
     }

       //date
       if(dateValue.name.trim() === ""){
          setError(dateValue, "Please Choose Your Due Date")
       }else{
          setSuccess(dateValue);
     }
       //Description
       if(descValue.value.trim().length < 10 || descValue.value.trim()>200){
          setError(descValue, "Description Minimum 10 and Maximum 200 characters long")
       }
       else{
       if(descValue.value.trim().length < 10 || descValue.value.trim()>200){
       }else{
          setSuccess(descValue);
       }
       }
};

function setError(element, errorMessage) {
     const parent = element.parentElement;
     if (parent.classList.contains("success")) {
       parent.classList.remove("success");
     }
     parent.classList.add("error");
     const paragraph = parent.querySelector("p");
     paragraph.textContent = errorMessage;
   }
   function setSuccess(element) {
     const parent = element.parentElement;
     if (parent.classList.contains("error")) {
       parent.classList.remove("error");
     }
     parent.classList.add("success");
   }
   */

let time = document.getElementById('dateNtime')
let current = new Date();
//let cDate =  current.getDate() + '-' + (current.getMonth() + 1) + '-' current.getFullYear(); 
let cDate = `${current.getDate()} / ${(current.getMonth() + 1)} / ${current.getFullYear()}`
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;
time.innerHTML = dateTime; 
