const express = require('express');
const https = require('https');
const app = express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");  
})
const query = 'modinagar'
//     const apikey = '13ca0c89d8cd04873921fbc32a542965'
//     const url ='https://api.openweathermap.org/data/2.5/weather?q='+ query + 
//     '&appid='+apikey+'&units=metric'
//     https.get(url,(resp)=>{
//         resp.on('data',(data)=>{
//            const weatherData = JSON.parse(data);
//            const temp = weatherData.main.temp;
//            const description = weatherData.weather[0].description
//             console.log(temp);
//             console.log(description);
//             res.write("<h1>the temperature in modinagar is  " + temp + "  degree celcius</h1>");
//             res.write("<h2>the weather description is   "+ description +"  </h2");
//         })
//        // console.log(resp);
//     })
//     //res.send("this is for checking our server"); 
app.listen(3000,()=>console.log("our server is runnig at port 3000"))