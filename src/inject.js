// this is the code which will be injected into a given page...

(function() {

	function injectScript() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.onload = function(){
			// remote script has loaded
			console.log("ajax script onload()");
			var s = document.createElement("script");
			s.type = "text/javascript";
			s.async = true;
			s.onload = function() {

			};
			var source = chrome.extension.getURL("src/modal.js");
			s.src = source;
			document.getElementsByTagName("head")[0].appendChild(s);
		};
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
		document.getElementsByTagName('head')[0].appendChild(script);
	}

	function insertDiv() {
		// just place a div at top right
		var div = document.createElement('div');
		div.style.position = 'fixed';
		div.style.top = 0;
		div.style.right = 0;
		div.style.backgroundColor = "green";
		div.textContent = 'Injected!';
		document.body.appendChild(div);
	}

	function insertDialog() {

	}

	console.log("inject script running")
	//adds jQuery for use
	injectScript();
	insertDiv();
	insertDialog();

	// alert('inserted self... giggity');


})();