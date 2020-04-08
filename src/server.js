import http from 'http';

http.createServer((req, res) => {
    res.write('Hello word');
    res.end();
}).listen(3000, () => console.log('server runing at the port: 3000'))