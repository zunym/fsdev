//load libs
const express = require('express');
const path = require('path');
//render lib
const hbs = require('express-handlebars');
const asciify = require('asciify-image');

//instance
const app = express();

app.engine('hbs', hbs()); //Initialize express handlebars
app.set('view engine','hbs') //express instance to store and retrieve variables.
app.set('views','views')

//route
const resources = ['images', 'public'];
for (let res of resources) {
    console.log(`Adding ${res} to Static`)
    app.use(express.static(path.join(__dirname, res)));
}

//GET
const images = ["mushroom.png",
    "onion.png",
    "potato.png",
    "pumpkin.png",
    "radish.png",
    "squash.png"];

const randImage = (array) => {
    const rand = Math.random();
    const index = Math.floor(rand * images.length);
    return (images[index]);
}

app.use('/image', (req, resp) => {
    console.log(`Accept: ${req.get('Accept')}`);
    resp.status(200);
    // resp.type('text/html');
    // resp.send(`<img src='/${randImage(images)}'>`)
    const imageFile= randImage(images);
    resp.format({
        
        'text/html': () => {
            // resp.send(`<img src='/${randImage(images)}'>`)
            resp.render('image',{image: imageFile })
        },
        'images/png': () => {
            resp.sendfile(path.join(__dirname, 'images', `/${imageFile}`));
        },
        'application/json': () => {
            resp.json({
                filename : `/${imageFile}`
            })
        },
        'text/plain':()=>{
            // const data = {time:new Date()};
            // resp.send(`This is Json as String: ${JSON.stringify(imageFile)}`);
            const opt ={
                fit: 'box',
                color:false,
                width:50,
                height:50
            }
            asciify(path.join(__dirname,'images', imageFile),opt,
            (err,ascii)=>{
                if(err){
                    resp.status(400).send(JSON.stringify(err));
                    return;
                }
                resp.send(ascii);
                console.info(ascii);
            })
        },        
        'default': () => {
            resp.send(406);
            resp.end();
        }

    })
})


//error
app.use((res, resp) => {
    resp.status(404);
    resp.type('text/html');
    resp.send('<h1>Error Occured</h1>')
})

//server
PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;
app.listen(PORT, (res, resp) => {
    console.log('Listen to %d at %s', PORT, 'public')
})