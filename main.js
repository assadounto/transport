
            function redirectToAdminDashboard() {
                // Simulate a successful login
                // Replace this with your actual login logic and redirection
                // For demonstration purposes, redirecting after 2 seconds

                setTimeout(function() {
                    window.location.href = 'admin-dashboard.html';
                }, 500);
            }

            // Your existing login form submission logic
            // Example assuming you have a function like submitLoginForm
            function submitLoginForm() {
                // Your login form submission code

                // After successful login, call the redirect function
                redirectToAdminDashboard();
            }


 // Example assuming you have a function like submitLoginForm
 function submitLoginFormE() {
    // Your login form submission code

    // After successful login, call the redirect function
    redirectToUserDashboard();
}

function redirectToUserDashboard(e) {
    // Simulate a successful login
    // Replace this with your actual login logic and redirection
    // For demonstration purposes, redirecting after 2 seconds
    e.preventDefault()
    setTimeout(function() {
        window.location.href = 'view-time-slots.html';
    }, 500);
}


            