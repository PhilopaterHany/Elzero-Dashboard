const avatar = document.getElementById("avatar");
const nickname = document.getElementById("nickname");
const level = document.getElementById("level");
const xpProgress = document.getElementById("xp-progress");
const rating = document.getElementById("rating");
const fullName = document.getElementById("full-name");
const gender = document.getElementById("gender");
const country = document.getElementById("country");
const email = document.getElementById("user-email");
const phone = document.getElementById("phone");
const birthdate = document.getElementById("birthdate");
const userJobTitle = document.getElementById("user-job-title");
const progLang = document.getElementById("prog-lang");
const experience = document.getElementById("experience");
const paymentMethod = document.getElementById("payment-method");
const plan = document.getElementById("plan");
const subscription = document.getElementById("subscription");
const skillsUl = document.querySelector(".skills-wrapper");
const activitiesParag = document.querySelector(".activities .box-header p");
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

fetch("../json/profile.json")
    .then((response) => response.json())
    .then((data) => {
        avatar.src = data.avatar.image;
        nickname.innerHTML = data.avatar.nickName;
        level.innerHTML = `Level ${data.avatar.level}`;
        xpProgress.style.width = `${data.avatar.xpProgress}%`;
        rating.innerHTML = `Rating ${data.avatar.rating}`;

        fullName.innerHTML = data.general.fullName;
        gender.innerHTML = data.general.gender;
        country.innerHTML = `${data.general.countryName} <img src="https://flagsapi.com/${data.general.countryCode}/flat/24.png">`;

        email.innerHTML = data.personal.email;
        phone.innerHTML = data.personal.phoneNumber.replace(/(\+\d{2})(\d{3})(\d{3})(\d{4})/, "($1) $2 $3 $4");

        let dateComponents = data.personal.birthdate.split("/");
        birthdate.innerHTML = `${parseInt(dateComponents[0], 10)} ${monthNames[parseInt(dateComponents[1], 10) - 1]} ${dateComponents[2]} (${new Date().getFullYear() - dateComponents[2]} yo)`;

        userJobTitle.innerHTML = data.job.title;
        progLang.innerHTML = data.job.progLang;
        experience.innerHTML = data.job.experience;

        paymentMethod.innerHTML = data.billing.paymentMethod;
        plan.innerHTML = data.billing.plan;
        subscription.innerHTML = data.billing.subscription;

        for (let i = 0; i < data.skills.length; i++) {
            let li = document.createElement("li");
            for (let j = 0; j < data.skills[i].length; j++) {
                let span = document.createElement("span");
                span.innerHTML = data.skills[i][j];
                li.appendChild(span);
            }
            skillsUl.appendChild(li);
        }

        activitiesParag.innerHTML += data.avatar.nickName;
    });
