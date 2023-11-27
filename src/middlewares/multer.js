const multer = require('multer')
const path = require('path')
const uuid = require('uuid')

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, path.resolve(__dirname, '..', 'public', 'uploads'))
    },

    filename: (req,file, cb) =>{
        cb(null, uuid.v4() + '-' + file.originalname )
    }
})

const fileFilter = (req,file,cb) =>{
    const allowedExtensions = ['.png', '.jpg', '.webp']
    const fileExtension = path.extname(file.originalname)

    if(allowedExtensions.includes(fileExtension)){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const upload = multer({
    fileFilter: fileFilter,
    storage: storage,
    limits: {
        fileSize: 3 * 1024 * 1024
    }
})

module.exports = upload