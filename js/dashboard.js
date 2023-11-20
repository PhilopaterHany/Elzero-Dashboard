const nameJobBox = document.querySelector(".box.welcome .name-job");
const projectsCountBox = document.querySelector(".box.welcome .projects-count");
const moneyEarnedBox = document.querySelector(".box.welcome .money-earned");
const welcomeBoxHeader = document.querySelector(".box.welcome .box-header");
const draftTitle = document.querySelector(".draft form input");
const draftTxt = document.querySelector(".draft form textarea");
const draftBtn = document.querySelector(".draft form button");
const tasks = Array.from(document.querySelectorAll(".task"));
const progressSpan = document.getElementById("tasks-progress");
const uncheckTaskBtns = Array.from(document.querySelectorAll(".task .uncheck-btn"));
const checkTaskBtns = Array.from(document.querySelectorAll(".task .check-btn"));
const deleteTaskBtns = Array.from(document.querySelectorAll(".task .delete-btn"));
const postsBulletsHolder = document.getElementById("bullets");
const prevPostArrow = document.getElementById("previous-post");
const nextPostArrow = document.getElementById("next-post");
const postImage = document.querySelector("#post-heading img");
const postName = document.querySelector("#post-heading div h6");
const postTime = document.querySelector("#post-heading div span");
const postBody = document.getElementById("post-body");
const postLikes = document.getElementById("post-likes");
const postComments = document.getElementById("post-comments");
const githubFollowersSpan = document.querySelector(".social-media-account.github span");
const counters = document.querySelector(".box.tickets");
const counterElements = Array.from(document.querySelectorAll(".box.tickets .ticket span:first-of-type"));
const progress = document.querySelector(".box.targets");
const progressSpans = Array.from(document.querySelectorAll(".box.targets .progress > span"));
const tableBody = document.querySelector("table tbody");
const socialMediaLinks = {
    facebook: "https://facebook.com/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    gmail: "mailto:",
    linkedin: "https://www.linkedin.com/in/",
};
let countStarted = false;
let progressStarted = false;

window.addEventListener("load", () => {
    if (localStorage.draft) {
        let stringifiedDraft = localStorage.getItem("draft");
        let draftObject = JSON.parse(stringifiedDraft);
        draftTitle.value = draftObject.title;
        draftTxt.value = draftObject.text;
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= progress.offsetTop - 300) {
        if (!progressStarted) {
            progressSpans.forEach((prog) => (prog.style.width = prog.dataset.width));
    }
        progressStarted = true;
    }

    if (window.scrollY >= counters.offsetTop - 300) {
        if (!countStarted)
            counterElements.forEach((num) => startCount(num));
        countStarted = true;
    }
});

draftBtn.addEventListener("click", () => {
    if (draftTitle.value == "" || draftTxt.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill in the draft title and content please!",
        });
    } else {
        let draftObject = { title: draftTitle.value, text: draftTxt.value };
        let stringifiedDraft = JSON.stringify(draftObject);
        localStorage.setItem("draft", stringifiedDraft);
        Swal.fire({
            icon: "success",
            title: "Your draft has been saved.",
            showConfirmButton: true,
            timer: 1500,
        });
    }
});

function startCount(ele) {
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == ele.dataset.goal) clearInterval(count);
    }, 1500 / ele.dataset.goal);
}

function taskIcons() {
    tasks.map((task) => {
        if (task.classList.contains("done")) {
            task.children[1].style.display = "inline-block";
            task.children[2].style.display = "none";
        } else {
            task.children[1].style.display = "none";
            task.children[2].style.display = "inline-block";
        }
    });
}

function projectStatus(progress) {
    if (progress == -1) {
        return "rejected";
    } else if (progress == 0) {
        return "pending";
    } else if (progress == 100) {
        return "completed";
    }
    return "in progress";
}

function updateDoneTasksNumber() {
    progressSpan.innerHTML = `${Array.from(document.querySelectorAll(".task.done")).length}/${Array.from(document.querySelectorAll(".task")).length} Completed`;

    if (Array.from(document.querySelectorAll(".task.done")).length === Array.from(document.querySelectorAll(".task")).length) {
        progressSpan.classList.add("good");
    } else {
        if (progressSpan.classList.contains("good")) progressSpan.classList.remove("good");
    }
}

taskIcons();
updateDoneTasksNumber();

uncheckTaskBtns.map((uncheckBtn) => {
    uncheckBtn.addEventListener("click", () => {
        uncheckBtn.parentElement.classList.remove("done");
        taskIcons();
        updateDoneTasksNumber();
    });
});

checkTaskBtns.map((checkBtn) => {
    checkBtn.addEventListener("click", () => {
        checkBtn.parentElement.classList.add("done");
        taskIcons();
        updateDoneTasksNumber();
    });
});

deleteTaskBtns.map((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your task has been deleted.", "success");
                deleteBtn.parentElement.remove();
                updateDoneTasksNumber();
            }
        });
    });
});

fetch("../json/profile.json")
    .then((response) => response.json())
    .then((data) => {
        let userName = document.createElement("p");
        // userName.innerHTML = data.general.fullName.slice(0, data.general.fullName.indexOf(" "));
        userName.innerHTML = data.avatar.nickName;
        welcomeBoxHeader.appendChild(userName);

        nameJobBox.appendChild(
            document.createTextNode(
                data.general.fullName.slice(
                    0,
                    data.general.fullName.indexOf(" ")
                )
            )
        );

        moneyEarnedBox.appendChild(
            document.createTextNode(`$${data.job.moneyEarned}`)
        );
        let moneySpan = document.createElement("span");
        moneySpan.innerHTML = "Earned";
        moneyEarnedBox.appendChild(moneySpan);

        for (const key in socialMediaLinks) {
            document.querySelector(`.social-media-account.${key} a`).href = `${
                socialMediaLinks[key]
            }${data.social[key] || data.personal.email}`;
        }

        fetch(`https://api.github.com/users/${data.social.github}`)
            .then((response) => response.json())
            .then((user) => {
                githubFollowersSpan.innerHTML = `${user.followers} Followers`;

                let nameJobSpan = document.createElement("span");
                nameJobSpan.innerHTML = data.job.title;
                nameJobBox.appendChild(nameJobSpan);

                projectsCountBox.appendChild(
                    document.createTextNode(user.public_repos)
                );
                let projectsSpan = document.createElement("span");
                projectsSpan.innerHTML = "Projects";
                projectsCountBox.appendChild(projectsSpan);
            })
            .catch((error) => console.error("GitHub API fetch error:", error));
    })
    .catch((error) => console.error("Fetch error:", error));

fetch("../json/posts.json")
    .then((response) => response.json())
    .then((posts) => {
        for (let i = 0; i < posts.length; i++) {
            let bullet = document.createElement("span");
            bullet.setAttribute("data-index", i);
            postsBulletsHolder.appendChild(bullet);
        }
        return posts;
    })
    .then((posts) => {
        const postsBullets = document.querySelectorAll("#bullets span");
        function arrowChecker(index, arrow) {
            if (postsBullets[index].classList.contains("active")) {
                arrow.classList.add("disabled");
            } else {
                arrow.classList.remove("disabled");
            }
        }
        prevPostArrow.onclick = () => {
            if (!prevPostArrow.classList.contains("disabled")) {
                document.querySelector("#bullets span.active").previousElementSibling.click();
            }
        };
        nextPostArrow.onclick = () => {
            if (!nextPostArrow.classList.contains("disabled")) {
                document.querySelector("#bullets span.active").nextElementSibling.click();
            }
        };

        for (let i = 0; i < posts.length; i++) {
            postsBullets[i].addEventListener("click", () => {
                postsBullets.forEach((bullet) =>bullet.classList.remove("active"));
                postsBullets[i].classList.add("active");
                arrowChecker(0, prevPostArrow);
                arrowChecker(postsBullets.length - 1, nextPostArrow);

                postImage.src = posts[i].image;
                postImage.alt = `${posts[i].name}'s Avatar`;
                postName.innerHTML = posts[i].name;
                postTime.innerHTML = posts[i].time;
                postBody.innerHTML = posts[i].content;
                postLikes.innerHTML = posts[i].likes;
                postComments.innerHTML = posts[i].comments;
            });
        }

        postsBullets[0].click();
    }).catch((error) => console.error("Fetch error:", error));

fetch("../json/projects.json")
    .then((response) => response.json())
    .then((projects) => {
        projects.forEach((project) => {
            let projHolder = document.createElement("tr");
            tableBody.appendChild(projHolder);

            let projName = document.createElement("td");
            projName.innerHTML = project.name;
            projHolder.appendChild(projName);

            let startDate = document.createElement("td");
            startDate.innerHTML = project.startDate;
            projHolder.appendChild(startDate);

            let client = document.createElement("td");
            client.innerHTML = project.client;
            projHolder.appendChild(client);

            let profit = document.createElement("td");
            profit.innerHTML = project.profit + "$";
            projHolder.appendChild(profit);

            let team = document.createElement("td");
            for (let i = 0; i < project.team.length; i++) {
                let member = document.createElement("img");
                member.src = project.team[i];
                member.alt = `Team Member ${project.team[i].slice(project.team[i].indexOf("-") + 1, project.team[i].indexOf("."))}`;
                team.appendChild(member);
            }
            projHolder.appendChild(team);

            let status = document.createElement("td");
            let word = document.createElement("span");
            word.innerHTML = projectStatus(project.progress);
            word.className = projectStatus(project.progress).replace(" ", "-");
            status.appendChild(word);
            projHolder.appendChild(status);
        });
    }).catch((error) => console.error("Fetch error:", error));
