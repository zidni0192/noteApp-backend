const controller = require('../controllers/note')
const app = require('express')
const Route = app.Router()
Route
.post('/',controller.postNote)
.patch('/:idNote',controller.patchNote)
.get('/',controller.getAllNotes)
.delete('/:idNote',controller.deleteNote)

module.exports = Route