const express = require('express');
const path = require('path');
//render lib
const hbs = require('express-handlebars');
//request module allow node application to http call from server env
const request = require('request');
//prase query str
const qs = require('querystring');

//Instance of application
const app = express();

//Configure express to use handlebars as the render
// app.engine('html', hbs()); //Initialize express handlebars
// app.set('view engine','html') //express instance to store and retrieve variables.
// time.html under my-view
app.engine('hbs', hbs()); //Initialize express handlebars
app.set('view engine','hbs') //express instance to store and retrieve variables.
app.set('views',path.join(__dirname,'my-views'))

//Create routes
app.get('/rate',(req,resp)=>{
    request.get('http://data.fixer.io/api/latest',
        {qs:{access_key:'ce94f182e906d4deb5c0ed7e92efe2d9'}},
        (err,response,body)=>{
            if(err){
                resp.status(400);
                resp.type('text,plain');
                resp.send(err);
                return;
            } 
            //parse Json str to
            const result = JSON.parse(body);
            const rates = result.rates;
            const rateArray = []
            for (let c of Object.keys(rates))
                rateArray.push({currency: c, rates: rates[c]});
            resp.status(200);
            resp.render('rates', 
                {   baseRate: result.base,
                    date: result.date,
                    rate: rateArray, 
                    layout:false});   
        }
    )
    

})

app.get('/httpbin',(req,resp)=>{
    const param ={
        name: 'fred',
        email: 'fred@email.com'
    };
    console.info('param = '+ qs.stringify(param) );
    //request.get('http://httpbin.org/get?'+  qs.stringify(param),
    request.get('http://httpbin.org/get?',
    {
        qs:{
            name:'bred',
            email: 'bred@email.com'
        }
    },
    (err,result,body) => {
        if(err){
            resp.status(400);
            resp.type('text,plain');
            resp.send(JSON.stringify(err));
            return;
        }
        console.info('>>> body: ',body)
        resp.status(200);
        // const obj = JSON.parse(body);
        resp.json(JSON.parse(body));

    })
});

app.get('/time',(req,resp)=>{
        console.log(`Accept: ${req.get('Accept')}`);

        resp.status(200);

        resp.format({
            'text/html':()=>{
                resp.render('time',{
                    time:(new Date()).toString(),
                    layout: false
                })
                // resp.send(`<h1>The current time is ${new Date()}</h1>`);
            },
            'application/json':()=>{
                resp.json({time:new Date()});
            },
            'text/plain':()=>{
                const data = {time:new Date()};
                resp.send(`This is Json as String: ${JSON.stringify(data)}`);
            },
            'default':()=>{
                resp.send(406);
                resp.end();
            }
        })
})



PORT= parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;
app.listen(PORT,(res,resp)=>{
    console.log(`Listen port on ${PORT} at ${new Date()}`)
})