const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');


app.use(cors());
app.use(express.json());


const instructors = [
    {firstName:"Adrien",lastName:"Dion"},
    {firstName:"Rob",lastName:"Moore"},
    {firstName:"Anne",lastName:"Jurack"},
    {firstName:"Phil",lastName:"Krull"},
    {firstName:"Chris",lastName:"Thompson"}
]
const students = [
    {firstName:"Joshua",lastName:"Wren"},
    {firstName:"Mark",lastName:"Edwards"},
    {firstName:"Schneider",lastName:"Bertrand"},
    {firstName:"Steven",lastName:"Sierra"},
    {firstName:"Natasha",lastName:"Charles"}
]


app.get('/',(request,response) => {
    response.json({"message":"I am alive."});
} )

app.get('/instructors',(request,response) => {
    response.json({"results":instructors});
})

app.get('/students',(request,response) => {
    response.json({"results":{"instructors":instructors,"students":students}});
})

app.get('/student/:idx',(request,response) => {
    response.json({"result":students[request.params.idx]});
})

app.post("/create",(request,response) => {
    const instructor = request.body;
    console.log(instructor);

    response.json({"message":"Success!!!"})
})




app.listen(port,() => console.log(`Listening on port ${port}`));