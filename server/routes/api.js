//create new express router
var express = require('express')
var router = express.Router()
var itemsController = require('../controllers/items')

//export router

router.post('/items', itemsController.insert)
router.get('/items', itemsController.displays)
router.put('/items/:id', itemsController.update)
router.delete('/items/:id', itemsController.deleteitem)

module.exports = router
