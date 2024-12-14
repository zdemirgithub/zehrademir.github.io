// Data for the programming languages used in each project
const projectData = [
    {
        name: "E-Commerce Web App",
        languages: {
            JavaScript: 60,
            NodeJS: 30,
            MongoDB: 10
        }
    },
    {
        name: "Real-Time Chat Application",
        languages: {
            JavaScript: 50,
            VueJS: 40,
            Firebase: 10
        }
    },
    {
        name: "Task Management System",
        languages: {
            Python: 50,
            Flask: 30,
            PostgreSQL: 20
        }
    },
    {
        name: "Blogging Platform",
        languages: {
            JavaScript: 40,
            React: 30,
            NodeJS: 20,
            MongoDB: 10
        }
    },
    {
        name: "Weather App",
        languages: {
            JavaScript: 60,
            React: 40
        }
    },
    {
        name: "Portfolio Website",
        languages: {
            HTML: 20,
            CSS: 30,
            JavaScript: 50
        }
    },
    {
        name: "Online Learning Platform",
        languages: {
            PHP: 50,
            MySQL: 30,
            JavaScript: 20
        }
    },
    {
        name: "Fitness Tracker App",
        languages: {
            JavaScript: 40,
            ReactNative: 50,
            Firebase: 10
        }
    },
    {
        name: "Online Shopping Cart",
        languages: {
            JavaScript: 40,
            NodeJS: 30,
            Express: 20,
            MongoDB: 10
        }
    },
    {
        name: "Social Media Dashboard",
        languages: {
            JavaScript: 50,
            React: 30,
            Redux: 20
        }
    }
];

// Helper function to create the chart
function createChart(projectId, data) {
    const ctx = document.getElementById(projectId).getContext('2d');
    
    new Chart(ctx, {
        type: 'pie',  // Using a pie chart to represent the percentage of programming languages used
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: ['#ff9a8b', '#ff677d', '#d4a5a5', '#392f5a', '#1e3d58'],
                hoverBackgroundColor: ['#ff9a8b', '#ff677d', '#d4a5a5', '#392f5a', '#1e3d58'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });
}

// Initialize charts for all projects
window.onload = function() {
    projectData.forEach((project, index) => {
        createChart(`chart${index + 1}`, project.languages);
    });
};

