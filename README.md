# VD-Coding-Test

data structure:



    "key1":
        [
            {"20210513":"val1"},
            {"20210514":"val2"}
        ]
    ,
    "key2":
        [
            {"20210515":"val3"},
            {"20210516":"val4"}
        ]


Run:

npm install. 

node app.js. 

GET test: http://localhost:8000/object/key1  

POST test: curl -H 'Content-Type: application/json' -X POST -d '{"key":"key1","value":"val1"}' http://localhost:8000/object  
