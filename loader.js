javascript:(function() {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '';
    // add a random number to the URL to avoid caching
    script.src += parseInt(Math.random() * 99999999);
    document.body.appendChild(script);
})();