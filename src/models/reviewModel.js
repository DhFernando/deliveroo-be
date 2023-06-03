module.exports = function(sequelize, DataTypes){
    const Review = sequelize.define('review', { 
        rating: {
            type: DataTypes.INTEGER,

        },
        description: {
            type: DataTypes.TEXT
        }  
    })
    return Review
}