const submitBtn = document.getElementById('submitBtn')
const resetBtn = document.getElementById('resetBtn')
const formId = document.getElementById('formId')

let fname = document.getElementById("nameField");
let lname = document.getElementById("userField");
let email = document.getElementById('emailField');
let msg = document.getElementById('theText');


formId.addEventListener('submit', (e) => {
    e.preventDefault()
    fname.value = ""
    lname.value = ""
    email.value = ""
    msg.value = ""
    document.getElementById('labelId').innerHTML = "Message Delivered </i>"
})

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fname.value = ""
    lname.value = ""
    email.value = ""
    msg.value = ""
})