import dataHandle from './data'
var ajax = {
	get: function (url, data) {
		let xmr = new XMLHttpRequest();
		var urlStr = dataHandle(url, data);
		xhr.open('get', urlStr);
		
	}
}