const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/authRouter.js');
const userRouter = require('../users/userRouter.js');

const friendRouter = require('../friends/friendsRouter.js');
const familyRouter = require('../family/familyRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

server.use('/api/friends', friendRouter);
server.use('/api/family', familyRouter);

server.get('/', (req, res) => {
    res.send("API is running!");
});
  
module.exports = server;