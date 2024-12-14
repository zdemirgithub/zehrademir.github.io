// Function to create a chart for each project showing programming language usage
function createChart(ctx, data) {
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['JavaScript', 'Python', 'SQL', 'CSS', 'Others'],
            datasets: [{
                label: 'Programming Language Usage',
                data: data, // This is passed as the project data array
                backgroundColor: ['#FFADAD', '#FFD6A5', '#FDFFB6', '#C7E9B0', '#D4E157'],
                borderColor: ['#FF7F7F', '#FFB300', '#FFEB3B', '#8BC34A', '#A5D6A7'],
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
    { project1: [60, 25, 10, 5, 0] },  // Project 1: E-commerce Web App
    { project2: [50, 20, 20, 5, 5] },  // Project 2: Social Media Dashboard
    { project3: [65, 10, 15, 10, 0] },  // Project 3: Weather Forecast App
    { project4: [40, 10, 30, 15, 5] },  // Project 4: Task Management App
    { project5: [70, 0, 20, 10, 0] },  // Project 5: Real-time Chat App
    { project6: [50, 30, 10, 5, 5] },  // Project 6: Personal Finance Tracker
    { project7: [10, 60, 10, 5, 15] },  // Project 7: AI Image Recognition
    { project8: [10, 0, 70, 10, 10] },  // Project 8: Blogging Platform
    { project9: [60, 0, 30, 10, 0] },  // Project 9: Video Streaming App
    { project10: [30, 40, 10, 20, 0] },  // Project 10: Portfolio Website
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
    
    createChart(ctx1, projectData[0].project1);
    createChart(ctx2, projectData[1].project2);
    createChart(ctx3, projectData[2].project3);
    createChart(ctx4, projectData[3].project4);
    createChart(ctx5, projectData[4].project5);
    createChart(ctx6, projectData[5].project6);
    createChart(ctx7, projectData[6].project7);
    createChart(ctx8, projectData[7].project8);
    createChart(ctx9, projectData[8].project9);
    createChart(ctx10, projectData[9].project10);
});

