// Function to create a chart for each project showing programming language usage
function createChart(ctx, data) {
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['JavaScript', 'Python', 'SQL', 'CSS', 'Others'],
            datasets: [{
                label: 'Programming Language Usage',
                data: data, // This is passed as the project data array
                backgroundColor: ['#B2D8B2', '#B7D9E2', '#D1E2D3', '#A8D1D1', '#C4E1F5'],
                borderColor: ['#A3D8A3', '#9CC9D0', '#A8D1B8', '#8CC4C4', '#BDD8F1'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            }
        });
}

// Dummy data for the projects (Programming Language usage ratio for each project)
const projectData = [
    { project1: [60, 25, 10, 5, 0] }, // Project 1 (JavaScript, Python, SQL, CSS, Others)
    { project2: [50, 20, 20, 5, 5] }, // Project 2 (Next.js, PostgreSQL, Prisma, Tailwind, Others)
    { project3: [40, 40, 10, 5, 5] }, // Project 3 (Vue.js, Firebase, Node.js, CSS, Others)
    { project4: [50, 20, 15, 10, 5] }, // Project 4 (React.js, GraphQL, MongoDB, CSS, Others)
    { project5: [45, 25, 15, 10, 5] }, // Project 5 (Next.js, MySQL, Tailwind CSS, Others)
    { project6: [50, 30, 10, 5, 5] }, // Project 6 (Vue.js, Firebase, Tailwind CSS, Others)
    { project7: [60, 20, 10, 5, 5] }, // Project 7 (React.js, Node.js, MongoDB, CSS, Others)
    { project8: [55, 20, 15, 5, 5] }, // Project 8 (Next.js, PostgreSQL, Prisma, Others)
    { project9: [60, 25, 10, 5, 0] }, // Project 9 (React.js, Node.js, MongoDB, CSS, Others)
    { project10: [40, 40, 10, 5, 5] }  // Project 10 (Vue.js, OpenWeather API, Tailwind CSS, Others)
];

// When the page is loaded, generate the charts for all 10 projects
document.addEventListener("DOMContentLoaded", () => {
    const ctx1 = document.getElementById('project1-chart').getContext('2d');
    const ctx2 = document.getElementById('project2-chart').getContext('2d');
    const ctx3 = document.getElementById('project3-chart').getContext('2d');
    const ctx4 = document.getElementById('project4-chart').getContext('2d');
    const ctx5 = document.getElementById('project5-chart').getContext('2d');
    const ctx6 = document.getElementById('project6-chart').getContext('2d');
    const ctx7 = document.getElementById('project7-chart').getContext('2d');
    const ctx8 = document.getElementById('project8-chart').getContext('2d');
    const ctx9 = document.getElementById('project9-chart').getContext('2d');
    const ctx10 = document.getElementById('project10-chart').getContext('2d');

    createChart(ctx1, [60, 25, 10, 5, 0]);
    createChart(ctx2, [50, 20, 20, 5, 5]);
    createChart(ctx3, [40, 40, 10, 5, 5]);
    createChart(ctx4, [50, 20, 15, 10, 5]);
    createChart(ctx5, [45, 25, 15, 10, 5]);
    createChart(ctx6, [50, 30, 10, 5, 5]);
    createChart(ctx7, [60, 20, 10, 5, 5]);
    createChart(ctx8, [55, 20, 15, 5, 5]);
    createChart(ctx9, [60, 25, 10, 5, 0]);
    createChart(ctx10, [40, 40, 10, 5, 5]);
});
