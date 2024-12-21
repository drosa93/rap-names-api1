const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' : 'Plaistow, London' ,
        'age': 32
    },
    'chance the rapper':{
        'birthName': 'Chancelor Bennett',
        'birthLocation' : 'Chicago, Illinois',
        'age': 29
    },
    'unknown':{
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 0
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
   const rapperName = request.params.name.toLowerCase()
   
   if(rappers[rapperName]){
         response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    // response.json(rappers)
})

app.listen(PORT, ()=>{
        console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})