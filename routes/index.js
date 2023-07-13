var express = require('express');
var router = express.Router();
const Tweet = require('../models/tweets');
require('../models/connection');
const User = require('../models/users');


// récupération de tous les tweet
router.get('/tweets',  (req, res) => {
    .then((response) => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ tweet: data.tweets });
      } else {
        res.json({ tweets: [] });
      }
    });
});



// Route GET pour récupérer les tweets d'après gpt
// router.get('/tweets', async (req, res) => {
//   try {
   
// const tweets = await Tweet.find().populate('userId'); // Utilisez la méthode find() pour récupérer tous les tweets et utilisez populate() pour obtenir les données de l'utilisateur associé via la référence "userId"
//     res.json(tweets);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erreur lors de la récupération des tweets' });
//   }
// });






// création d'un nouveau tweet
router.post('/tweets/:userId', (req, res) => {
  const newTweet = new Tweet({
    date: req.body.date,
    message: req.body.message,
    user : userId,
  });
  newTweet.save()
  .then(newdoc => {
    res.json({ tweet: newdoc.tweets });
  });
});

// Route POST pour créer un nouveau tweet d'après gpt
// router.post('/tweets', async (req, res) => {
//   try {
//     const { date, message, userId } = req.body; // Récupérez les données du tweet à partir du corps de la requête (req.body)
//     // Créez une instance du modèle Tweet avec les données fournies  
// const newTweet = new Tweet({
//       date,
//       message,
//       userId,
//     });

//     // Enregistrez le nouveau tweet dans la base de données
//     const savedTweet = await newTweet.save();
//     res.
//     res
// status(201).json(savedTweet);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erreur lors de la création du tweet' });
//   }
// });





module.exports = router;
