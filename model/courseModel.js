module.exports=(sequelize,DataTypes) =>{
              const course = sequelize.define('courses',{
              course_id:{
                            type: DataTypes.INTEGER,
                            primaryKey:true,
                            autoIncrement:true,
                          },
                          course_name:{
                               type:DataTypes.STRING,
                               allowNull:false,
                          },
                        

              });
return course;
}
