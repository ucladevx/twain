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
                type: Sequelize.ENUM(
                    "USER_LOGIN", "USER_LOGOUT", "INPUT_ACTIVITY_NAME",
                    "INPUT_ACTIVITY_DESCRIPTION", "ALL_DAY_CHECK",
                    "TIME_SPECIFIC_CHECK", "SUBCATEGORIZE_ACTIVITY",
                    "CREATE_NEW_LABEL", "SET_LABEL_COLOR", "SET_LABEL_NAME",
                    "SET_PRIORITY", "SET_PRIORITY_1", "SET_PRIORITY_2",
                    "SET_PRIORITY_3", "SET_PRIORITY_4", "SET_PRIORITY_5",
                    "CREATE_TASK", "COMPLETE_TASK", "FINISH_TASK_EARLY",
                    "FINISH_TASK_ONTIME", "FINISH_TASK_LATE",
                    "SET_TASK_REMINDER", "SNOOZE_TASK", "DELETE_TASK",
                    "CANCEL_TASK", "EDIT_CALENDAR_EVENT",
                    "DELETE_CALENDAR_EVENT", "VIEW_COMPLETED_EVENTS",
                    "SHARE_APP_REFERRAL", "SHARE_FEEDBACK"
                )
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
        })

    return activityTable
}
