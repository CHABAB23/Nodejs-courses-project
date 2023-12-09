// const mongoose = require('mongoose');
const asyncWarraper = require('../middleware/asyncWarraper');
const Course = require('../models/course.model');



const getAllCourses = asyncWarraper( async (req,res) => {
    const query = req.query;
    const limit = query.limit;
    const page = query.page;
    const skip = (page - 1)*limit;
    
    const courses = await Course.find({},{"__v" : false});
    res.json({status : "seccess" , data : {courses}})
});

const getCourse = asyncWarraper(  async (req,res)=>{
    
    const course = await Course.findById(req.params.courseId);
    res.json({status : "seccess" , data : {course}});

});

const addCourse = asyncWarraper(  async (req, res)=>{

    const {title, price} = req.body;

    const newCourse = new Course({title, price});
    await newCourse.save();

    const courses = await Course.find();
    res.json({status : "seccess" , data : {courses}})

});

const updateCourse = asyncWarraper(  async (req,res)=>{

    const query = req.query;
    const courseId = query.courseId;
    
    //const courseId = req.params.courseId;
    await Course.findByIdAndUpdate(courseId , {$set : {...req.body}});

    res.status(200).json(course);
});

const deleteCourse = asyncWarraper(   async (req,res)=>{
    const query = req.query;
    const courseId = query.courseId;
    //const courseId = req.params.courseId;
    const data = await Course.deleteOne({_id: courseId});

    res.status(200).json({status : "seccess" , data : null});


});



module.exports = {
    getAllCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse,
};