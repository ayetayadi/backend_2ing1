// const http = require("http")
// avec   "type": "module" , on peut appliquer import et export mais non pas require
import http from "http";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

/*export const a = 10
export const b = 5
export default c = 1*/
