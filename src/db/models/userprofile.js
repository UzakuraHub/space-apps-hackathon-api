'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userProfile.belongsTo(models.user, {
        foreignKey: 'userId',
      })
    }
  };
  userProfile.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    language: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'userProfile',
  });
  return userProfile;
};