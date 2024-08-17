const express = require('express');
const router = express.Router();
const QuestionController =require('../controllers/QuestionController');
const upload = require("../config/multer");

router.get('/',QuestionController.GetAllQuestion);
router.get('/filtered',QuestionController.GetFilteredQuestion);
router.get('/:id',QuestionController.GetQuestionbyID);
router.post('/post',upload.single('file'),QuestionController.UploadQuestion);



module.exports = router;