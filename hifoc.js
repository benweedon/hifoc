javascript:(function() {
    let style = `
        :focus {
            border: 2px solid cyan !important;
            border-radius: 10px !important;
            padding: 7px !important;
        }
    `;

    let styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = style;

    document.head.appendChild(styleSheet);
})();