const express=require('express');
const app=express();

const mqtt = require('mqtt');
const authRouter = require('./router/router');
const client = mqtt.connect('mqtt://broker.hivemq.com:1883')
const topic = "pradh/out"
const port=3000;
app.use('./api/auth/',authRouter);

app.listen(port,()=>{
            console.log(`${port}`);
      })
client.on('connect', async () => {
    console.log("mqtt connected");
    client.subscribe(topic)
})


