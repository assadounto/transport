// manage-time-slot.js
document.getElementById('manageTimeSlotForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    // TODO: Send this data to the server using AJAX or fetch API
    // For simplicity, let's log the data to the console
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);

    // You can add logic here to send the data to the server and handle the response
});
