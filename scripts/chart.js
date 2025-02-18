const xValues = ["Approved", "Pending", "Rejected"];
const yValues = [50, 50, 0];
const barColors = [
    "#4CAF50",
    "#FFC107",
    "#F44336"
];

new Chart("myChart", {
    type: "doughnut",
    data: {
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
            }
        }
    }
});