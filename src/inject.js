// this is the code which will be injected into a given page...

(function() {

	function injectScript() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.onload = function(){
			// remote script has loaded
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
	console.log("inject script running")
	//adds jQuery for use
	injectScript();
	insertDiv();

	// alert('inserted self... giggity');


})();