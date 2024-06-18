import fetch from 'node-fetch';
import cheerio from 'cheerio'; // Assuming you're using cheerio for HTML parsing

export async function fetchVideo(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const videoUrl = extractVideoUrl(html);
        return videoUrl;
    } catch (error) {
        throw new Error('Failed to fetch video');
    }
}

function extractVideoUrl(html) {
    try {
        const $ = cheerio.load(html);
        // Implement logic to find and extract the video URL from TikTok HTML
        // Example: Assuming video URL is in a <video> tag with src attribute
        const videoUrl = $('video').attr('src');
        return videoUrl;
    } catch (error) {
        throw new Error('Failed to extract video URL');
    }
}
