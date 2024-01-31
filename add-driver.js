// add-driver.js
document.getElementById('addDriverForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const driverName = document.getElementById('driverName').value;
    const licenseNumber = document.getElementById('licenseNumber').value;

    // TODO: Send this data to the server using AJAX or fetch API
    // For simplicity, let's log the data to the console
    console.log('Driver Name:', driverName);
    console.log('License Number:', licenseNumber);

    // You can add logic here to send the data to the server and handle the response
});
