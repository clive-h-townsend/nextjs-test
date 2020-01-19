const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const path = require('path')
const next = require("next")

var dev = process.env.NODE_ENV !== "production"
dev = false
var app = next({ dev, conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` } })
var handle = app.getRequestHandler()

exports.next = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res))
})