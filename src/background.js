// this is the background code...

// listen for our browerAction to be clicked
// chrome.browserAction.onClicked.addListener(function (tab) {
// 	// for the current tab, inject the "inject.js" file & execute it
// 	chrome.tabs.executeScript(tab.id, {
// 		file: 'src/inject.js'
// 	});
// });

chrome.runtime.onMessage.addListener(function(message, callback) {
    if (message.data == "inject") {
		chrome.tabs.executeScript({
			file: 'src/inject.js'
		});
	}
  });