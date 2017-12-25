const path = require('path');

module.exports = {
    getHtmlForWebpack: function (htmlName, isMinify, outFilePath ) {
        var outPath = outFilePath ? path.resolve(__dirname, './publicview/' + htmlName + '.html') : './' + htmlName + '.html';
        return Object.assign({}, {
            title: htmlName,
            filename: outPath,
            template: './view/' + htmlName + '.html', //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            hash: true, //为静态资源生成hash值
            chunks: [ 'common', 'vendor', htmlName],//需要引入的chunk，不配置就会引入所有页面的资源
        }, { 
            minify : isMinify ? { //压缩HTML文件    
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
                }: {}
            }   
        )
    }
}