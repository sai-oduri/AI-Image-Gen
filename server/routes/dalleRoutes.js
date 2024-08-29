import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

router.get('/', (req, res) => {
    res.send("hello from dalle");
});

router.post('/', async (req, res) => {
    try {
        const { prompt } = req.body

        const aiResponse = await openai.images.generate({
            prompt,
            model: 'dall-e-3',
            n: 1,
            size: '1024x1024',
        });

        const image = aiResponse.data[0].url
        res.status(200).json({ photo: image });

    } catch (error) {
        console.log(error);
        // res.status(500).send("error");
        res.status(500).json({ message: "error" });
    }
})

export default router;