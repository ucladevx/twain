const config = require("../../Config")

module.exports = (Sequelize, db) => {
    const milestoneTable = db.define("milestoneTable",
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
            // name of milestone (must come from Config.js)
            milestone_type: {
                type: Sequelize.ENUM(...config.milestoneTypes)
            },
            milestone_format: {
                type: Sequelize.ENUM(...config.milestoneFormats)
            },
            // the activity_type we're checking for (also must come from Config.js)
            activity_type: {
                type: Sequelize.ENUM(...config.activityTypes)
            },
            // how many instances of the activity_type we're
            // looking for
            quantity: {
                type: Sequelize.INTEGER
            },
            // timeframe of the milestone in days
            n_days: {
                type: Sequelize.INTEGER
            }
        },
        {
            freezeTableName: true
        }
    )

    return milestoneTable
}