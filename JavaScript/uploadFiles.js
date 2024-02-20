document.getElementById('chooseFileBtn').addEventListener('click', function () {
    // Create a new file input element
    var fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('id', 'fileInput');
    fileInput.setAttribute('multiple', 'multiple');
    fileInput.style.display = 'none'; // Hide the file input

    // Append the file input to the document body
    document.body.appendChild(fileInput);

    // Trigger a click event on the file input
    fileInput.click();

    // Listen for changes in the file input
    fileInput.addEventListener('change', function () {
        const files = this.files;
        handleFiles(files);
    });
});

function handleFiles(files) {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = ''; // Clear previous files
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const li = document.createElement('li');
        li.textContent = `${file.name}`;
        fileList.appendChild(li);
    }
        // Display the fileList element after adding a file
        fileList.removeAttribute('style');

}

