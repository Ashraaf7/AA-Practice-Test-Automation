// Dynamically include header and footer
function getComponentPath(filename) {
    // Find the path to /components/ relative to the current page
    var path = window.location.pathname;
    var depth = path.split('/').length - 2; // -2: remove empty and filename
    var rel = '';
    for (var i = 0; i < depth; i++) rel += '../';
    return rel + 'components/' + filename;
}

function includeHTML(selector, filename) {
    var url = getComponentPath(filename);
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll(selector).forEach(el => {
                el.innerHTML = data;
            });
        });
}

document.addEventListener('DOMContentLoaded', function() {
    includeHTML('.site-header', 'header.html');
    includeHTML('.site-footer', 'footer.html');
});
