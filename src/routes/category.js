const controller = require('../controllers/category')
const app = require('express')
const Route = app.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./src/uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,`${new Date().getTime()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

    Route
    .post('/',upload.single('image'),controller.postCategory)
    .get('/',controller.getAllCategory)

module.exports = Route