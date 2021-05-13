var object = {
     "key1":
         [        
             {"100":"val1"},
             {"200":"val2"}
         ]
     ,
     "key2":
         [        
             {"300":"val3"},
             {"400":"val4"}
         ]
 }

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = {
            "data": object
        };
    },
    'GET /object/:key': async (ctx, next) => {
        let key = ctx.request.path.substring(8)
        let timestamp = ctx.request.query["timestamp"]
        let len
        let val

        // If the key exists
        if(object[key]){
            len = object[key].length
            val = Object.values(object[key][len-1])[0]

            // If there is a timestamp query
            if(timestamp){
                val = "value not found"
                for (let i = len-1; i >=0 ; i--) {
                    let timeid = Object.keys(object[key][i])[0]
                    if(timestamp > timeid){
                        val = object[key][i][timeid]
                        break
                    }
                }
            }
        }
        else{
            val = "value not found"
        }
        ctx.response.type = 'application/json';
        ctx.response.body = {
            "value": val
        };
    },

    'POST /object': async (ctx, next) => {
        let key = ctx.request.body.key
        let val = ctx.request.body.value
        let timestamp = (new Date()).valueOf()
        var data = {
            "key": key,
            "value": val,
            "timestamp" : timestamp
        };
        let record = {[timestamp]: val}
        if(object[key]){
            object[key].push(record)
        }
        else{
            object[key] = [record]
        }
        ctx.response.type = 'application/json';
        ctx.response.body = data;
    }
};
