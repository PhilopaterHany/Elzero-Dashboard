const notifBtn = document.getElementById("notif-btn");
const notifList = document.getElementById("notif-list");
const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const closeSidebar = document.getElementById("close-sidebar");
const openSidebar = document.getElementById("open-sidebar");
let themeCheckBox = document.querySelector("#sidebar-check input");

notifBtn.addEventListener("click", () => notifList.classList.toggle("show"));
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") notifList.classList.remove("show");
});
window.addEventListener("mouseup", function (e) {
    if (e.target != notifList && e.target.parentNode != notifList) {
        notifList.classList.remove("show");
    }
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show");
    openSidebar.style.display = "inline-block";
    sidebarOverlay.style.position = "unset";
});
openSidebar.addEventListener("click", () => {
    sidebar.classList.add("show");
    openSidebar.style.display = "none";
    sidebarOverlay.style.position = "fixed";
});

window.addEventListener("load", () => {
    if (localStorage.theme) {
        if (localStorage.theme === "dark") {
            document.body.setAttribute("data-theme", "dark");
            themeCheckBox.checked = true;
        } else {
            document.body.setAttribute("data-theme", "light");
            themeCheckBox.checked = false;
        }
    } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.setAttribute("data-theme", "dark");
            themeCheckBox.checked = true;
            localStorage.theme = "dark";
        } else {
            document.body.setAttribute("data-theme", "light");
            themeCheckBox.checked = false;
            localStorage.theme = "light";
        }
    }
});
themeCheckBox.addEventListener("change", (cb) => {
    document.body.setAttribute("data-theme", cb.target.checked ? "dark" : "light");
    cb.target.checked ? (localStorage.theme = "dark") : (localStorage.theme = "light");
});

AOS.init({ duration: "700" });
