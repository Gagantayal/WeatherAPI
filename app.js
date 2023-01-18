const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyparser = require('body-parser');
const app = express();
const publicdirectory = path.join(__dirname,'public');
const viewPath = path.join(__dirname,'templates/views');
const partialPath = path.join(__dirname,'templates/partials');
app.set("view engine","hbs");
app.set('views',viewPath)
hbs.registerPartials(partialPath)
app.use(bodyparser.urlencoded({extended:true})); 
app.use(express.static(publicdirectory));
app.get('/',(req,res)=>{
    res.render("index", {
        title:'weather',
        name:'gagan'
    });  
})
app.listen(3000,()=>{console.log("our server is runnig at port 3000");
})