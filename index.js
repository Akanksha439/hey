//fire express server
const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
const expressLayouts=require('express-ejs-layouts');

//access static files
app.use(express.static('./assets'));
//use layout
app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//use express router
app.use('/',require('./routes'));

//set up view engine
app.set('view engine','ejs');
app.set('views' , './views');

app.listen(port,function(err){
    if(err){console.log(`error in running server:${err}`);}

    console.log(`server is running on port:${port}`);
});