const cloudinary = require('cloudinary')
const models = require('../models/category')
module.exports = {
    postCategory: async (req, res) => {
        let path = req.file.path
        let getUrl = async () => {
            cloudinary.config({
                cloud_name: 'dboxbbxe4',
                api_key: '461246952114187',
                api_secret: '0Ek0wq8tap2RlE2RxzHQB_8UtZU'
            })
            let data
            await cloudinary.uploader.upload(path, (result, error) => {
                const fs = require('fs')
                fs.unlinkSync(path)
                data = result
            })
            return data
        }
        let result
        await getUrl().then((res) => {
            result = res
        }).catch((err) => {
            throw err
        })

        const data = {
            image: result.url,
            name: req.body.name,
            color: req.body.color,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        models.postCategory(data).then((result) => {
            res.json({ ...data, idCategory: result.insertId })
        }).catch((error) => {
            console.log(error);
        })
    },
    getAllCategory: (req, res) => {
        models.getAllCategory().then((result) => {
            res.json(result)
        }).catch((error) => {
            console.log(error);
        })
    }
}