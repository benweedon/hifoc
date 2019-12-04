javascript:(function() {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://raw.githack.com/benweedon/hifoc/master/hifoc.js?v=';
    // add a random number to the URL to avoid caching
    script.src += parseInt(Math.random() * 99999999);

    document.head.appendChild(script);
})();
