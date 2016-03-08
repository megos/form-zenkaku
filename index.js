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
	context: contextMenu.SelectorContext('input'),
	contextScript: 'self.on("click", function() {' +
				   ' 	console.log("hello");' + 
				   '	var text = document.activeElement.value;' +
				   '	console.log(text);' + 
				   '	text.replace(/[A-Za-z0-9]/g, function(s) {' +
    			   '		return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);' +
				   '	});' +
				   '	text.replace(/-/g, "―");' +
				   '	document.activeElement.value = text;' +
				   '});'
});
