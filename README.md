# VD-Coding-Test

data structure:



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


Run:

npm install. 

node app.js. 

GET test: http://localhost:8000/object/key1  

POST test: curl -H 'Content-Type: application/json' -X POST -d '{"key":"key1","value":"val1"}' http://localhost:8000/object  
