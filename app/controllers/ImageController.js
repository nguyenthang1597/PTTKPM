var multer = require('multer');
var fs = require('fs')
var path = require('path')
var crypto = require('crypto');

var storage = multer.diskStorage({
    //folder upload -> public/upload
    destination: 'public/upload/',
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)
            cb(null, Math.floor(Math.random() * 9000000000) + 1000000000 + path.extname(file.originalname))
        })
    }
})
var upload = multer({ storage: storage });
module.exports =  function (app){
    //show all image in folder upload to json
    app.get('/files', function (req, res) {
        const images = fs.readdirSync('public/upload')
        var sorted = []
        for (let item of images) {
            if (item.split('.').pop() === 'png'
                || item.split('.').pop() === 'jpg'
                || item.split('.').pop() === 'jpeg'
                || item.split('.').pop() === 'svg') {
                var abc = {
                    "image": "/upload/" + item,
                    "folder": '/'
                }
                sorted.push(abc)
            }
        }
        res.send(sorted);
    })
    //upload image to folder upload
    app.post('/upload', upload.array('flFileUpload', 12), function (req, res, next) {
        res.redirect('back')
    });

    //delete file
    app.post('/delete_file', function (req, res, next) {
        var url_del = 'public' + req.body.url_del
        if (fs.existsSync(url_del)) {
            fs.unlinkSync(url_del)
        }
        res.redirect('back')
    });
}