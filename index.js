var script = "self.on('click', function(node) {" +
             "  var text = document.activeElement.value;" +
             "  text = text.replace(/[A-Za-z0-9]/g, function(s) {" +
    		 "    return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);" +
    		 "  });" +
    		 "  text = text.replace(/-/g, 'ー');" +
    		 "  text = text.replace(/ /g, '　');" +
    		 "  document.activeElement.value = text;" +
    		 "});";

var cm = require("sdk/context-menu");

cm.Item({
  label: "半角から全角へ変換",
  context: cm.SelectorContext("input"),
  contentScript: script
});