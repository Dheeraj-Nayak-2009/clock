function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
}
showTime();
setInterval(function () {
	showTime();
}, 1000);