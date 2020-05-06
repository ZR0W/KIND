/**
 * Author: @Rowland Zhang
 * Email: rowlandz@outlook.com
 */

// this is the background code...

chrome.runtime.onMessage.addListener(function(message, callback) {
    if (message.data == "inject") {
		chrome.tabs.executeScript({
			file: 'src/inject.js'
		});
	}
  });