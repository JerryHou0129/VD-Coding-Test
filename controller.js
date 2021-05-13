
function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
        } 
        else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
        }  
        else {
            console.log('invalid URL');
        }
    }
}

module.exports = function () {
    let router = require('koa-router')();
    let mapping = require(__dirname  + '/api.js');
    addMapping(router, mapping);
    return router.routes();
};
