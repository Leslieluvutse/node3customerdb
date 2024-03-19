module.exports = (sequelize, DataTypes) => {
              const Registration = sequelize.define('registrations', {
                  registration_id: {
                      type: DataTypes.INTEGER,
                      primaryKey: true,
                      autoIncrement: true,
                  },
                  username: {
                      type: DataTypes.STRING,
                      allowNull: false,
                  },
                  password: {
                      type: DataTypes.STRING,
                      allowNull: false,
                      
                  }
              })
          
          
              return Registration
          }