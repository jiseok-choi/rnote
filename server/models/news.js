//news 테이블 정보 담기
module.exports = (sequelize, DataTypes) => (
    sequelize.define('news', {
        friendid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 
        date: {
            type: DataTypes.DATE, 
            allowNull: false,
        }, 
        title: {
            type: DataTypes.STRING(50), 
            allowNull: false,
        }, 
        contents: {
            type: DataTypes.STRING, 
            allowNull: true,
        }, 
        userid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
    }, {
        timestamps: true, //생성일, 수정일 기록
        paranoid: true, //삭제일기록(복구용)
    })
);