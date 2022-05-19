const express = require('express');
const connect = require('./src/config/db');
const cors = require('cors')

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const {signup , signin} = require('./src/controllers/auth.controller');
const userController = require('./src/controllers/user.controller');
const upload = require('./src/utils/file-upload')
app.post("/signup",upload.single("profilePic"), signup);
app.post("/signin", signin);

app.use("/users", userController);

const start = async () => {
    await connect();
    
    app.listen(PORT, () =>{
        console.log(`Listening on port ${PORT}`);
    })
}
module.exports =start;