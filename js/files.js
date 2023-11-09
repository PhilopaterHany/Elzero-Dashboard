const filesContainer = document.getElementById("files-container");

fetch("../json/files.json")
    .then((response) => response.json())
    .then((files) => {
        files.map((file) => {
            let fileDiv = document.createElement("div");
            fileDiv.className = "box file";
            fileDiv.setAttribute("data-aos", "fade-down-left");
            filesContainer.appendChild(fileDiv);

            let downloadIcon = document.createElement("i");
            downloadIcon.className = "fa-solid fa-download";
            fileDiv.appendChild(downloadIcon);

            let imageHolder = document.createElement("div");
            imageHolder.className = "image-holder";
            fileDiv.appendChild(imageHolder);

            let fileImg = document.createElement("img");
            fileImg.src = file.icon;
            imageHolder.appendChild(fileImg);

            let fileName = document.createElement("h6");
            fileName.innerHTML = file.name;
            fileDiv.appendChild(fileName);

            let fileUploader = document.createElement("p");
            fileUploader.innerHTML = file.uploader;
            fileDiv.appendChild(fileUploader);

            let fileInfo = document.createElement("div");
            fileInfo.className = "file-info";
            fileDiv.appendChild(fileInfo);

            let fileDate = document.createElement("span");
            fileDate.className = "date";
            fileDate.innerHTML = file.date;
            fileInfo.appendChild(fileDate);

            let fileSize = document.createElement("span");
            fileSize.className = "size";
            fileSize.innerHTML = file.size;
            fileInfo.appendChild(fileSize);
        });
    }).catch((error) => console.error("Fetch error:", error));
