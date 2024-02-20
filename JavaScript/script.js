function openSection(sectionUrl) {
    window.location.href=sectionUrl;
}

function logout() {
    // Remove isLoggedIn when the user logs out
    sessionStorage.setItem('isLoggedIn', false);
    // Redirect the user back to the login page
    window.location.href = '../index.html'; 
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




// Function to check login status
function checkLoginStatus(url) {
    // Retrieve login status from session storage
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    // If the user is not logged in, redirect to the login page
    if (!isLoggedIn || isLoggedIn === 'false') {
        console.log('User not logged in. Redirecting to login page...');
        window.location.href = '../index.html'; // Redirect to login page
    }
    else
    {
        window.location.href = url;
    }
}


