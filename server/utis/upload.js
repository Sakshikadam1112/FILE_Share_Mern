//this is a middleware which tels where to upload

import multer from "multer";

const upload =multer({dest:'uploads'});

export default upload;