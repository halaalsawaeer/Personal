'use strict';




const express = require('express');



const server = express();
const PORT = process.env.PORT || 3000;
const { request, response } = require('express');
server.use(express.static('./public'));

server.get('./test',(request,response)=>{

console.log('data route');
response.send('I am alive!');
})
server.get('/hala',(request,response)=>{
let fav = [
    {food:'Mansaf'},
    {drink:'Milkshake'}
];
response.json(fav);

})

server.listen(PORT,()=>{

console.log(`listening on port ${PORT}`)
})