require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors'); 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const frontUrl = process.env.NEXT_PUBLIC_APP_FRONTEND_URL;


// Route Import 
const QuestionRoute =require("./routes/QuestionRoute")

const app= express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());

// CORS POLICY
const corsOptions ={
    origin:`${frontUrl}`, 
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,            
    optionSuccessStatus:200,
  }
app.use(cors(corsOptions));  

// Routes
app.use('/question',QuestionRoute);
app.use('resources',(req,res)=>
{
  res.status(200);
});





























// DB And Server Connection
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
 
    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });





app.get('/', (req, res) => {
    res.send('Welcome to UniversityQuestionBank App By Robin ');
  });







