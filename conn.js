const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
    console.log('connected to db!!')
}).catch((e) => {
    console.log('Not Connected To DB ', e.message)
})

