    // Check if the user has previously logged in
    if (!sessionStorage.getItem('isLoggedIn')) {
        console.log('mafe4 meno')
        // If not logged in previously, set isLoggedIn to false
        sessionStorage.setItem('isLoggedIn', false);
    }
   //Handle login 
    document.addEventListener('DOMContentLoaded', function() {
         var logged = false
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
        

            // Get the input values
            var username = document.getElementById('inputUsername').value;
            var password = document.getElementById('inputPassword').value;

            // Check if the username and password match
            if (username === 'admin' && password === 'admin') {
                // Set isLoggedIn to true when the user logs in
                sessionStorage.setItem('isLoggedIn', true);

                // Redirect to the main page
                window.location.href = 'Pages/main.html';
            } else {
                // Display an error message (optional)
                sessionStorage.setItem('isLoggedIn', false);
                alert('Invalid username or password. Please try again.');
            }
        });
    });