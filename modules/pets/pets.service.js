// const Queue = require('../queue/Queue');
// const store = require('../../store');

// // Set up initial data.
// // --------------------

// const pets = {
//   cats: new Queue(),
//   dogs: new Queue()
// };

// store.cats.forEach(cat => pets.cats.enqueue(cat));
// store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// // --------------------

// module.exports = {
//   get() {
//     // Return the pets next in line to be adopted.
//     let thePets = {
//       cat: pets.cats.show(),
//       dog: pets.dogs.show(),
//     };
//     return thePets;
//   },

//   dequeue(type) {
//     // Remove a pet from the queue.
//     console.log(pets.cats.all());
//     if (type === 'cat') {
//       return pets.cats.dequeue();
//     }
//     if (type === 'dog') {
//       return pets.dogs.dequeue();
//     }
//   }
// };
