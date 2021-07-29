const router = require('express').Router();
const {Comment} = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/',(res,req)=> {
    Comment.findAll()
    .then(dbcommentdata=> res.json(dbcommentdata))
    .catch(err=> {
        console.log(err);
        res.status(500).json(err)
    })
})

router.post('/',withAuth,(req,res)=> {
    if(req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
        .then(dbcommentdata => res.json(dbcommentdata))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    }
})

router.delete('/:id',withAuth,(req,res)=> {
    if(req.session){
        Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbcommentdata => {
            if(!dbcommentdata) {
                res.status(404).json({message: 'no comment found'})
                return
            }
            res.json(dbcommentdata)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }
})

module.exports = router