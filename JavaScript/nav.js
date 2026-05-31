// Navigation and logout logic for dynamic header
function getRelativePath(target) {
    var path = window.location.pathname.replace(/\\/g, '/');
    var pagesIndex = path.indexOf('/Pages/');
    if (pagesIndex !== -1) {
        var afterPages = path.substring(pagesIndex + 7); // 7 = '/Pages/'.length
        var depth = afterPages.split('/').length - 1;
        var rel = '';
        for (var i = 0; i < depth; i++) rel += '../';
        return rel + target;
    } else {
        if (target.startsWith('main.html') || target.startsWith('course-overview.html') || target.startsWith('about.html')) {
            return 'Pages/' + target;
        }
        return target;
    }
}

function setupHeaderNav() {
    var home = document.getElementById('nav-home');
    var topics = document.getElementById('nav-topics');
    var about = document.getElementById('nav-about');
    var logoutBtn = document.getElementById('logout-btn');
    if (home) home.setAttribute('href', getRelativePath('main.html'));
    if (topics) topics.setAttribute('href', getRelativePath('topics.html'));
    if (about) about.setAttribute('href', getRelativePath('about.html'));
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (typeof clearAuthCookie === 'function') {
                clearAuthCookie();
            }
            var path = window.location.pathname.replace(/\\/g, '/');
            if (path.indexOf('/Pages/') !== -1) {
                var up = '';
                var afterPages = path.substring(path.indexOf('/Pages/') + 7);
                var depth = afterPages.split('/').length - 1;
                for (var i = 0; i < depth + 1; i++) up += '../';
                window.location.href = up + 'index.html';
            } else {
                window.location.href = 'index.html';
            }
        });
    }
}

// Wait for header to be injected, then set up nav
function waitForHeaderAndSetupNav() {
    var tries = 0;
    function trySetup() {
        var home = document.getElementById('nav-home');
        if (home) {
            setupHeaderNav();
        } else if (tries < 20) {
            tries++;
            setTimeout(trySetup, 100);
        }
    }
    trySetup();
}

document.addEventListener('DOMContentLoaded', waitForHeaderAndSetupNav);