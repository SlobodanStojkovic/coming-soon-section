let input=document.querySelector(".coming-soon-section__email__input"),button=document.querySelector(".coming-soon-section__email__button"),error=document.querySelector(".coming-soon-section__email__warning"),errorIcon=document.querySelector(".coming-soon-section__email__error");const submitEmail=()=>{if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))return console.log(input.value),error.classList.add("hidden"),errorIcon.classList.add("hidden"),void input.classList.remove("error");error.classList.remove("hidden"),errorIcon.classList.remove("hidden"),input.classList.remove("error"),input.classList.add("error")};button.addEventListener("click",submitEmail);