const mongoose = require('mongoose');
const Question = require('../models/QuestionModel');

// function to handle question filter
const buildQuery = (params) => {
   const query = {};
 
   if (params.SelectedUniversity) {
     query.university = params.SelectedUniversity;
   }
 
   if (params.SelectedDepartment) {
     query.department = params.SelectedDepartment;
   }
 
   if (params.SelectedCourse) {
     query.course = params.SelectedCourse;
   }
 
   return query;
 };

exports.UploadQuestion= async(req,res)=>
{
   try {
      // req.file contains information about the uploaded file
      const file = req.file;
  
      // req.body contains other form fields
      const { contentType, course, department, title, university, type } = req.body;
  
      if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
  
      // Create a new entry in your database or perform any other actions with the uploaded file and form data
      const que = new Question({
        link: file.path, // URL of the uploaded file in Cloudinary
        public_id: file.filename, // Public ID of the uploaded file
        contentType,
        course,
        department,
        title,
        type,
        university
      });
  
      await que.save();
      
      res.status(201).json({ message: 'Questions added successfully', que });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error: Question Upload Failed' });
    }
    
}  



exports.GetAllQuestion = async(req,res)=>
    {
      
       
     try {
        const data = await Question.find();
        res.status(200).json(data);
     } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error : Question FindAll failed' });
     }

    
    
    }  

exports.GetFilteredQuestion = async (req,res)=>
{
    
   const params = req.query;
   console.log(params);
   
   const query = buildQuery(params);

   try {
      const data = await Question.find(query);
      res.status(200).json(data);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error : Question Find failed' });
   }
}



exports.GetQuestionbyID = async(req,res)=>
        {
         
        const {id}=req.params;

         try {
            const data = await Question.findById(id);
            if (!data) return res.status(404).json({ message: 'Question Not Found' });

            res.status(200).json({ message: 'Question Not Found ' });
         } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error : Question FindById failed' });
         }
                
        
        
        }  