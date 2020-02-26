if (process.env.NODE_ENV !== 'production'){ 
    require('dotenv').config()
 }
const express = require ('express')
const app = express()
const expressLayouts = require ('express-ejs-layouts')

const router = require ('./routes/api')
const AuthorsRouter = require ('./routes/authors')
const bodyParser = require ('body-parser')


app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit:'10mb',extended: false}))


const mongoose = require ('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', error => console.error(error));
db.once('open',() => console.log('Connected to Mongoose! ^^'))




app.use('/', router)
app.use('/authors', AuthorsRouter)


app.listen(process.env.PORT || 1100)












