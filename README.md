# KIND

## about
A chrome extension that aims to detect potentially harmful expressions and give the user a chance to reflect upon their choice of language.

## current problems
April 11: How to utilize jQuery with the extension? Where should the bulk of the logic be?

April 14: background script is able to ececute inject.js. jQuery can be appended to the page but not my own scripts?

April 19: document.activeElement seems like a valid way to get the user input area across different websites (as pooposed to checking 'input' tag name). 

April 21: now, on every keyevent, extension is able to search for designated keywords in the focused element (input, contenteditable div, etc). 

April 22: extension seems to behave differntly on Windos VS. Mac. Also, enabling the extension in Twitter renders the input area nonresponsive. Currently don't know what the problem is. 

By Identifying the span element that holds the text of the draft, now able to clear the draft box when retract is clicked. However, the text is restored upon focus of the draft box. Reason unknown. Is the draft stored somewhere? 

May 5: Currently implementing a nonideal solution to the April 22nd problem: to reload the page upon user retracting message to clear page in-memory state. 

## comments
Currently, this extension only aims to work with Twitter. Universally working for all types of websites where content can be posted seems too chaotic right now. 

