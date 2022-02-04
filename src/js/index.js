let input = document.querySelector(".coming-soon-section__email__input");
let button = document.querySelector(".coming-soon-section__email__button");
let error = document.querySelector(".coming-soon-section__email__warning");
let errorIcon = document.querySelector(".coming-soon-section__email__error");

const submitEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    console.log(input.value);
    error.classList.add("hidden");
    errorIcon.classList.add("hidden");
    input.classList.remove("error");
    return;
  }

  error.classList.remove("hidden");
  errorIcon.classList.remove("hidden");
  input.classList.remove("error");
  input.classList.add("error");
};

button.addEventListener("click", submitEmail);
