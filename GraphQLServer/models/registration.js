module.exports = (sequelize, DataTypes) => {
    const Registration = sequelize.define('Registration', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        dob: DataTypes.DATE,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        country: DataTypes.STRING
    });

    return Registration;
};