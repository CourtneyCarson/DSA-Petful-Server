const express = require('express')
// const xss = require('xss')
// const jsonBodyParser = express.json()
const cats = require('../../store/cats-array')
const Queue = require('../queue/Queue')

const catsRouter = express.Router()
const catQueue = new Queue()

cats.forEach(cat => catQueue.enqueue(cat))


catsRouter
  .route('/')
  .get((req, res, next) => {
    FirstCat = catQueue.first.value
    res.status(200).json(FirstCat)
  })
  .delete((req, res, next) => {
    AdoptedCat = catQueue.dequeue()
    catQueue.enqueue(AdoptedCat)
    res.status(200).json(AdoptedCat)
  })

module.exports = catsRouter