// Server imports and setup
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

// Routes for the server
const router = require("./router");
const cors = require("cors");

// App setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server setup
const port = 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on: ", port);
