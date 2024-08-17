const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary'); // Adjust the path according to your project structure

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'questions', // folder in Cloudinary where files will be stored
    allowed_formats: ['jpg', 'jpeg', 'png', 'pdf'], // allowed file formats
    public_id: (req, file) => {
      // Optional: Use the file name without extension or a custom public ID
      return file.originalname.split('.')[0]; 
    },
  },
});

// File filter to allow only certain types of files
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/jpg',
    'application/pdf'
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only image and PDF files are allowed!'), false);
  }
};

// Set up multer upload with Cloudinary storage and file filter
const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
