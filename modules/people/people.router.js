// const express = require('express');
// const json = require('body-parser').json();

// const People = require('./people.service');
// const peopleService = require('./people.service');

// const router = express.Router();

// router.get('/', (req, res) => {
//   // Return all the people currently in the queue.
//   // const people = peopleService.get();
//   // if (!People) {
//   //   return res.status(400).error({
//   //     error: 'No People'
//   //   });
//   // }
//   return res
//     .status(200)
//     .json(People.get());
// });

// router.post('/', json, (req, res) => {
//   // Add a new person to the queue.
//   const { person } = req.body;
//   People.enqueue(person);
//   res
//     .status(201)
//     .json({ message : 'person added'});
// });

// module.exports = router;