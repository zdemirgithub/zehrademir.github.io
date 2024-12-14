window.onload = function () {
    // Data for the projects, including programming languages used and their respective percentages
    const projectData = [
        { name: 'E-Commerce Web App', languages: { 'JavaScript': 50, 'Node.js': 30, 'MongoDB': 20 } },
        { name: 'Real-Time Chat Application', languages: { 'JavaScript': 60, 'Vue.js': 30, 'Firebase': 10 } },
        { name: 'Task Management System', languages: { 'Python': 40, 'Flask': 30, 'PostgreSQL': 30 } },
        { name: 'Blogging Platform', languages: { 'JavaScript': 40, 'React': 40, 'Node.js': 10, 'MongoDB': 10 } },
        { name: 'Weather App', languages: { 'JavaScript': 70, 'React': 30 } },
        { name: 'Portfolio Website', languages: { 'HTML': 50, 'CSS': 30, 'JavaScript': 20 } },
        { name: 'Online Learning Platform', languages: { 'PHP': 50, 'MySQL': 30, 'JavaScript': 20 } },
        { name: 'Fitness Tracker App', languages: { 'JavaScript': 50, 'React Native': 40, 'Firebase': 10 } },
        { name: 'Online Shopping Cart', languages: { 'JavaScript': 40, 'Node.js': 30, 'Express': 20, 'MongoDB': 10 } },
        { name: 'Social Media Dashboard', languages: { 'JavaScript': 50, 'React': 30, 'Redux': 10, 'Node.js': 10 } }
    ];

    // Loop through each project and create the charts
    projectData.forEach((project, index) => {
        const canvas = document.getElementById(`chart${index + 1}`);
        const ctx = canvas.getContext('2d');
        const labels = Object.keys(project.languages); // Extract language names
        const data = Object.values(project.languages); // Extract usage percentages

        new Chart(ctx, {
            type: 'pie', // Create pie chart
            data: {
                labels: labels,
                datasets: [{
                    label: 'Languages Used',
                    data: data,
                    backgroundColor: [
                        '#FFB6B9', '#FFC3A0', '#FF677D', '#D4A5A5', '#392F5A', '#6B4226', 
                        '#E0A899', '#FFB84D', '#BC8A5A', '#6B6B6B'
                    ], // Pastel colors for each section
                    borderColor: [
                        '#FF6F61', '#FF9B8E', '#FF3750', '#D46863', '#392F5A', '#6B4226',
                        '#E0A899', '#FFB84D', '#BC8A5A', '#6B6B6B'
                    ], // Darker borders to match pastel sections
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true, // Make the chart responsive to screen size
                plugins: {
                    legend: {
                        position: 'top', // Position of the legend
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Format the tooltip to show percentage
                            }
                        }
                    }
                }
            }
        });
    });
};

