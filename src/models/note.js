const connection = require('../configs/db')
module.exports = {
    postNote: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO note SET ?', data, (err, res) => {
                if (!err) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    },
    patchNote: (data, idNote) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE note SET ? where idNote=?', [data, idNote], (err, res) => {
                if (!err) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    },
    getAllNotes: (sort) => {
        return new Promise((resolve, reject) => {
            let order
            if(sort === 'desc'){
                order = 'order by title desc'
            }else{
                order = 'order by title asc'
            }
            connection.query('SELECT * FROM note INNER JOIN category ON note.categoryId = category.idCategory '+order ,(err, res) => {
                if (!err) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteNote: (idNote) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE from note where idNote=?',  idNote, (err, res) => {
                if (!err) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    },
}