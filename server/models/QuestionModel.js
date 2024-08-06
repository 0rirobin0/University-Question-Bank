const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema(
    {
        
        title: {
            type:String,
            required:true
        },
        university: {
            type:String,
            required:true
        },
        department: {
            type:String,
            required:true
        },
        course: {
            type:String,
            required:true
        },
        year: {
            type:Number,
            required:true
        },
        type: {
            type:String,
            required:true
        }, 
         link: {
            type:String,
            required:true
        },
        uploader_id: {
            type:String,
            required:true
        },
        isAproved: {
            type:Boolean,
            required:true
        },
        contentType:
        {
            type:String,
            default:"question",
            required:true
        },
        UploadTime:
        {
           type: Date, 
           default: Date.now 
        }
        



    }
);

module.exports = mongoose.model('Question',QuestionSchema);