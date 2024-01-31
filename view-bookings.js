// view-bookings.js
document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for booked slots and employees
    const dummyBookings = [
        { slot: 'Slot 1: 8:00 AM - 9:00 AM', employees: ['Josphe', 'Rich'], assignedDriver: null },
        { slot: 'Slot 2: 10:00 AM - 11:00 AM', employees: ['Bob Johnson', 'Alice Brown'], assignedDriver: null }
    ];

    const bookingsList = document.getElementById('bookingsList');

    // Iterate through dummy bookings and create elements
    dummyBookings.forEach(booking => {
        const bookingElement = document.createElement('div');
        bookingElement.classList.add('border', 'p-4', 'rounded-md');

        // Display slot information
        const slotHeading = document.createElement('h3');
        slotHeading.textContent = booking.slot;
        bookingElement.appendChild(slotHeading);

        // Display list of employees
        const employeeList = document.createElement('ul');
        booking.employees.forEach(employee => {
            const employeeItem = document.createElement('li');
            employeeItem.textContent = employee;
            employeeList.appendChild(employeeItem);
        });
        bookingElement.appendChild(employeeList);

        // Button to assign a driver
        const assignDriverButton = document.createElement('button');
        assignDriverButton.textContent = 'Assign Driver';
        assignDriverButton.classList.add('bg-blue-500', 'text-white', 'py-2', 'px-4', 'rounded-md', 'mt-2');
        assignDriverButton.addEventListener('click', () => assignDriver(booking.slot));
        bookingElement.appendChild(assignDriverButton);

        // Append the booking element to the list
        bookingsList.appendChild(bookingElement);
    });

    // Dummy function to simulate assigning a driver
    function assignDriver(slot) {
        const selectedBooking = dummyBookings.find(booking => booking.slot === slot);
        selectedBooking.assignedDriver = 'Driver Name'; // Replace with actual driver assignment logic
        console.log(`Driver assigned for ${slot}`);
    }
});
