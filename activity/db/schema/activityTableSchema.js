const config = require("../../Config")

module.exports = (Sequelize, db) => {
    const activityTable = db.define("activityTable",
        {
            // id (row number)
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            // universally unique identifier field
            uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            // uuid of the user whose activity it is
            user_uuid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            // the type of activity being logged
            activity_type: {
                type: Sequelize.ENUM(...config.activityTypes)
            },
            // a description of the activity being logged
            activity_description: {
                type: Sequelize.STRING
            },
            // a timestamp of the time the activity got logged
            timestamp: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        },
        {
            freezeTableName: true
        }
    )

    return activityTable
}
