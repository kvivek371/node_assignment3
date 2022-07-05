const express = ('express');

const app = express();

// middleware -   general function which takes parameters as 
//                  request ,response, and next function.   
//                acts as a link between frontend and backend(request and response) .
//                checks for authenticatication of request.
//                shows its output in terminal.
//                three types of parameter ----- 
//                  1. URL(provided by /, can provide single value) , 
//                  2. Query parameter(provided by ?,multiple value in form of key value pair).
//                  3. Next(to transfer to next route).
//                  we can end request in middleware. 

const middleware1 = function (req,res,next){
    console.log("this is middleware 1");
    next();
}

const middleware2 = function (req,res,next){
    console.log("this is middleware 2");
    next();
}

app.use(middle2) /// by using this line we use our middleware two globaly meas now it will applicable through out the server


/// here we using middleware 1 on only a particular server so that it can only be used at same server 

app.get('/',middle1,function(req,res){
    res.send("<h1>This is the main page with middleware 1 and middleware2 <h1>")
})
app.get('/two',middle1,function(req,res){
    res.send("<h1>This is the second page with middeware 1 and middleware 2 <h1>")
})


app.get('/three',function(req,res){
    res.send("<h1>This is the third page with middeware 2 <h1>")
})
app.get('/four',function(req,res){
    res.send("<h1>This is the fourth page with middeware 2 <h1>")
})
app.get('/five',function(req,res){
    res.send("<h1>This is the fivth page with middeware 2 <h1>")
})

app.listen(4000)



 