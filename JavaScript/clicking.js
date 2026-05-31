$(document).ready(function() {
    var btn = $("#submit-btn");
    var assertionMsg = $("#assertion-message");
    var demoResult = $("#demo-result");
    var taskResult = $("#task-result");

    btn.on('click', function () { 
        // Change button color to green
        btn.css({
            'background': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            'border-color': '#16a34a'
        });
        
        // Show assertion message
        assertionMsg.addClass('show');
        
        // Update demo result
        demoResult.removeClass('empty').html('<strong style="color: #22c55e;">✓ Button Clicked Successfully!</strong>');
        
        // Show task result
        taskResult.addClass('show');
        
        // Disable button after click
        btn.prop('disabled', true);
        btn.css('opacity', '0.8');
    });
});