module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        task: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Posts;
};