const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send('hello world');
});

let server = app.listen(3000, () => {
	let host = server.address().address;
	let port = server.address().port;
	console.log('listening at http://%s:%s', host, port);
})