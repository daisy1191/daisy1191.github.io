document.getElementById('tracker-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting the traditional way

    // Get form values
    const energyUse = document.getElementById('energy-use').value;
    const transport = document.getElementById('transport').value;

    // Display results
    document.getElementById('results').innerHTML = `
        <p>Energy Use: ${energyUse} kWh</p>
        <p>Transportation: ${transport} miles</p>
    `;
});



