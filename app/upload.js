
// var fs = require('fs');
// var co = require('co');
// var OSS = require('ali-oss');
// var path = require('path');
// var request = require('request');
// var qs = require('querystring');  

import fs from 'fs';
import co from 'co';
import OSS from 'ali-oss';
import path from 'path';
import request from 'request';
import qs from 'querystring';

// http://localhost:8888
// http://www.uxinyue.com:81
var host = 'http://www.uxinyue.com:81/';
console.log('upload已更新')
window.ossUploader = function (param, filePath, getMid, progressCallback, done, errCallback) {
	// console.log(param, 'param')
	var filename = path.basename(filePath);
	// 以下为前端生成key
	// var extArr = filename.split('.');
	// var ext = extArr[extArr.length - 1];
	// var hash = window.md5(filename + new Date().getTime()); 
	// typeof progressCallback == 'function' && getMid(hash, filePath);
	// var objectKey = 'v2_video/' + hash + '.mp4';
	// param.object_key = objectKey;
	param.filename = filename;
	var content = qs.stringify(param); 
	// console.log(objectKey, 'objectKey')

	var options = {
		　　　　　　　method: 'post',
					url: host + '/api/createoss',
					form: content,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'  
					}
              	};
			  
	request(options, function (err, res, body) {
		if (err) {
			console.log(err)
		}else {
			var json = JSON.parse(body).data;
			var doc_id = json.doc_id;
			typeof getMid == 'function' && getMid(json.object_key, filePath);
			
			var client = new OSS({
				region: 'oss-cn-shanghai',
				//云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，创建并使用STS方式来进行API访问
				accessKeyId: 'LTAILWCfmthKUqkk',
				accessKeySecret: '4b3woUoanrHOMBKShIYvxBieoP1mHJ',
				bucket: 'xinyuetest'
			  });
			  co(function* () {
			
				var result = yield client.multipartUpload(json.object_key, filePath, {
				  progress: function* (p) {
					console.log('Progress: ' + p);
					typeof progressCallback == 'function' && progressCallback(p)
				  },
				  meta: {
					year: 2018,
					people: 'xinyue'
				  }
				});
				var head = yield client.head(json.object_key);
				typeof done == 'function' && done(Object.assign({}, head, {filename: filename, doc_id: doc_id}));
			  }).catch(function (err) {
				  console.log(err, 'uploadErr')
				  typeof errCallback == 'function' && errCallback(err);
			  });
		

			
		}
	})
	
}


window.statSync = function (filePath) {
    return fs.statSync(filePath);
}

window.removeFile = function (filePath, callback) {
	fs.unlink(filePath, callback)
}


// 测试代码
window.req = function (start) {
	let param = {
		project_id: 'P231513913472',
		top_id: 0,
		login_id: 24,
		token:  999,
		size: 1000000,
		object_key: '444444444444444444.jpg'
	};

	let content = qs.stringify(param); 
	console.log(content, 'content111')
	// var content = qs.stringify(param); 
	var options = {
		　　　　　　　method: 'post',
					url: host + '/api/createoss',
					form: content,
					headers: {
						'Content-Type':'application/x-www-form-urlencoded'
					}
              	};
              
	request(options, function (err, res, body) {
		if (err) {
			console.log(err, '开始上传，请求报错')
			start({name: 'error', error: err})
		}else {
			console.log(body, 'body');
			start({name: 'body', body: body})
		}
	})

}

