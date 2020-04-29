// $(document).ready(function() {   // Load the function after DOM ready.
//     console.log("content script ready callback running");

//     function appendModal() {
//         var box = '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header"><span class="close">&times;</span><h2></h2></div><div class="modal-body"><p id="modaltext">Are you <span class="bigger">SURE</span> you want to say  <span class="bigger">________</span> to @Blah</p><button id="modalReturn">Retract</button><button id="modalContinue">Continue</button></div></div>';
//         $("body").append(box);
//     }

//     function appendScript() {
//         console.log("appendScript() from content.js");
//         var s = document.createElement("script");
//         s.type = "text/javascript";
//         s.src = "src/modal.js";
//         $("head").append(s);
//         // $("head").appendChild(s);
//     }

//     // appendModal();
//     // appendScript();
    
    
// });

// // inspiraton
// // https://www.formget.com/chrome-extension-inject-javascript/
console.log("running in content.js");

chrome.runtime.sendMessage({data: "inject"}, function(response) {
    console.log(response.farewell);
});