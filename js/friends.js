const friendsContainer = document.getElementById("friends-container");

fetch("json/friends.json")
    .then((response) => response.json())
    .then((friends) => {
        friends.map((friend) => {
            let friendDiv = document.createElement("div");
            friendDiv.className = "box friend";
            friendDiv.setAttribute("data-aos", "fade-up-left");
            friendsContainer.appendChild(friendDiv);

            let contact = document.createElement("div");
            contact.className = "contact";
            friendDiv.appendChild(contact);

            let phoneHolder = document.createElement("a");
            phoneHolder.className = "icon-holder";
            phoneHolder.href = friend.phoneNumber;
            phoneHolder.target = "_blank";
            contact.appendChild(phoneHolder);

            let phoneIcon = document.createElement("i");
            phoneIcon.className = "fa-solid fa-phone";
            phoneHolder.appendChild(phoneIcon);

            let emailHolder = document.createElement("a");
            emailHolder.className = "icon-holder";
            emailHolder.href = `mailto:${friend.email}`;
            emailHolder.target = "_blank";
            contact.appendChild(emailHolder);

            let emailIcon = document.createElement("i");
            emailIcon.className = "fa-regular fa-envelope";
            emailHolder.appendChild(emailIcon);

            let mainInfo = document.createElement("div");
            mainInfo.className = "main-info";
            friendDiv.appendChild(mainInfo);

            let image = document.createElement("img");
            image.src = friend.image;
            image.alt = friend.name;
            mainInfo.appendChild(image);

            let name = document.createElement("h4");
            name.innerHTML = friend.name;
            mainInfo.appendChild(name);

            let job = document.createElement("p");
            job.innerHTML = friend.job;
            mainInfo.appendChild(job);

            let dataHolder = document.createElement("div");
            dataHolder.className = "data";
            friendDiv.appendChild(dataHolder);

            let data = document.createElement("ul");
            dataHolder.appendChild(data);

            let friendsLi = document.createElement("li");
            friendsLi.innerHTML = `${friend.friends} Friends`;
            data.appendChild(friendsLi);

            let projectsLi = document.createElement("li");
            projectsLi.innerHTML = `${friend.projects} Projects`;
            data.appendChild(projectsLi);

            let articlesLi = document.createElement("li");
            articlesLi.innerHTML = `${friend.articles} Articles`;
            data.appendChild(articlesLi);

            if (friend.vip) {
                let vipLogo = document.createElement("span");
                vipLogo.className = "vip";
                vipLogo.innerHTML = "vip";
                data.appendChild(vipLogo);
            }

            let dateBtns = document.createElement("div");
            dateBtns.className = "date-btns";
            friendDiv.appendChild(dateBtns);

            let date = document.createElement("span");
            date.innerHTML = `Joined on ${friend.joinDate}`;
            dateBtns.appendChild(date);

            let btns = document.createElement("div");
            dateBtns.appendChild(btns);

            let profileBtn = document.createElement("a");
            profileBtn.href = "profile.html";
            profileBtn.className = "profile-button";
            profileBtn.innerHTML = "Profile";
            btns.appendChild(profileBtn);

            let removeBtn = document.createElement("a");
            removeBtn.className = "remove-button";
            removeBtn.href = "#";
            removeBtn.innerHTML = "Remove";
            btns.appendChild(removeBtn);
        });
    });
