module.exports = (Sequelize, db) => {
    const task = db.define("task", {
        // universally unique identifier field
        uuid: {
            type: Sequelize.UUID,
            default_value: Sequelize.UUIDV4
        },
        // 
    })
}