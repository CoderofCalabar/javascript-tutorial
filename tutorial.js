document.getElementById("errormessage");
document.getElementsByClassName("name");

const errorMessage = document.querySelector("#errormessage");
const successMessage = document.querySelector("#successmessage");
const name = document.querySelector("#name");
const emailAddress = document.querySelector("#email_address");
const phoneNumber = document.querySelector("#phone_number");
const submit = document.querySelector("#submitBtn");
const listItems = document.querySelector("#submittedList");

const validate = (name, value) => {
    if(value === "" ) errorMessage.innerHTML = `Please enter your ${name}`;
    return value === "" ? false : true;
}

// event listeners

submit.addEventListener("click", function() {
    let check;
    check = validate("name", name.value);
    if(!check) return;
    check = validate("email address", emailAddress.value);
    if(!check) return;
    check = validate("Phone number", phoneNumber.value);
    if(!check) return;

    errorMessage.innerHTML  =  "";

    let child = `<p class="items">${name.value}</p>`;
    // listItems.innerHTML = child;
    const newElement = document.createElement("p");
    newElement.className = "items";
    newElement.innerHTML = name.value;

    listItems.appendChild(newElement);

    name.value = "";
    emailAddress.value = "";
    phoneNumber.value = "";
    
    successMessage.innerHTML = "Your form has been submitted"    
});