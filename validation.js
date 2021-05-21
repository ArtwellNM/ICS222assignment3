let name=document.getElementById("name");
let email=document.getElementById("email");
let num=document.getElementById("num");
let enquiry=document.getElementById("enquiry");
let form=document.querySelector("form");

function validateInput(){
   
    if(name.value.trim()===""){
       onError(name," Name cannot be empty");
    }else{
        onSuccess(name);
    }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }
    if(num.value.trim()===""){
        onError(num,"Please enter your number");
     }else{
         onSuccess(num);
     }
     if(enquiry.value.trim()===""){
        onError(enquiry,"Enquiry cannot be empty");
     }else
         onSuccess(enquiry);
     }


document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

