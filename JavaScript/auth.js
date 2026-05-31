// Cookie-based authentication utilities
function setAuthCookie(value) {
    document.cookie = 'isLoggedIn=' + value + '; path=/; SameSite=Strict';
}
function getAuthCookie() {
    const match = document.cookie.match(/(?:^|; )isLoggedIn=([^;]*)/);
    return match ? match[1] : null;
}
function clearAuthCookie() {
    document.cookie = 'isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict';
}
// Enforce authentication on protected pages
function enforceAuth(redirectTo) {
    if (getAuthCookie() !== 'true') {
        window.location.href = redirectTo || '../index.html';
    }
}
// Logout utility
function doLogout() {
    clearAuthCookie();
    window.location.href = '../index.html';
}
