/**
 * Author: @Rowland Zhang
 * Email: rowlandz@outlook.com
 */

// console.log("running in content.js");

chrome.runtime.sendMessage({data: "inject"}, function(response) {
    // console.log("content script sendMessage callback function with response");
    // do nothing
});