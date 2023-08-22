const plans = Array.from(document.querySelectorAll(".plans-container .plan"));

plans.map((plan) => {
    plan.setAttribute("data-aos", "zoom-in-down");
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
