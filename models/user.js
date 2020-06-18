module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailaddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return User;
}