// add-vehicle.js
document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for existing vehicles with image URLs
    const existingVehicles = [
        { name: 'Ayalolo', registrationNumber: 'ABC123', image: 'https://dailyguidenetwork.com/wp-content/uploads/2022/10/Ayalolo-bus-620x406.jpg' },
        { name: 'Van', registrationNumber: 'XYZ789', image: 'https://gmc.eu/wp-content/uploads/2021/05/Mercedes-Benz-Sprinter-519-CDI-4x2-1-768x576.jpg' }
    ];

    const existingVehiclesList = document.getElementById('existingVehiclesList');

    // Iterate through existing vehicles and create elements
    existingVehicles.forEach(vehicle => {
        const vehicleItem = document.createElement('li');

        // Create an image element
        const vehicleImage = document.createElement('img');
        vehicleImage.src = vehicle.image;
        vehicleImage.alt = `${vehicle.name} Image`;
        vehicleImage.className = 'w-100 h-100 rounded-full mr-4'; // Increased size with Tailwind CSS classes

        // Create a span element for vehicle details
        const vehicleDetails = document.createElement('span');
        vehicleDetails.textContent = `${vehicle.name} - ${vehicle.registrationNumber}`;

        // Append the image and details to the list item
        vehicleItem.appendChild(vehicleImage);
        vehicleItem.appendChild(vehicleDetails);

        // Append the list item to the existing vehicles list
        existingVehiclesList.appendChild(vehicleItem);
    });

    // TODO: Implement logic to add new vehicles to the server
    const addVehicleForm = document.getElementById('addVehicleForm');
    addVehicleForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const vehicleName = document.getElementById('vehicleName').value;
        const registrationNumber = document.getElementById('registrationNumber').value;
        // TODO: Send data to server and update the UI with the new vehicle
        console.log(`New vehicle added - ${vehicleName} - ${registrationNumber}`);
    });
});
