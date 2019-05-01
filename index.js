require('dotenv').config();

const server = require('./api/server.js');

// const port = 3000

server.listen(process.env.PORT || 3000, () => {
console.log(`\n*** Server Running on http://localhost:3000 ***\n`);
});