const changeEmailBtn = document.getElementById("change-email");
const saveEmailBtn = document.getElementById("save-email");

changeEmailBtn.addEventListener("click", () => {
    let input = changeEmailBtn.previousSibling;
    input.disabled = false;
    input.focus();
    input.classList.remove("disabled");
    changeEmailBtn.style.display = "none";
    saveEmailBtn.style.display = "inline-block";
});

saveEmailBtn.addEventListener("click", () => {
    let input = saveEmailBtn.previousSibling.previousSibling;
    input.disabled = true;
    input.blur();
    input.classList.add("disabled");
    input.value = input.value;
    saveEmailBtn.style.display = "none";
    changeEmailBtn.style.display = "inline-block";
    Swal.fire({
        icon: "success",
        title: "Your email has been saved",
        showConfirmButton: true,
        timer: 1500,
    });
});
