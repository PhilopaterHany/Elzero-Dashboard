const firstNameInput = document.getElementById("first-name");
const LastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email-input");
const changeEmailBtn = document.getElementById("change-email");
const saveEmailBtn = document.getElementById("save-email");
const facebookInputUserName = document.querySelector("i.facebook").nextElementSibling;
const githubInputUserName = document.querySelector("i.github").nextElementSibling;
const twitterInputUserName = document.querySelector("i.twitter").nextElementSibling;
const linkedinInputUserName = document.querySelector("i.linkedin").nextElementSibling;

window.addEventListener("load", () => {
    if (localStorage.email) {
        emailInput.value = localStorage.email
    } else {
	fetch("json/profile.json")
        .then((response) => response.json())
        .then((data) => emailInput.value = data.personal.email)
	.catch((error) => console.error("Fetch error:", error));
    }
});

fetch("json/profile.json")
    .then((response) => response.json())
    .then((data) => {
        firstNameInput.value = data.general.fullName.slice(0, data.general.fullName.indexOf(" "));
        LastNameInput.value = data.general.fullName.slice(data.general.fullName.indexOf(" ")+ 1);

        facebookInputUserName.value = data.social.facebook;
        githubInputUserName.value = data.social.github;
        twitterInputUserName.value = data.social.twitter;
        linkedinInputUserName.value = data.social.linkedin;
    }).catch((error) => console.error("Fetch error:", error));

changeEmailBtn.addEventListener("click", () => {
    emailInput.disabled = false;
    emailInput.focus();
    emailInput.classList.remove("disabled");
    changeEmailBtn.style.display = "none";
    saveEmailBtn.style.display = "inline-block";
});

saveEmailBtn.addEventListener("click", () => {
    emailInput.disabled = true;
    emailInput.blur();
    emailInput.classList.add("disabled");
    emailInput.value = emailInput.value;
    saveEmailBtn.style.display = "none";
    changeEmailBtn.style.display = "inline-block";
    localStorage.email = emailInput.value;
    Swal.fire({
        icon: "success",
        title: "Your email has been saved",
        showConfirmButton: true,
        timer: 1500,
    });
});
