self.on("context", function(node, data) {
 	console.log("hello"); 
	var text = document.activeElement.value;
	console.log(text); 
	text.replace(/[A-Za-z0-9]/g, function(s) {
    	return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
	});
	text.replace(/-/g, "―");
	document.activeElement.value = text;
});