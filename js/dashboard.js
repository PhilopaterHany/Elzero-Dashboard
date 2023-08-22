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
const counterElements = document.querySelectorAll(".box.tickets .ticket span:first-of-type");
const progress = document.querySelector(".box.targets");
const progressSpans = document.querySelectorAll(".box.targets .progress > span");
let countStarted = false;
let progressStarted = false;

window.addEventListener("scroll", () => {
    if (window.scrollY >= progress.offsetTop - 300) {
        if (!progressStarted) {
            progressSpans.forEach((prog) => prog.style.width = prog.dataset.width);
        }
        progressStarted = true;
    }
});

function startCount(ele) {
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == ele.dataset.goal) clearInterval(count);
    }, 1500 / ele.dataset.goal);
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= counters.offsetTop - 300) {
        if (!countStarted) {
            counterElements.forEach((num) => startCount(num));
        }
        countStarted = true;
    }
});

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

function updateDoneTasksNumber() {
    progressSpan.innerHTML = `${
        Array.from(document.querySelectorAll(".task.done")).length
    }/${Array.from(document.querySelectorAll(".task")).length} Completed`;

    if (Array.from(document.querySelectorAll(".task.done")).length === Array.from(document.querySelectorAll(".task")).length) {
        progressSpan.classList.add("good");
    } else {
        if (progressSpan.classList.contains("good")) {
            progressSpan.classList.remove("good");
        }
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
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
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

fetch("json/posts.json")
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
                postsBullets.forEach((bullet) => bullet.classList.remove("active"));
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
    });

fetch("https://api.github.com/users/PhilopaterHany")
    .then((response) => response.json())
    .then((user) => githubFollowersSpan.innerHTML = `${user.followers} Followers`);
