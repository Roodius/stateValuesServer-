
const express = require('express')

require('dotenv').config();
const PORT = process.env.port
console.log(PORT)
const cors = require('cors')
const app = express();

app.use(cors())
app.get('/getState', (req,res) => {
    const notificationSet = {
        "network":7,
        "jobs": 8,
        "messaging":7,
        "notification":5
    }
    res.status(200).json(notificationSet);


})


app.listen(PORT, () => console.log("server started on port 3000"))