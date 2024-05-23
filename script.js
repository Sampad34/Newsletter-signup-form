const containerElem=document.getElementById("card-container");
const leftElem=document.getElementById("left");
const rightElem=document.getElementById("right");
const userEmailElem=document.getElementById("user-email");
const invalidEmailElem=document.getElementById("invalid-email");
const emailInput=document.getElementById("email");
const submitBtnElem=document.getElementById("submit-btn");
const confirmedMessageElem=document.getElementById("confirmed-message");
const dismissMessageElem=document.getElementById("dismiss-message");


function formSuccess(){
    confirmedMessageElem.classList.add("active");
    containerElem.classList.add("success");
    leftElem.style.display="none";
    rightElem.style.display="none";
}

function validateEmail(email)
{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


submitBtnElem.addEventListener("click",(e)=>{
   e.preventDefault();
   
   const email=emailInput.value.trim();

   if(validateEmail(email))
    {
        formSuccess();
        userEmailElem.innerText=email;
        emailInput.value="";
        invalidEmailElem.classList.remove("active");
        emailInput.classList.remove("active");
    }
    else{
        invalidEmailElem.classList.add("active");
        emailInput.classList.add("active");

    }
})

dismissMessageElem.addEventListener("click",()=>{
    leftElem.style.display="block";
    rightElem.style.display="block";
    containerElem.classList.remove("success");
    confirmedMessageElem.classList.remove("active");
})