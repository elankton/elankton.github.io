document.head.insertAdjacentHTML("beforeend", `<style>.adp {
	display: flex;
	box-sizing: border-box;
	flex-flow: column;
	position: fixed;
	z-index: 99999;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	height: 400px;
	background-color: #ffffff;
	padding: 20px;
	border-radius: 5px;
}
.adp h3 {
	border-bottom: 1px solid #eee;
	margin: 0;
	padding: 15px 0;
	text-align: center;
}
.adp p {
	 flex-grow: 1;
}
.adp a {
	display: block;
	text-decoration: none;
	width: 100%;
	background-color: #366ed8;
	text-align: center;
	padding: 10px;
	box-sizing: border-box;
	color: #ffffff;
	border-radius: 5px;
}
.adp a:hover {
	background-color: #3368cc;
}
.adp-underlay {
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 99998;
}</style>`);
var xaddpsts = true;
function addpLoadx(){
	var rxcNum = Math.round(Math.random() * 10000);
	try {
		fetch('https://ads.pubmatic.com/AdServer/js/gshowad.js?d='+rxcNum,{
      method: "HEAD",
      mode: "no-cors",
    }).catch(() => {
			xaddpsts = false;
			let adp_underlay = document.createElement('div');
			adp_underlay.className = 'adp-underlay';
			document.body.appendChild(adp_underlay);
			let adp = document.createElement('div');
			adp.className = 'adp';
			adp.innerHTML = `
				<h3>Ad Blocker Detected!</h3>
				<p>We use advertisements to keep our website online, could you please whitelist our website, thanks!</p>
				<a href="#">Refresh page</a>
			`;
			document.body.appendChild(adp);
			adp.querySelector('a').onclick = e => {
				e.preventDefault();
				document.body.removeChild(adp_underlay);
				document.body.removeChild(adp);
				xaddpsts = true;
				window.location.href = "https://www.highrevenuegate.com/pnhjy8tj?key=cb019f8aeb2e1fd2e36b88b0ca124112";
			};
		});
	}
	catch(err) {
	  xaddpsts = true;
	  window.location.href = "https://www.highrevenuegate.com/pnhjy8tj?key=cb019f8aeb2e1fd2e36b88b0ca124112";
	}
}
var networkchecker = window.setInterval(function(){
	if (xaddpsts){
		window.onload=addpLoadx();
	}
},7000);

    if(!Histats_variables){var Histats_variables=[];}
    Histats_variables.push("tags",window.location.href);
    var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,4763694,4,0,0,0,00010000']);
    _Hasync.push(['Histats.fasi', '1']);
    _Hasync.push(['Histats.track_hits', '']);
    (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
    })();
