document.getElementById('download-btn').addEventListener('click', function() {
    const url = document.getElementById('tiktok-url').value;
    if (url) {
        fetch('/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url })
        })
        .then(response => response.json())
        .then(data => {
            const link = document.createElement('a');
            link.href = data.downloadUrl;
            link.textContent = 'Download Video';
            link.setAttribute('download', 'downloaded_video.mp4'); // Optional: specify default filename
            document.getElementById('download-link').innerHTML = ''; // Clear previous link if any
            document.getElementById('download-link').appendChild(link);
        })
        .catch(error => console.error('Error:', error));
    }
});
