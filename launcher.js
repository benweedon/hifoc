javascript:(function() {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://min.gitcdn.link/repo/benweedon/hifoc/master/hifoc.js?cache_breaker=';
    // add a random number to the URL to avoid caching
    script.src += parseInt(Math.random() * 99999999);

    document.head.appendChild(script);
})();
