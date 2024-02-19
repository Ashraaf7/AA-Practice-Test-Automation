function openSection(sectionUrl) {
    window.open(sectionUrl, '_blank');
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

// Double click functionality
$(document).ready(function() {
    var dblClickBtn = $("#dblClickBtn");
    var originalColor = dblClickBtn.css('background-color');

    dblClickBtn.on('dblclick', function () { 
        // Change button color on double click
        dblClickBtn.css('background-color', 'red'); // Change to desired color
    });

    dblClickBtn.on('click', function () {
        // Revert button color on single click
        dblClickBtn.css('background-color', originalColor);
    });
});
// Right click functionality
$(document).ready(function() {
    var riClickBtn = $("#riClickBtn");
    var originalColor = riClickBtn.css('background-color');

    riClickBtn.on('contextmenu', function () { 
        // Change button color on double click
        riClickBtn.css('background-color', 'yellow'); // Change to desired color
    });

    riClickBtn.on('click', function () {
        // Revert button color on single click
        riClickBtn.css('background-color', originalColor);
    });
});
function onDragStart(event) {
    // Set the data to be transferred as the URL of the image
    event.dataTransfer.setData('url', event.target.src);
}

function onDrop(event) {
    event.preventDefault();
    
    // Retrieve the URL of the image from the transferred data
    const imageUrl = event.dataTransfer.getData('url');
    
    // Extract the file name from the image URL
    const imageName = imageUrl.split('/').pop(); // Get the last part of the URL
    
    // Create a text node with the image name
    const textNode = document.createTextNode(imageName);
    
   
    
    // Call a function or execute a piece of code when the image name is dropped
    handleImageNameDrop(imageName);
    
    event.dataTransfer.clearData();
}

function handleImageNameDrop(imageName) {
    // Add your code here to handle the drop event for the image name
    console.log('Image '+ imageName + ' dropped');
    // Example: Display a message when the image name is dropped
    alert('Image '+ imageName + ' dropped');
}

// Define the onDragOver function
function onDragOver(event) {
    event.preventDefault(); // Prevent default behavior of the browser
}

document.getElementById('chooseFileBtn').addEventListener('click', function () {
    console.log("Choose File button clicked");
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function () {
    console.log("File input changed");
    const files = this.files;
    handleFiles(files);
});


function handleFiles(files) {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = ''; // Clear previous files

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const li = document.createElement('li');
        li.textContent = `${file.name} (${file.size} bytes)`;
        fileList.appendChild(li);
    }
}