
const clearAuthCookies = () => {
    document.cookie = "x-auth=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    document.cookie = "auth=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";   
}

export { clearAuthCookies }