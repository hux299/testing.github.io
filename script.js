const downloadBtn = document.getElementById('download-btn');
const videoUrlInput = document.getElementById('video-url');
const preview = document.getElementById('preview');

downloadBtn.addEventListener('click', () => {
	const videoUrl = videoUrlInput.value;

	if (videoUrl.includes('youtube.com/watch?v=')) {
		const videoId = videoUrl.split('v=')[1];
		const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
		const mp4Url = `https://www.convertmp3.io/fetch/?video=https://www.youtube.com/watch?v=${videoId}`;
		preview.innerHTML = `<img src="${thumbnailUrl}" alt="Youtube Video Thumbnail"><br><a href="${mp4Url}" download>Download MP4</a>`;
	} else {
		alert('Invalid Youtube Video URL');
	}
});
