$(document).ready(function() {   // Load the function after DOM ready.
    console.log("content script ready callback running");

    var box = '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header"><span class="close">&times;</span><h2></h2></div><div class="modal-body"><p id="modaltext">Are you <span class="bigger">SURE</span> you want to say  <span class="bigger">________</span> to @Blah</p><button id="modalReturn">Retract</button><button id="modalContinue">Continue</button></div></div>';
    $("body").append(box);
    
    
});

// inspiraton
// https://www.formget.com/chrome-extension-inject-javascript/