// Show/hide global loading spinner overlay
function showLoadingSpinner(show) {
    var spinner = document.getElementById('globalLoading');
    if (spinner) {
        spinner.style.display = show ? 'flex' : 'none';
        if (show) spinner.classList.add('active');
        else spinner.classList.remove('active');
    }
}

// Show Bootstrap alert dynamically for mouse feedback
function showMouseAlert(message, type) {
    let alertBox = document.getElementById('mouseAlert');
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = 'mouseAlert';
        alertBox.className = 'alert alert-' + type + ' mt-3';
        alertBox.setAttribute('role', 'alert');
        document.body.prepend(alertBox);
    }
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => { alertBox.style.display = 'none'; }, 3000);
}
// Right click functionality
$(document).ready(function() {
    var riClickBtn = $("#riClickBtn");
    var originalColor = riClickBtn.css('background-color');


    riClickBtn.on('contextmenu', function () { 
        // Change button color on right click
        riClickBtn.css('background-color', 'black');
        showMouseAlert('Right-click detected! Button color changed.', 'success');
    });

    riClickBtn.on('click', function () {
        // Revert button color on single click
        riClickBtn.css('background-color', originalColor);
    });
});



// Double click functionality
$(document).ready(function() {
    var dblClickBtn = $("#dblClickBtn");
    var originalColor = dblClickBtn.css('background-color');


    dblClickBtn.on('dblclick', function () { 
        // Change button color on double click
        dblClickBtn.css('background-color', 'red');
        showMouseAlert('Double-click detected! Button color changed.', 'success');
    });

    dblClickBtn.on('click', function () {
        // Revert button color on single click
        dblClickBtn.css('background-color', originalColor);
    });
});


