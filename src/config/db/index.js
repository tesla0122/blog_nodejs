const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/F8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Conect successfully!!!');
    } catch (error) {
        console.log('Connect Fail!!!!');
    }
}

module.exports = { connect };
