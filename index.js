const express = require("express");
const app = express();

const HOST = "localhost";
const PORT = 3001;

console.log("host: " + HOST);

app.get('/ping', function (req, res) {
    const source = '/demoserver/';
    let serverinfo = '{"ServerInfo":{"source":"' + source + '", "port":"' + PORT + '"}}';
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.json({ message: JSON.parse(serverinfo) });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});