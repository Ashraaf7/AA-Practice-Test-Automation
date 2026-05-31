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
    console.log('Image ' + imageName + ' dropped');
    showDropAlert('Image ' + imageName + ' dropped!', 'success');
}

// Show Bootstrap alert dynamically for drag/drop feedback
function showDropAlert(message, type) {
    let alertBox = document.getElementById('dropAlert');
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = 'dropAlert';
        alertBox.className = 'alert alert-' + type + ' mt-3';
        alertBox.setAttribute('role', 'alert');
        document.body.prepend(alertBox);
    }
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => { alertBox.style.display = 'none'; }, 3000);
}

// Define the onDragOver function
function onDragOver(event) {
    event.preventDefault(); // Prevent default behavior of the browser
}