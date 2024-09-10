document.getElementById('tracker-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from reloading the page

    // Get form values
    const activityType = document.getElementById('activity-type').value;
    let summaryText = `<h3>Activity Summary</h3>`;

    if (activityType === 'energy-use') {
        const energyUse = document.getElementById('energy-use').value;
        summaryText += `<p>Energy Use: ${energyUse} kWh</p>`;
    }

    if (activityType === 'transportation') {
        const miles = document.getElementById('transportation-miles').value;
        const carChecked = document.getElementById('car').checked;
        const bikeChecked = document.getElementById('bike').checked;
        const publicTransportChecked = document.getElementById('public-transport').checked;

        summaryText += `<p>Transportation: ${miles} miles</p>`;
        summaryText += `<p>Modes: 
            ${carChecked ? 'Car ' : ''} 
            ${bikeChecked ? 'Bike ' : ''} 
            ${publicTransportChecked ? 'Public Transport ' : ''}</p>`;
    }

    if (activityType === 'waste-production') {
        const wasteProduced = document.getElementById('waste-production').value;
        summaryText += `<p>Waste Produced: ${wasteProduced} kg</p>`;
    }

    // Display results
    document.getElementById('summary').innerHTML = summaryText;
});

// Toggle form fields based on selected activity
document.getElementById('activity-type').addEventListener('change', function() {
    const activityType = this.value;
    document.getElementById('energy-use-section').style.display = activityType === 'energy-use' ? 'block' : 'none';
    document.getElementById('transportation-section').style.display = activityType === 'transportation' ? 'block' : 'none';
    document.getElementById('waste-production-section').style.display = activityType === 'waste-production' ? 'block' : 'none';
});

