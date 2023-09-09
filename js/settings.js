const changeEmailBtn = document.getElementById("change-email");
const saveEmailBtn = document.getElementById("save-email");
const input = document.getElementById("email-input");

window.addEventListener("load", () => {
    input.value = localStorage.email ? localStorage.email : "philopaterdev@gmail.com";
});

changeEmailBtn.addEventListener("click", () => {
    input.disabled = false;
    input.focus();
    input.classList.remove("disabled");
    changeEmailBtn.style.display = "none";
    saveEmailBtn.style.display = "inline-block";
});

saveEmailBtn.addEventListener("click", () => {
    input.disabled = true;
    input.blur();
    input.classList.add("disabled");
    input.value = input.value;
    saveEmailBtn.style.display = "none";
    changeEmailBtn.style.display = "inline-block";
    localStorage.email = input.value;
    Swal.fire({
        icon: "success",
        title: "Your email has been saved",
        showConfirmButton: true,
        timer: 1500,
    });
});
