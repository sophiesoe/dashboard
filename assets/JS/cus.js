let asideBtn = document.querySelector(".aside-btn");
let aside = document.querySelector(".aside");
let backdrop = document.querySelector(".__backdrop");

asideBtn.addEventListener("click", ()=> {
    aside.classList.add("show");
    backdrop.classList.add("offcanvas-backdrop");
    backdrop.classList.add("show");
    })
backdrop.addEventListener("click", ()=> {
    aside.classList.remove("show");
    backdrop.classList.remove("offcanvas-backdrop");
    backdrop.classList.remove("show");
})

const labels = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(246,166,103)',
        hoverBackgroundColor: 'rgba(248,158,87,0.7)',
        borderColor: 'rgb(246,166,103)',
        borderRadius: 5,
        hoverBorderRadius: 2,
        data: [10, 20, 40, 30, 20, 60, 45, 24, 56, 43, 25, 36, 47, 85, 65, 23, 35, 45, 32, 54, 10],
    },{
        label: 'My Second dataset',
        backgroundColor: 'rgb(246,204,172)',
        hoverBackgroundColor: 'rgb(253,230,211)',
        borderColor: 'rgb(246,204,172)',
        borderRadius: 5,
        hoverBorderRadius: 2,
        data: [21, 40, 25, 40, 20, 30, 25, 24, 26, 34, 10, 36, 27, 67, 25, 73, 30, 35, 23, 18, 21],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        family: "'Dosis', sans-serif",
                        weight: 'bold',
                        size: 7.8,
                    }
                }
            },
            y: {
                grid: {
                    borderDash: [5],
                    borderColor: 'transparent'
                },
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 30,
                    font: {
                        family: "'Dosis', sans-serif",
                        weight: 'bold',
                        size: 7.8,
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    font: {
                        family:"'Dosis', sans-serif",
                        weight: 'bold',
                    }
                }
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// data table
$(document).ready(function() {
    $('#table').DataTable({
        pageLength: 5,
        responsive: {
            details: true,
        }
    } );
})

// visitor
const vLabels = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUNE',
];

const vData = {
    labels: vLabels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(246,166,103)',
        borderColor: 'rgb(246,166,103)',
        hoverBackgroundColor: 'rgb(250,199,170)',
        borderRadius: 8,
        hoverBorderRadius: 3,
        data: [20, 40, 15, 45, 20, 30],
    },{
        label: 'My Second dataset',
        backgroundColor: 'rgb(172,216,246)',
        hoverBackgroundColor: 'rgba(188,229,255,0.75)',
        borderColor: 'rgb(172,216,246)',
        borderRadius: 8,
        hoverBorderRadius: 3,
        data: [36, 57, 27, 38, 23, 55],
    }]
};

const vConfig = {
    type: 'bar',
    data: vData,
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        family: "'Dosis', sans-serif",
                        weight: 'bold',
                        size: 7.8,
                    }
                }
            },
            y: {
                grid: {
                    borderDash: [5],
                    borderColor: 'transparent'
                },
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 20,
                    font: {
                        family: "'Dosis', sans-serif",
                        weight: 'bold',
                        size: 7.8,
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    font: {
                        family:"'Dosis', sans-serif",
                        weight: 'bold',
                    }
                }
            }
        }
    }
};


const myVisitor = new Chart(
    document.getElementById('myVisitors'),
    vConfig
);