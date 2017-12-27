function getHandle (url, data) {
	var dataStr = '';
	for(var k in data) {
		dataStr += '&' + k + '=' + data[k];
	}
	if (url.indexOf('?') < 0) {
		dataStr = '?' + dataStr.substr(1);
	}
	return dataStr;
}
module.export = getHandle;