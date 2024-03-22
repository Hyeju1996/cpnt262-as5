"use strict";
import http from "http";
import fs from "fs";
import { pageData } from "./pageData.js";

const host = "localhost";
const port = 3000;

const serverMessageListener = (req, res) => {
  res.writeHead(200);
  res.end("This is better server code running!");
};

const htmlMessageListener = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(pageData);
};
const server = http.createServer((req, res) => {
  let filePath = "." + req.url;
  if (req.url === "/") {
    filePath = "./index.html";
  } else if (req.url === "/about") {
    filePath = "./about.html";
  } else {
    filePath = "./404.html";
  }
 
 
  



  fs.readFile(filePath, (error, content) => {
    // TODO: Handle errors
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  });
});

server.listen(port, host, () => {
  console.log(`server is running on http://${host}:${port} `);
});
