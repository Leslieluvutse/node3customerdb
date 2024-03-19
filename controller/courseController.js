const db = require('../model/dbConnect')
const courses = db.courses
const  { where } = require("sequelize");

//Add new Course
module.exports = {
    addCourse : async(req, res, next)=> {
        try{
              let info = {
                            course_name: req.body.course_name,            
                        }
            const addCourse = await courses.create(info);
        res.status(200).send("addCourseMethod");
    }catch (error) {
        console.log(error);
        next(error);
    }
},
//get AllCourse
    getAllCourses:(req,res,next)=>{
        try{
            let course = course.findAll({})
            res.status(200).send(course)
        }
        catch (error)
        {
            next(error)
        }
},

}