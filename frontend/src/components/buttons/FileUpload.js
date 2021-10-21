import React, { Fragment, useState } from "react";
import axios from "axios";
import "./upload.css";


// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const crypto = require('crypto');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');



// // import express from "express";
// // import bodyParser from "body-parser";
// // import path from "path";
// // import crypto from "crypto";
// // import mongoose from "mongoose";
// // import multer from "multer";
// // import GridFsStorage from "multer-gridfs-storage";
// // import Grid from "gridfs-stream";
// // import methodOverride from "method-override";



// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(methodOverride('_method'));
// app.set('view engine', 'ejs');

// // Mongo URI
// const mongoURI = 'mongodb+srv://Owen:Judge@cluster0.blk2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// // Create mongo connection
// const conn = mongoose.createConnection(mongoURI);

// // Init gfs
// let gfs;

// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads');
// });

// // Create storage engine
// const storage = new GridFsStorage({
//   url: mongoURI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage });

// // @route GET /
// // @desc Loads form
// app.get('/', (req, res) => {
//  res.render('index');
// });

// // @route POST /upload
// // @desc  Uploads file to DB
// app.post('/upload', upload.single('file'), (req, res) => {
//   // res.json({ file: req.file });
//   res.redirect('/');
// });



const FileUpload = () => {
  return (
    
      <body>
  <div class="container files">
    <div class="row">
      <div class=" m-auto">
        <h1 class="text-center display-4 ">Upload File</h1>
        <form action="/upload" method="POST" enctype="multipart/form-data">
          <div class="custom-file mb-3">
            <input type="file" name="file" id="file" class="custom-file-input"></input>
          </div>
          <input type="submit" value="Submit" class="btn btn-primary btn-block"></input>
        </form>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
</body>
    
  );
};

export default FileUpload;
