import { RequestHandler, ErrorRequestHandler } from "express";

const express = require("express");

const app = express();

app.use(((request, response, next) => {
  response.write("1");
  next();
}) as RequestHandler);

app.use(((request, response, next) => {
  response.write("2");
  next("no Login");
}) as RequestHandler);

app.use(((request, response, next) => {
  response.write("3");
  next("");
}) as RequestHandler);

app.use(((err, request, response, next) => {
  if (response.headersSent) {
    return next(err);
  }
  response.status(500);
  response.send(err);
}) as ErrorRequestHandler);

app.listen(3000, () => {
  console.log("正在监听3000端口");
});
