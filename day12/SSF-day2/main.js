//load libsS
const express = require('express');
const path = require('path');

//instance
const app = express();

//routes
//log every req that comes in
// app.use((req,resp,next)=>{
//     console.log(`*** ${new Date()} ${req.method}, ${req.originalUrl}`);
//     next();
// })

// const checkAuth = (req,resp,next)=>{
//     //authentecation
//      console.log("perform authentication " + new Date());
//      next();
// }

//GET /time => HTTP
//app.get('/time', checkAuth,
// (req,resp,next)=>{
//     //authentecation
//     console.log(new Date() + "processing time")
//     next();
// },
//     (req, resp) => {
//     resp.status(200);
//     resp.type('text/html');
//     resp.send(`<h1>The current time is ${new Date()} </h1>`)
// });

// app.get('/time/json',(res,resp)=>{
//     const data ={name:'Fred', email:'fred@gmail.com'};
//     resp.status(200)
//     resp.type('application/json')
//     resp.json({
//         time:new Date(),
//         people : data
//     })
// })

//GET / => HTTP
// app.get('/', (req, resp) => {
//     const userAgent = req.get('User-Agent')
//     resp.status(200);
//     resp.type('text/html');
//     resp.send(`<h1>Hello ${userAgent}</h1>`)
// });

//mapping

//routes
// app.use(
//     '/images',
//     express.static(//middleware to serve static files
//         path.join(__dirname, 'assets')
//     )
// ); 

app.use(
    express.static(//middleware to serve static files
        path.join(__dirname, 'public')
    )
); 

//Error
app.use((res,resp)=>{
    console.log(res.get('Accept'));
    resp.redirect("/404.html");
    // resp.status(200);
    // resp.type('text/html');
    // resp.sendfile(path.join(__dirname, 'public', '404.png'));
})

//server
PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;

app.listen(PORT, (req, resp) => {
    console.log('Application Started On Port %d at %s', PORT, new Date());
})
