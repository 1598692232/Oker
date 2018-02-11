var request = require('request');

var host = 'http://www.uxinyue.com:81';
console.log(host + '/adb/mainfest.json');
var options = {
    　　　　　　　method: 'get',
                url: host + '/adb/mainfest.json?time=' + new Date().getTime(),
                headers: {
                    'Content-Type': 'application/json'  
                }
              };

request(options, function (err, res, body) {
    var version = JSON.parse(body).js_version;
    console.log(version, 'version', '1.01');
    loadCSS(host + '/adb/index.' + version + '.css', function() {
        console.log('远程index.' + version + 'css加载成功');
        loadJS(host + '/adb/upload.' + version + '.min.js', function() {
            console.log('远程/adb/upload.' + version + '.min.js加载成功');
            loadJS(host + '/adb/index.' + version + '.js', function() {
                console.log('远程index.' + version + 'js加载成功')
            });
        });
    });
   
});

function loadJS(src, callback){
    var script = document.createElement('script');
    var body = document.getElementsByTagName('body')[0];
    script.src = src;
    body.appendChild(script);
    callback();
}

function loadCSS(href, callback) {
    var link = document.createElement('link');
    var head = document.getElementsByTagName('head')[0];
    link.href = href;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
    callback();
}