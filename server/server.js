import express from 'express';
import bodyParser from 'body-parser';
import { fetchVideo } from './fetchVideo.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// mention about the error
app.post('/download', async (req, res) => {
    const url = req.body.url;
    try {
        const videoUrl = await fetchVideo(url);
        res.json({ downloadUrl: videoUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch video URL' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
