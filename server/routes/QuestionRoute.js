const express = require('express');
const router = express.Router();
const QuestionController =require('../controllers/QuestionController')

router.get('/',QuestionController.GetAllQuestion);
router.get('/filtered',QuestionController.GetFilteredQuestion);
router.get('/:id',QuestionController.GetQuestionbyID);
router.post('/',QuestionController.UploadQuestion);



module.exports = router;