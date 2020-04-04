const name = document.getElementById('name')
const email = document.getElementById('email')
const contact = document.getElementById('contact')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
var phoneno = /^[0-9]+$/;
form.addEventListener('submit',(e) => {
    
    let messages= []
    if( name.value === '' || name.value === null){
        messages.push('You are not human  ')
    }
    if( email.value === '' || email.value === null){
        messages.push('please input an email ')
    }
    if( contact.value === '' || contact.value === null){
        messages.push('you really dont have any contact number? ')
    }
    if( contact.value.match(phoneno)){
        messages.push(' ')
    }
    if(messages.length>0){
        e.preventDefault();
        errorElement.innerText= messages.join('||| ')
    }
})
