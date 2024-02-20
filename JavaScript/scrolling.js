
 // Function to scroll to a specific section
 function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        console.log(section)
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleAndScroll(sectionId) {
    toggleSection(sectionId); // Toggle section visibility
    scrollToSection(sectionId); // Scroll to the section
}


// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add event listener to enable the text field when it's scrolled into view
window.addEventListener('scroll', function() {
    var textBox = document.getElementById('scroll_text');
    if (isInViewport(textBox)) {
        textBox.removeAttribute('disabled');
        // Remove the event listener to prevent unnecessary checks
        window.removeEventListener('scroll', arguments.callee);
    }
});

// Disable the text field initially
window.addEventListener('DOMContentLoaded', function() {
    var textBox = document.getElementById('scroll_text');
    textBox.setAttribute('disabled', 'disabled');
});