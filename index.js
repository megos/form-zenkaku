// var self = require("sdk/self");

// // a dummy function, to show how tests work.
// // to see how to test this function, look at test/test-index.js
// function dummy(text, callback) {
//   callback(text);
// }

// exports.dummy = dummy;

var contextMenu = require("sdk/context-menu");
var menuItem = contextMenu.Item({
	label: "半角から全角へ変換",
	context: contextMenu.SelectorContext("input"),
	contextScriptFile: './convert.js'
});
