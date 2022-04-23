const express = require("express");

const router = express.Router();

router.get("/", (request, response, next) => {
  response.end("This is index");
});

router.get("/:id", (request, response, next) => {
  response.end("This is id page");
});

router.get("/:id/edit", (request, response, next) => {
  response.end("This is edit page");
});

module.exports = router;
