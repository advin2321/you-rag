// script.js
document.getElementById('queryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show "Please wait..." in the response area
    document.getElementById('response').innerHTML = `
        <p>Just a sec ⏱️</p>
    `;

    const video_id = document.getElementById('video_id').value;
    const user_question = document.getElementById('user_question').value;

    fetch('/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ video_id, user_question })
    })
    .then(response => response.json())
    .then(data => {
        // Clear the "Please wait..." placeholder
        document.getElementById('response').innerHTML = '';

        if (data.youtube_link && data.answer) {
            document.getElementById('response').innerHTML = `
                <p><strong>RAG Answer 🧠</strong></p>
                <p>${data.answer}</p>
                <p><strong>View on YouTube ↗️</strong> <a href="${data.youtube_link}" target="_blank">${data.youtube_link}</a></p>
            `;

            // Use the normalized ID returned by the server. This also supports a
            // full YouTube URL pasted into the form.
            const iframeVideoId = data.video_id || video_id;
            const iframeParams = new URLSearchParams({
                start: data.start,
                origin: window.location.origin,
            });
            const iframeSrc = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(iframeVideoId)}?${iframeParams}`;

            // Log the iframe source URL to the console
            console.log('Iframe Source URL:', iframeSrc);

            document.getElementById('videoContainer').innerHTML = `
                <iframe
                    src="${iframeSrc}"
                    title="YouTube video player"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            `;
        } else {
            document.getElementById('response').innerHTML = `
                <p><strong>Error:</strong> ${data.error}</p>
            `;
        }
    })
    .catch(error => {
        // Clear the "Please wait..." placeholder
        document.getElementById('response').innerHTML = '';

        document.getElementById('response').innerHTML = `
            <p><strong>Error:</strong> ${error.message}</p>
        `;
    });
});
