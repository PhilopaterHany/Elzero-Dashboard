const bar = document.getElementById("bar");
bar.height = 550;
const barConfig = new Chart(bar, {
    type: "bar",
    data: {
        labels: ["Eating", "Coding", "Drinking", "Working out", "Sleeping"],
        datasets: [
            {
                label: "Activites",
                data: [38, 50, 29, 46, 21],
                backgroundColor: ["#0075ff", "#f59e0b", "#22c55e", "#f44336", "#9c27b0"],
                borderWidth: 0,
            },
        ],
    },
    options: {
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                },
            },
        },
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: "50%",
                delay: 500,
            },
        },
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
    },
});

const bubble = document.getElementById("bubble");
bubble.height = 200;
const myBubbleChart = new Chart(bubble, {
    type: "bubble",
    data: {
        labels: ["Eating", "Coding", "Drinking", "Working out", "Sleeping"],
        datasets: [
            {
                label: "Activities",
                data: [
                    {
                        x: 38,
                        y: 19,
                        r: 8,
                    },
                    {
                        x: 50,
                        y: 22,
                        r: 11,
                    },
                    {
                        x: 29,
                        y: 4,
                        r: 8,
                    },
                    {
                        x: 46,
                        y: 2,
                        r: 10,
                    },
                    {
                        x: 21,
                        y: 9,
                        r: 5,
                    },
                ],
                backgroundColor: ["#0075ff", "#f59e0b", "#22c55e", "#f44336", "#9c27b0"],
            },
        ],
    },
    options: {
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: "50%",
                delay: 500,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    },
});

const doughnut = document.getElementById("doughnut");
const doughnutConfig = new Chart(doughnut, {
    type: "doughnut",
    data: {
        labels: ["Eating", "Coding", "Drinking", "Working out", "Sleeping"],
        datasets: [
            {
                label: "Activities",
                data: [38, 50, 29, 46, 21],
                backgroundColor: ["#0075ff", "#f59e0b", "#22c55e", "#f44336", "#9c27b0"],
                borderWidth: 0,
            },
        ],
    },
    options: {
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: "50%",
                delay: 500,
            },
        },
        responsive: true,
        maintainAspectRatio: true,
    },
});

const line = document.getElementById("line");
line.height = 200;
const lineConfig = new Chart(line, {
    type: "line",
    data: {
        labels: ["Eating", "Coding", "Drinking", "Working out", "Sleeping"],
        datasets: [
            {
                label: "Activities",
                data: [38, 50, 29, 46, 21],
                fill: false,
                borderColor: "#2196f3",
                backgroundColor: "#0d69d5",
                borderWidth: 1,
            },
        ],
    },
    options: {
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: "50%",
                delay: 500,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    },
});

const pie = document.getElementById("pie");
const pieConfig = new Chart(pie, {
    type: "pie",
    data: {
        labels: ["Eating", "Coding", "Drinking", "Working out", "Sleeping"],
        datasets: [
            {
                label: "Activites",
                data: [38, 50, 29, 46, 21],
                backgroundColor: ["#0075ff", "#f59e0b", "#22c55e", "#f44336", "#9c27b0"],
                borderWidth: 0,
            },
        ],
    },
    options: {
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: "50%",
                delay: 500,
            },
        },
        responsive: true,
        maintainAspectRatio: true,
    },
});

const polar = document.getElementById("polar");
const polarConfig = new Chart(polar, {
    type: "polarArea",
    data: {
        labels: ["Eating", "Coding", "Drinking", "Working out", "Sleeping"],
        datasets: [
            {
                label: "Activities",
                data: [38, 50, 29, 46, 21],
                backgroundColor: ["#0075ff", "#f59e0b", "#22c55e", "#f44336", "#9c27b0"],
                borderWidth: 0,
            },
        ],
    },
    options: {
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: "50%",
                delay: 500,
            },
        },
        responsive: true,
        maintainAspectRatio: true,
    },
});

const radar = document.getElementById("radar");
const radarConfig = new Chart(radar, {
    type: "radar",
    data: {
        labels: ["Eating", "Coding", "Drinking", "Sleeping", "Working out", "Watching Movies", "Gaming"],
        datasets: [
            {
                label: "My First Dataset",
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                pointBackgroundColor: "rgb(255, 99, 132)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 99, 132)",
            },
            {
                label: "My Second Dataset",
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgb(54, 162, 235)",
                pointBackgroundColor: "rgb(54, 162, 235)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(54, 162, 235)",
            },
        ],
    },
    options: {
        elements: {
            line: {
                borderWidth: 3,
            },
            plugins: {
                deferred: {
                    xOffset: 150,
                    yOffset: "50%",
                    delay: 500,
                },
            },
            responsive: true,
            maintainAspectRatio: true,
        },
    },
});

const mixed = document.getElementById("mixed");
mixed.height = 300;
const mixedConfig = new Chart(mixed, {
    type: "bar",
    data: {
        labels: ["Eating", "Coding", "Drinking", "Working out", "Sleeping"],
        datasets: [
            {
                label: "Activities Bar",
                data: [38, 50, 29, 46, 21],
                backgroundColor: ["#0075ff", "#f59e0b", "#22c55e", "#f44336", "#9c27b0"],
                borderWidth: 0,
            },
            {
                label: "Activities Line",
                data: [44, 56, 35, 52, 27],
                type: "line",
                fill: false,
                borderColor: "#0075ff",
                backgroundColor: "#0d69d5",
                borderWidth: 1,
                order: 2,
            },
        ],
    },
    options: {
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                },
            },
        },
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: "50%",
                delay: 500,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    },
});
