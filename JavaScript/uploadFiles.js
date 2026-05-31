  // Show/hide global loading spinner overlay
  function showLoadingSpinner(show) {
    var spinner = document.getElementById('globalLoading');
    if (spinner) {
      spinner.style.display = show ? 'flex' : 'none';
      if (show) spinner.classList.add('active');
      else spinner.classList.remove('active');
    }
  }

  // Show Bootstrap alert dynamically for file upload feedback
  function showUploadAlert(message, type) {
    let alertBox = document.getElementById('uploadAlert');
    if (!alertBox) {
      alertBox = document.createElement('div');
      alertBox.id = 'uploadAlert';
      alertBox.className = 'alert alert-' + type + ' mt-3';
      alertBox.setAttribute('role', 'alert');
      document.body.prepend(alertBox);
    }
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => { alertBox.style.display = 'none'; }, 3000);
  }
  document.getElementById("chooseFileBtn").addEventListener("click", function () {
    document.getElementById("fileInput").click();
  });

  document.getElementById("fileInput").addEventListener("change", function (e) {
    const fileList = document.getElementById("fileList");
    fileList.innerHTML = "";
    for (const file of e.target.files) {
      const li = document.createElement("li");
      li.textContent = file.name;
      fileList.appendChild(li);
    }
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

