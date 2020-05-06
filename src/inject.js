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
				console.log("on modal.js load");
				var c = document.createElement("link");
				c.setAttribute("rel", "stylesheet");
				c.setAttribute("type",  "text/css");
				var cssPath = chrome.runtime.getURL("css/mycss.css");
				c.setAttribute("href", cssPath);
				document.getElementsByTagName("head")[0].appendChild(c);
			};
			var source = chrome.extension.getURL("src/modal.js");
			s.src = source;
			document.getElementsByTagName("head")[0].appendChild(s);
		};
		// script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
		script.setAttribute("src", chrome.runtime.getURL("js/jquery-3.4.1.js"));
		document.getElementsByTagName('head')[0].appendChild(script);
	}

	function insertDiv() {
		// creating nodes
		var outside = document.createElement('div');
		outside.setAttribute("id", "myModal");
		outside.setAttribute("class", "modal");

		var content = document.createElement('div');
		content.setAttribute("class", "modal-content");
		
		var head = document.createElement('div');
		head.setAttribute("class", "modal-header");

		var close = document.createElement("SPAN");
		close.setAttribute("class", "close");
		var closeTxt = document.createTextNode("-");
		close.appendChild(closeTxt);

		var h2 = document.createElement("h2");

		var body = document.createElement("div");
		body.setAttribute("class", "modal-body");

		var p = document.createElement("p");
		p.setAttribute("id", "modaltext");
		var message = "Are you sure you want to say that?";
		var ptxt = document.createTextNode(message);
		p.appendChild(ptxt);

		var animep = document.createElement("p");
		animep.setAttribute("id", "typetext");

		var retract = document.createElement("button");
		retract.setAttribute("id", "modalReturn");
		retract.appendChild(document.createTextNode("Retract"));

		var cont = document.createElement("button");
		cont.setAttribute("id", "modalContinue");
		cont.appendChild(document.createTextNode("Continue"));

		//layering
		body.appendChild(p);
		body.appendChild(animep);
		body.appendChild(retract);
		body.appendChild(cont);
		head.appendChild(close);
		head.appendChild(h2);
		content.appendChild(head);
		content.appendChild(body);
		outside.appendChild(content);
		//append to document
		document.getElementsByTagName("body")[0].appendChild(outside);
	}

	function insertModal() {
		var box = '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header"><span class="close">&times;</span><h2></h2></div><div class="modal-body"><p id="modaltext">Are you <span class="bigger">SURE</span> you want to say  <span class="bigger">THAT</span> to them?</p><button id="modalReturn">Retract</button><button id="modalContinue">Continue</button></div></div>';
		// document.getElementsByTagName('body')[0].appendChild(box);
		document.getElementsByTagName('body')[0].innerHTML += box;
	}

	console.log("inject script running")
	insertDiv();
	// insertModal();
	injectScript();

})();