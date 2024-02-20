function openSection(sectionUrl) {
    window.location.href=sectionUrl;
}

function logout() {
    // Redirect the user back to the login page
    window.location.href = '../index.html'; // Change '../index.html' to the actual path of your login page
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

