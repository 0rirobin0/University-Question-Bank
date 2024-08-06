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
     query.course = params.SelectedDepartment;
   }
 
   return query;
 };

exports.UploadQuestion=async(req,res)=>
{
 const data= req.body;

 try {
    const que = new Question(data);
    await que.save();
    res.status(201).json({message:'Questions added successfully', que})

 } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error : Question Upload Failed' });
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