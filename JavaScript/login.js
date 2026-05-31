// Show/hide global loading spinner overlay
function showLoadingSpinner(show) {
    var spinner = document.getElementById('globalLoading');
    if (spinner) {
        spinner.style.display = show ? 'flex' : 'none';
        if (show) spinner.classList.add('active');
        else spinner.classList.remove('active');
    }
}
// Use cookie-based authentication utilities from auth.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the input values
        var username = document.getElementById('inputUsername').value;
        var password = document.getElementById('inputPassword').value;

        // Check if the username and password match
        if (username === 'admin' && password === 'admin') {
            // Set auth cookie to true when the user logs in
            if (typeof setAuthCookie === 'function') {
                setAuthCookie('true');
            }
            // Redirect to the main page
            window.location.href = 'Pages/main.html';
        } else {
            // Display an error message (optional)
            if (typeof setAuthCookie === 'function') {
                setAuthCookie('false');
            }
            showAlert('Invalid username or password. Please try again.', 'danger');
        // Show Bootstrap alert dynamically
        function showAlert(message, type) {
            let alertBox = document.getElementById('loginAlert');
            if (!alertBox) {
                alertBox = document.createElement('div');
                alertBox.id = 'loginAlert';
                alertBox.className = 'alert alert-' + type + ' mt-3';
                alertBox.setAttribute('role', 'alert');
                document.querySelector('.login-card .login-body')?.prepend(alertBox);
            }
            alertBox.textContent = message;
            alertBox.style.display = 'block';
            setTimeout(() => { alertBox.style.display = 'none'; }, 3500);
        }
        }
    });
});