const router = require('express').Router();
const userRoutes = require('./userRoutes');
const topicRoutes = require('./topicRoutes');

router.use('/users', userRoutes);
router.use('/topic', topicRoutes);

module.exports = router;
