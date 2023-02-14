const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const { router } = require('./routes/routes')
const app = express();
app.use(express.json())
require('dotenv').config()
//  database connaction with mongoose
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log("Connaction Successful"))
    .catch((err) => (console.log(err)))
app.use(cors());
app.use('/api/', router)
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
app.listen(5000, () => {
    console.log("Listing....");
})