const express = require('express');
const courseController = require('../Controller/courses.controller');
const router = express.Router();
const verifyToken = require('../middleware/verfiyToken');
const userRoles = require('../utils/userRoles');
const allowedTo = require('../middleware/allowedTo');
const { validationSchema } = require('../middleware/validationSchema');

router.route('/')
    .get(courseController.getAllCourses)
    .post(courseController.addCourse)
    .delete(courseController.deleteCourse)
    .patch(courseController.updateCourse)

router.route('/:courseId')
    .get(courseController.getCourse)
    

// .delete(verifyToken, allowedTo(userRoles.ADMIN,userRoles.MANGER), courseController.deleteCourse)




module.exports = router;