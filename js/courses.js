const coursesContainer = document.getElementById("courses-container");

fetch("../json/courses.json")
    .then((response) => response.json())
    .then((courses) => {
        courses.map((course) => {
            let courseDiv = document.createElement("div");
            courseDiv.className = "box course";
            courseDiv.setAttribute("data-aos", "fade-up-left");
            coursesContainer.appendChild(courseDiv);

            let coverImg = document.createElement("img");
            coverImg.src = course.cover;
            coverImg.alt = course.name;
            coverImg.className = "cover";
            courseDiv.appendChild(coverImg);

            let instructorImg = document.createElement("img");
            instructorImg.src = course.instructor;
            instructorImg.alt = `Team Member ${course.instructor.slice(course.instructor.indexOf("-") + 1, course.instructor.indexOf("."))}`;
            instructorImg.className = "instructor";
            courseDiv.appendChild(instructorImg);

            let nameInfo = document.createElement("div");
            nameInfo.className = "name";
            courseDiv.appendChild(nameInfo);

            let courseName = document.createElement("h4");
            courseName.innerHTML = course.name;
            nameInfo.appendChild(courseName);

            let courseDesc = document.createElement("p");
            courseDesc.innerHTML = course.description;
            nameInfo.appendChild(courseDesc);

            let courseData = document.createElement("div");
            courseData.className = "info";
            courseDiv.appendChild(courseData);

            let courseParticipants = document.createElement("span");
            courseParticipants.innerHTML = course.participants;
            courseData.appendChild(courseParticipants);

            let coursePrice = document.createElement("span");
            coursePrice.innerHTML = course.price;
            courseData.appendChild(coursePrice);

            let courseInfoSpan = document.createElement("span");
            courseInfoSpan.className = "title";
            courseInfoSpan.innerHTML = "Course Info";
            courseData.appendChild(courseInfoSpan);
        });
    });
