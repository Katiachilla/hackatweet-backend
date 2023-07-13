var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

// a modifier//
router.get('/tweet', (req, res) => {
  fetch(`http://localhost:3000`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ tweet: data.tweets });
      } else {
        res.json({ tweets: [] });
      }
    });
});


// à compléter : 
router.post('/tweet/:', (req, res) => {});



module.exports = router;
