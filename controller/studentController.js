const { where } = require("sequelize")
const db = require("../model/dbConnect")
const students =db.students

module.exports = {
    addStudent: async (req, res, next) => {
        try {
            let info = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                gender: req.body.gender
            }

            const addStudent = await
                students.create(info)
            res.status(200).send(addStudent)
        } catch (error) {
            next(error)
        }
    },

    getAllStudents: async (req, res, next) => {
        try {
            let getAllStudents = await student.findAll({})
            res.status(200).send(getAllStudents)
        } catch (error) {
            next(error)
        }
    },

    getStudent: async (req, res, next) => {
        try {
            let id = req.params.id
            let Student = await student.findOne({ where: { student_id: id } })

            if (!student) {
                throw (createError(404, "Student not found"))
            }
            res.status(200).send(Student)
        } catch (error) {
            next(error)
        }
    },

    updateStudent: async (req, res, next) => {
        try {
            let id = req.params.id

            const updateStudent = await students.update(req.body, { where: { student_id: id } })
            if (!student) {
                throw (createError(404, "Student not found"))
            }
            res.status(200).send(updateStudent)
        } catch (error) {
            next(error)
    
        }
    },
}
