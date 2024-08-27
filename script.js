const videoElement = document.getElementById('backgroundVideo');
const videoSources = [
    'https://v.ftcdn.net/02/86/78/93/700_F_286789354_cyAu0Ax2Lx0iAsja9PYbwddilUr3Id2l_ST.mp4',
    
];

let currentVideoIndex = 0;

function playNextVideo() {
    videoElement.src = videoSources[currentVideoIndex];
    videoElement.play();
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
}

// Evento para detectar cuando el video termina
videoElement.addEventListener('ended', playNextVideo);

// Inicia la reproducción del primer video
playNextVideo();
