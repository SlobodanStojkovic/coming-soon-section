let submit = document.querySelector(".email-submit");

const messages = {
  inputFieldEmpty: "Input field empty",
  invalidEmail: "Please enter valid email address",
  validationSuccessful: "You have subscribed successfully",
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

const submitEmail = () => {
  let input = document.querySelector(".email-input");
  let errorDiv = document.querySelector(".error-div");
  let warningIcon = document.querySelector(".warning-icon");

  if (input.value.length === 0) {
    errorDiv.classList.remove("success");
    errorDiv.innerHTML = messages.inputFieldEmpty;
    input.classList.add("error");
    warningIcon.classList.add("error");
    console.log("empty");
    return;
  } else if (validateEmail(input.value) === null) {
    errorDiv.classList.remove("success");
    errorDiv.innerHTML = messages.invalidEmail;
    input.classList.add("error");
    warningIcon.classList.add("error");
    console.log("invalid");
    return;
  } else if (validateEmail(input.value) !== null) {
    errorDiv.innerHTML = messages.validationSuccessful;
    errorDiv.classList.add("success");
    input.classList.remove("error");
    warningIcon.classList.remove("error");
    return;
  }
};

submit.addEventListener("click", submitEmail);
