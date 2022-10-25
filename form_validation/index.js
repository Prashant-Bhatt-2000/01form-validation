console.log("This is project 4")
const name = document.getElementById('name')
const email = document.getElementById('email-address')
const phone = document.getElementById('Phone')
let failure = document.getElementById('faliure');
let success = document.getElementById('success');

let validEmail = false;
let validPhone = false;
let validUser = false;

failure.classList.remove('show')
success.classList.remove('show')

 
//name validation
name.addEventListener('blur', ()=>{
    console.log("name is blured")
    //validation
    let regex = /^[a-zA-Z]([a-zA-Z]){3,20}$/;
    let str = name.value;
    console.log(regex,str)
    //.test() It will matches two variables
    if(regex.test(str)){
        console.log('Your name is valid')
        name.classList.remove('is-invalid')
        validUser = true
    }
    else{
        console.log("your name is not valid")
        name.classList.add('is-invalid')
        validUser = false
    }
})


//email validation
email.addEventListener('blur', ()=>{
    console.log("email is blured")
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-A]){2,7}$/;
    let str = email.value;
    console.log(regex,str)
    //.test() It will matches two variables
    if(regex.test(str)){
        console.log('Your email is valid')
        email.classList.remove('is-invalid')
        validEmail = true;
    }
    else{
        console.log("your email is not valid")
        email.classList.add('is-invalid')
        validEmail = false
    }
})


//phone validation
phone.addEventListener('blur', ()=>{
    console.log("phone is blured")   
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex,str)
    //.test() It will matches two variables
    if(regex.test(str)){
        console.log('Your phone is valid')
        phone.classList.remove('is-invalid')
        validPhone = true;
    }
    else{
        console.log("your phone is not valid")
        phone.classList.add('is-invalid')
        validPhone = false
    } 
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("form submission")
    console.log(validUser, validPhone, validEmail)

    
    if(validEmail && validPhone && validUser){
        console.log("Valid information.")
        
        success.classList.add('show');
        failure.classList.remove('show')
    }
    else{
        console.log("Invalid info. Please correct info")
        failure.classList.add('show')
        success.classList.remove('show')
    }
})