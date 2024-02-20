// Right click functionality
$(document).ready(function() {
    var riClickBtn = $("#riClickBtn");
    var originalColor = riClickBtn.css('background-color');

    riClickBtn.on('contextmenu', function () { 
        // Change button color on double click
        riClickBtn.css('background-color', 'black'); // Change to desired color
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
        dblClickBtn.css('background-color', 'red'); // Change to desired color
    });

    dblClickBtn.on('click', function () {
        // Revert button color on single click
        dblClickBtn.css('background-color', originalColor);
    });
});


