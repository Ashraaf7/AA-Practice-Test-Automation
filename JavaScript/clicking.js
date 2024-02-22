
$(document).ready(function() {
    var btn = $("#submit-btn");
    var originalColor = btn.css('background-color');

    btn.on('click', function () { 
        btn.css('background-color', 'green'); // Change to desired color
    });

});