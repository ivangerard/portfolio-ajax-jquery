//create new express router
var express = require('express')
var fileUpload = require('express-fileupload');
var router = express.Router()
var itemsController = require('../controllers/items')

//export router

router.post('/items', itemsController.insert)
router.get('/items', itemsController.displays)
router.put('/items/:id', itemsController.update)
router.delete('/items/:id', itemsController.deleteitem)

router.post('/upload', function(req, res) {
    var sampleFile;

    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }
    sampleFile = req.files.sampleFile;
    sampleFile.mv('./', function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send('File uploaded!');
        }
    });
});

module.exports = router
