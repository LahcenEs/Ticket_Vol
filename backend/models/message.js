
import sequelize from '../database.js';
import { DataTypes } from 'sequelize';

const Message = sequelize.define("message", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Message can not be empty."
            }
        }
    },
    
   
}, {
     timestamps: false,
     createdAt:true,
    // paranoid: true,
   
});

export default Message;
