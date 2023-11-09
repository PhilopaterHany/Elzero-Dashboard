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
const downloadButton = document.getElementById("download-button");
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
    }).catch((error) => console.error("Fetch error:", error));

downloadButton.addEventListener("click", () => {
    fetch("../json/profile.json")
        .then((response) => response.json())
        .then((data) => {
            // Create a human-readable representation of the JSON data
            const formattedData = `
Avatar:

    - Image: ${data.avatar.image}
    - Nickname: ${data.avatar.nickName}
    - Level: ${data.avatar.level}
    - XP Progress: ${data.avatar.xpProgress}%
    - Rating: ${data.avatar.rating}



General:

    - Full Name: ${data.general.fullName}
    - Gender: ${data.general.gender}
    - Country Name: ${data.general.countryName}
    - Country Code: ${data.general.countryCode}



Personal:

    - Email: ${data.personal.email}
    - Phone Number: ${data.personal.phoneNumber.replace(
        /(\+\d{2})(\d{3})(\d{3})(\d{4})/,
        "($1) $2 $3 $4"
    )}
    - Birthdate: ${birthdate.innerHTML}



Job:

    - Title: ${data.job.title}
    - Programming Language: ${data.job.progLang}
    - Experience: ${data.job.experience}



Billing:

    - Payment Method: ${data.billing.paymentMethod}
    - Plan: ${data.billing.plan}
    - Subscription: ${data.billing.subscription}



Skills:

    ${data.skills.map((group) => `- ${group.join(", ")}`).join("\n    ")}



Social:

    - Facebook: ${data.social.facebook}
    - Twitter: ${data.social.twitter}
    - Linkedin: ${data.social.linkedin}
    - Github: ${data.social.github}
`;

            // Create a Blob with the formatted data
            const blob = new Blob([formattedData], { type: "text/plain" });

            // Create a temporary URL for the Blob
            const url = URL.createObjectURL(blob);

            // Create a link element to trigger the download
            const a = document.createElement("a");
            a.href = url;
            a.download = `${data.general.fullName} - Profile Data.txt`;
            a.click();

            // Clean up by revoking the temporary URL
            URL.revokeObjectURL(url);
        });
}).catch((error) => console.error("Fetch error:", error));