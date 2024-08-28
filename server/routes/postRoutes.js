import express from 'express';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// get all posts

router.get('/', async (req, res) => {

});

// create a post

router.post('/', async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl,
        })

        res.status(201).json({
            success: true,
            data: newPost,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error,
        })
    }
});


export default router;