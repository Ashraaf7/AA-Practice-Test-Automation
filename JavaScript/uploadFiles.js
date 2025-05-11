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

