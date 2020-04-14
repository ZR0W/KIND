console.log("beginnging of content script");
alert("alert from content script");
var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('src/my_inject_content.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
