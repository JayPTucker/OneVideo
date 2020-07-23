const express = require('express');
const router = express.Router();
const multer = require('multer');
var ffmpeg = require('fluent-ffmpeg')

const { Video } = require("../models/Video");

const { auth } = require("../middleware/auth");

router.get("/getVideos", (req, res) => {

    Video.find()
      .populate('writer')
      .exec((err, videos) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, videos })
      })
});

router.post("/getVideo", (req, res) => {
    Video.findOne({ "_id" : req.body.videoID })
    .populate('writer')
    .exec((err, video) => {
      if(err) return res.status(400).send(err);
      res.status(200).json({ success: true, video })
    })
});

module.exports = router;