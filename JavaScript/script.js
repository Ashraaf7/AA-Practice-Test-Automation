// Show/hide global loading spinner overlay
function showLoadingSpinner(show) {
    var spinner = document.getElementById('globalLoading');
    if (spinner) {
        spinner.style.display = show ? 'flex' : 'none';
        if (show) spinner.classList.add('active');
        else spinner.classList.remove('active');
    }
}

// Show Bootstrap alert dynamically for section feedback
function showSectionAlert(message, type) {
    let alertBox = document.getElementById('sectionAlert');
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = 'sectionAlert';
        alertBox.className = 'alert alert-' + type + ' mt-3';
        alertBox.setAttribute('role', 'alert');
        document.body.prepend(alertBox);
    }
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => { alertBox.style.display = 'none'; }, 3000);
}
// Prevent FOUC
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.classList.add('loaded');
    document.body.classList.add('loaded');
});

function openSection(sectionUrl) {
    window.location.href=sectionUrl;
}

// Use doLogout from auth.js for logout
function logout() {
    if (typeof doLogout === 'function') {
        doLogout();
    } else {
        window.location.href = '../index.html';
    }
}

  
  // Function to toggle visibility of sections
  function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        section.classList.add('visible');
    } else {
        section.classList.remove('visible');
        section.classList.add('hidden');
    }
}




// Use enforceAuth from auth.js for login status check
// Remove checkLoginStatus, use enforceAuth in HTML instead


