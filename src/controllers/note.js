const models = require('../models/note')
module.exports = {
    postNote: (req, res) => {
        const data = {
            title: req.body.title,
            description: req.body.description,
            categoryId: req.body.categoryId,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        models.postNote(data).then((result) => {
            res.json({ ...data, idNote: result.insertId })
        }).catch((error) => {
            console.log(error);
        })
    },
    patchNote: (req, res) => {
        const data = {
            title: req.body.title,
            description: req.body.description,
            categoryId: req.body.categoryId,
            updatedAt: new Date()
        }
        const idNote = req.params.idNote
        models.patchNote(data, idNote).then((result) => {
            res.json({ ...data, idNote: result.insertId })
        }).catch((error) => {
            console.log(error);
        })
    },
    getAllNotes: (req, res) => {
        const sort = req.query.sort||'asc'
        models.getAllNotes(sort).then((result) => {
            res.json(result)
        }).catch((error) => {
            console.log(error);
        })
    },
    deleteNote: (req, res) => {
        const idNote = req.params.idNote
        models.deleteNote(idNote).then((result) => {
            res.json(result)
        }).catch((error) => {
            console.log(error);
        })
    },
}