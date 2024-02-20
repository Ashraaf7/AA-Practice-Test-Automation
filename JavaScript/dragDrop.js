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