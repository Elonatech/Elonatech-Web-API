const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoute');
const blogRoutes = require('./routes/blogRoute');
const productRoutes = require('./routes/productRoute');
const { connectDB } = require('./config/database')

// JSON
app.use(express.json())
app.use(express.urlencoded({extended:"true"}));

// CORS
app.use(cors({ origin:"*", credentials:true }));

//MORGAN
// app.use(morgan());

// DATABASE 
connectDB();

// ROUTES
app.get('/' , (req, res) =>{
    res.send('ELONATECH API RUNNING');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/product', productRoutes);

// PORT
app.listen(PORT, ()=>{
    console.log(`PORT STARTED AT ${PORT}`)
});