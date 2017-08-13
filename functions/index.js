// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/favicon.ico', function(req, res) {
  res.send(204);
});

app.get('/test', (req, res) => {
  res.set('Cache-Control', 'public, max-age=60, s-maxage=180');
  res.send(`${Date.now()}`);
});

exports.app = functions.https.onRequest(app);
