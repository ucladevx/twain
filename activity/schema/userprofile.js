module.exports = (Sequelize, db) => {
    const user = db.define("user", {
        // universally unique identifier field
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        // user's first name
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: {
                    bounds: [2, 225],
                    error_message: "Your first name must be at least 2 characters long."
                },
                notEmpty: {
                    error_message: "A first name is required."
                }
            }
        },
        // user's last name
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: {
                    bounds: [2, 225],
                    error_message: "Your last name must be at least 2 characters long."
                },
                notEmpty: {
                    error_message: "A last name is required."
                }
            }
        },
        // type of account the user wishes to create
        account_type: {
            type: Sequelize.ENUM("profile", "admin", "dev"),
            defaultValue: "profile"
        }
    })

    // defining methods for interacting with the user

    return user;
}