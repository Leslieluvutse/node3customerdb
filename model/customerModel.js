module.exports=(sequelize,DataTypes) =>{
              const customer = sequelize.define('customers',{
              customer_id:{
                            type: DataTypes.INTEGER,
                            primaryKey:true,
                            autoIncrement:true,
                          },
                          first_name:{
                               type:DataTypes.STRING,
                               allowNull:false,
                          },
                          last_name:{
                            type:DataTypes.STRING,
                            allowNull:false
                          },
                          gender:{
                            type:DataTypes.STRING,
                            allowNull:false,
                          },
              //             email:{
              //                type:DataTypes.STRING,
              //                allowNull:false,
              //             },
              //              phone_number:{
              //               type:DataTypes.INTEGER,
              //               allowNull:false,
              //              },

              });
return customer;
}
