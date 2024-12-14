// Project 1: E-Commerce Web App
var ctx1 = document.getElementById('chart1').getContext('2d');
var chart1 = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['JavaScript', 'Node.js', 'MongoDB'],
        datasets: [{
            label: 'Programming Languages',
            data: [70, 20, 10],
            backgroundColor: ['#FFB3BA', '#FFDFBA', '#FFFAF1'], // Pastel colors
            borderColor: '#FFFFFF',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Comic Sans MS'
                    }
                }
            }
        }
    }
});

// Project 2: Real-Time Chat Application
var ctx2 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['JavaScript', 'Vue.js', 'Firebase'],
        datasets: [{
            label: 'Programming Languages',
            data: [60, 30, 10],
            backgroundColor: ['#D0E9E3', '#F1E3E3', '#F9F4E0'], // Pastel colors
            borderColor: '#FFFFFF',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Comic Sans MS'
                    }
                }
            }
        }
    }
});

// Project 3: Task Management System
var ctx3 = document.getElementById('chart3').getContext('2d');
var chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Python', 'Flask', 'PostgreSQL'],
        datasets: [{
            label: 'Programming Languages',
            data: [50, 30, 20],
            backgroundColor: ['#D8F1F9', '#A8E8F1', '#C8F9E8'],
            borderColor: '#FFFFFF',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Comic Sans MS'
                    }
                }
            }
        }
    }
});

// Project 4: Blogging Platform
var ctx4 = document.getElementById('chart4').getContext('2d');
var chart4 = new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
        datasets: [{
            label: 'Programming Languages',
            data: [40, 30, 20, 10],
            backgroundColor: ['#D1E7F7', '#FFDFD3', '#F5E1D4', '#E0F7E7'],
            borderColor: '#FFFFFF',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Comic Sans MS'
                    }
                }
            }
        }
    }
});

// Project 5: Weather App
var ctx5 = document.getElementById('chart5').getContext('2d');
var chart5 = new Chart(ctx5, {
    type: 'pie',
    data: {
        labels: ['JavaScript', 'React', 'OpenWeather API'],
        datasets: [{
            label: 'Programming Languages',
            data: [60, 30, 10],
            backgroundColor: ['#FFDDC1', '#E2F0CB', '#F3E9D2'],
            borderColor: '#FFFFFF',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Comic Sans MS'
                    }
                }
            }
        }
    }
});

// Project 6: Portfolio Website
var ctx6 = document.getElementById('chart6').getContext('2d');
var chart6 = new Chart(ctx6, {
    type: 'pie',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'React'],
        datasets: [{
            label: 'Programming Languages',
            data: [25, 25, 25, 25],
            backgroundColor: ['#D5F4E6', '#F0E4D7', '#FFBBF2', '#FFF9C4'],
            borderColor: '#FFFFFF',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Comic Sans MS'
                    }
                }
            }
        }
    }
});

// Project 7: Online Learning Platform
var ctx7 = document.getElementById('chart7').getContext('2d');
var chart7 = new Chart(ctx7, {
    type: 'pie',
    data: {
        labels: ['PHP', 'MySQL', 'JavaScript'],
        datasets: [{
            label: 'Programming Languages',
            data: [50, 40, 10],
            backgroundColor: ['#F5D0A9', '#B9D7D5', '#D9E0D1'],
            borderColor: '#FFFFFF',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Comic Sans MS'
                    }
                }
            }
        }
    }
});

// Project 8: Fitness Tracker App
var ctx8 = document.getElementById('chart8').getContext('2d');
var chart8 = new Chart(ctx8, {
    type: 'pie',
    data: {
        labels: ['JavaScript', 'React Native', 'Firebase'],
        datasets: [{
            label: 'Programming Languages',
            data: [50, 40, 10],
            backgroundColor: ['#E2F7F4', '#F1E0C8', '#FFDCFB'],
            borderColor: '#FFFFFF',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Comic Sans MS'
                    }
                }
            }
        }
    }
});

// Project 9: Online Shopping Cart
var ctx9 = document.getElementById('chart9').getContext('2d');
var chart9 = new Chart(ctx9, {
    type: 'pie',
    data: {
        labels: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
        datasets: [{
            label: 'Programming Languages',
            data: [35, 25, 20, 20],
            backgroundColor: ['#D1F5D3', '#F9F5D7', '#F0D7E5', '#FFEBE9'],
            borderColor: '#FFFFFF',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Comic Sans MS'
                    }
                }
            }
        }
    }
});

// Project 10: Social Media Dashboard
var ctx10 = document.getElementById('chart10').getContext('2d');
var chart10 = new Chart(ctx10, {
    type: 'pie',
    data: {
        labels: ['JavaScript', 'React', 'Redux', 'Node.js'],
        datasets: [{
            label: 'Programming Languages',
            data: [40, 30, 20, 10],
            backgroundColor: ['#F7D7E4', '#E2F5D4', '#FFF3E0', '#D8E4F0'],
            borderColor: '#FFFFFF',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Comic Sans MS'
                    }
                }
            }
        }
    }
});
