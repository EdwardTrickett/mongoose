const mongoose = require ('mongoose');
require('dotenv').config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
    } catch (error) {
        console.log(error)
    }
};node 

const disconnect = () => {
    mongoose.disconnect()
};

connection();

module.exports = {
    disconnect,
}
