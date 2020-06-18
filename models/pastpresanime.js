module.exports = (sequelize, DataTypes) => {
    const PastPres = sequelize.define('pastpres', {
        nameOfAnime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastEpisodeSeen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating1To10: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        favoriteEpEpsFight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        favoriteCharacter: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return PastPres;
}