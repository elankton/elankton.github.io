var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    if (this.responseText.toLowerCase().indexOf("loc=fr") === -1){
        (function() {
            var configuration = {
            "token": "fab11d6328169b060032ec11feb458f4",
            "entryScript": {
                "type": "timeout",
                "timeout": 3000,
                "capping": {
                    "limit": 5,
                    "timeout": 24
                }
            }
        };
            var script = document.createElement('script');
            script.async = true;
            script.src = '//cdn.shorte.st/link-converter.min.js';
            script.onload = script.onreadystatechange = function () {var rs = this.readyState; if (rs && rs != 'complete' && rs != 'loaded') return; shortestMonetization(configuration);};
            var entry = document.getElementsByTagName('script')[0];
            entry.parentNode.insertBefore(script, entry);
        })();
    }
}
};
xhttp.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", true);
xhttp.send();
