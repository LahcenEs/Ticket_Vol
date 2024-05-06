
import sequelize from '../database.js';
import { DataTypes } from 'sequelize';
import Message from './message.js';

const Client = sequelize.define("client", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "First name cannot be empty."
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Last name cannot be empty."
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'The email is already in use.'
        },
        validate: {
            isEmail: {
                args: true,
                msg: "Invalid email address."
            }
        }
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "phone number cannot be empty."
            }
        }
    }

}, {
     timestamps: false,
    // paranoid: true,
   
});

//Relation
Client.hasMany(Message,{foreignKey:{allowNull:false},as:'Message',onDelete:'CASCADE'});
Message.belongsTo(Client);
export default Client;
