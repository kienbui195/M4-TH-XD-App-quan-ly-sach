const Controller = require("../src/controller/controller");
const router = require('express').Router();
const multer= require('multer');
const upload = multer();

let controller = new Controller();

router.get('/', (req, res, next) => {
    controller.index(req, res, next).catch(err => {
        console.log(err.message);
    })
})

router.get('/create', (req, res, next) => {
    controller.showFormCreate(req, res, next)
})

router.post('/', upload.none(), (req, res, next) => {
    controller.getData(req, res, next).catch(err => {
        console.log(err.message)
    })
})

router.get('/delete' , (req, res, next) => {
    controller.deleteBook(req, res, next).catch(err => {
        console.log(err.message)
    })
})

router.get('/details', (req, res, next) => {
    controller.showDetails(req, res, next)
})
module.exports = router;


