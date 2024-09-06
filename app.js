document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const energy = parseFloat(document.getElementById('energy').value) || 0;
    const transportation = parseFloat(document.getElementById('transportation').value) || 0;
    const waste = parseFloat(document.getElementById('waste').value) || 0;

    const totalImpact = energy * 0.5 + transportation * 0.2 + waste * 0.3; // Example calculation

    updateChart(totalImpact);
});

function updateChart(totalImpact) {
    const ctx = document.getElementById('impact-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Impact'],
            datasets: [{
                label: 'Environmental Impact',
                data: [totalImpact],
                backgroundColor: '#4BAA4E'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}
