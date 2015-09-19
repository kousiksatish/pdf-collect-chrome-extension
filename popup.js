function promptBox() {
 	chrome.storage.local.get('url', function(items) {
 		
 		document.getElementById("url").innerHTML = items.url;

 		console.log(items.url);
 	});
}

document.addEventListener('DOMContentLoaded', function() {
  promptBox();
});