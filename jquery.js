var xl = document.getElementById("top_header_addone");
xl.id = "adsyed";
xl = document.getElementById("sidebar_add");
xl.id = "adsucyuz";
xl = document.getElementById("center_middle_add");
xl.id = "ads";


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function Tutor() {
	await sleep(1000);
	if(document.getElementById("adsyed")){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.text = "atOptions = {'key' : '04ab7bf8059140f2e892fdc85a5bb04d','format' : 'iframe','height' : 90,'width' : 728,'params' : {} 	};";
		var el = document.getElementById("adsyed");
		el.appendChild(script);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://www.highperformanceformat.com/04ab7bf8059140f2e892fdc85a5bb04d/invoke.js';
		var el = document.getElementById("adsyed");
		el.appendChild(script);
	}
	await sleep(3000);
	if(document.getElementById("adsucyuz")){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.text = "atOptions = {'key' : '4af9baae14a71c16d7c9c5b12bb59fdb','format' : 'iframe','height' : 250,'width' : 300,'params' : {} 	};";
		var el = document.getElementById("adsucyuz");
		el.appendChild(script);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://www.highperformanceformat.com/4af9baae14a71c16d7c9c5b12bb59fdb/invoke.js';
		var el = document.getElementById("adsucyuz");
		el.appendChild(script);
	}
	await sleep(3000);
	if(document.getElementById("ads")){
		var script = document.createElement('center');
		script.id = 'a458d2acc';
		var el = document.getElementById("ads");
		el.appendChild(script);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.text = "atOptions = {'key' : 'a458d2acccabadb0ad769a3f1eb6a238','format' : 'iframe','height' : 60,'width' : 468,'params' : {} 	};";
		var el = document.getElementById("a458d2acc");
		el.appendChild(script);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://www.highperformanceformat.com/a458d2acccabadb0ad769a3f1eb6a238/invoke.js';
		var el = document.getElementById("a458d2acc");
		el.appendChild(script);
	}
}

(function() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = '//pl15563170.effectiveratecpm.com/35/da/1e/35da1e3af13599295821b2545bdc31fc.js';
	document.body.appendChild(script);
})();




Tutor();
