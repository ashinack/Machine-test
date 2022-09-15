const express=require('express')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const hbs=require('express-handlebars')
const path=require('path')
const Cart=require('./models/cart')
const config=require('./configure/connection')
const ShoppingCart=require('./routes/cartRoute')
const Product=require('./routes/ProductRoute')



const app=express()

dotenv.config()

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout/', partialsDir: __dirname + '/views/partials/' }))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));


//route
app.use('/', ShoppingCart)
app.use('/product', Product)





app.listen(process.env.PORT, () => console.log(`listening ${process.env.PORT}`))

