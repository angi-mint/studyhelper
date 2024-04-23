import Chart from "chart.js/auto";
function createPieChart(canvas: HTMLCanvasElement,values: number[], labels: string[]) {
    new Chart(canvas, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Zeit in Stunden',
                data: values,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgb(54, 162, 235)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 99, 132)'
                ],
                borderWidth: 1
            }]
        }
    });
}

export {createPieChart }