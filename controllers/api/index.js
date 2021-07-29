const router = require('express').Router()

const userRoute = require('./user-routes')
const postRoute = require('./post-routes')
const commentRoute = require('./comment-routes')


router.use('/posts', postRoute)
router.use('/users', userRoute)
router.use('/comments', commentRoute)

module.exports = router