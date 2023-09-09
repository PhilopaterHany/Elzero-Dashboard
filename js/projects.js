const projectsContainer = document.getElementById("projects-container");

function progressColor(progress) {
    if (progress <= 25) {
        return "#f44336";
    } else if (progress > 25 && progress <= 50) {
        return "#f59e0b";
    } else if (progress > 50 && progress <= 75) {
        return "#0d69d5";
    } else {
        return "#22c55e";
    }
}

fetch("../json/projects.json")
    .then((response) => response.json())
    .then((projects) => {
        projects.map((project) => {
            let projDiv = document.createElement("div");
            projDiv.className = "box project";
            projDiv.setAttribute("data-aos", "fade-down-right");
            projectsContainer.appendChild(projDiv);

            let projDate = document.createElement("span");
            projDate.innerHTML = project.startDate;
            projDiv.appendChild(projDate);

            let projName = document.createElement("h4");
            projName.innerHTML = project.name;
            projDiv.appendChild(projName);

            let projDesc = document.createElement("p");
            projDesc.innerHTML = project.description;
            projDiv.appendChild(projDesc);

            let teamImgs = document.createElement("div");
            teamImgs.className = "team-images";
            projDiv.appendChild(teamImgs);

            for (imgPath in project.team) {
                let member = document.createElement("a");
                member.href = "#";

                let image = document.createElement("img");
                image.src = project.team[imgPath];
                image.alt = `Team Member ${project.team[imgPath].slice(project.team[imgPath].indexOf("-") + 1, project.team[imgPath].indexOf("."))}`;
                member.appendChild(image);

                teamImgs.appendChild(member);
            }

            let keywordsContainer = document.createElement("div");
            keywordsContainer.className = "keywords-container";
            projDiv.appendChild(keywordsContainer);

            for (keyword in project.keywords) {
                let word = document.createElement("span");
                word.innerHTML = project.keywords[keyword];
                keywordsContainer.appendChild(word);
            }

            let infoDiv = document.createElement("div");
            infoDiv.className = "info";
            projDiv.appendChild(infoDiv);

            let progressContainer = document.createElement("div");
            progressContainer.className = "progress-container";
            infoDiv.appendChild(progressContainer);

            let progress = document.createElement("span");
            progress.innerHTML = project.progress <= 0 ? "0%" : `${project.progress}%`;
            progress.style.width = project.progress <= 0 ? "0%" : `${project.progress}%`;
            progress.style.backgroundColor = progressColor(project.progress);
            progressContainer.appendChild(progress);

            let profit = document.createElement("span");
            profit.innerHTML = project.profit;
            infoDiv.appendChild(profit);
        });
    });
