const plans = Array.from(document.querySelectorAll(".plans-container .plan"));

fetch("json/profile.json")
    .then((response) => response.json())
    .then((data) => {
        document.querySelector(`.plan.${data.billing.plan.toLowerCase()}`).classList.add("current");
    })
    .then(() => {
        plans.map((plan) => {
            if (plan.classList.contains("current")) {
                let parag = document.createElement("p");
                parag.innerHTML = "This Is Your Current Plan";
                plan.appendChild(parag);
            } else {
                let link = document.createElement("a");
                link.href = "#";
                link.innerHTML = "Join";
                plan.appendChild(link);
            }
        });
    });

plans.map((plan) => plan.setAttribute("data-aos", "zoom-in-down"));
