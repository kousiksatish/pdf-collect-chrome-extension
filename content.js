function message(str) {
	console.log(str);
}

function savePdf(url) {
	if (!url) {
		message('Error: No value specified!');
		return;
	}

	chrome.storage.local.set({'url' : url}, function() {
		message('Settings saved!');
	});

}

var url;
url = document.URL;
console.log(url);
savePdf(url);