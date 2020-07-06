function fullscreenVideo() {
    if (document.fullscreenElement == null) {
        document.getElementById('vp_fullscreen-request').requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function playVideo() {
    socket.emit('changeVideoState', 'play');
}

function pauseVideo() {
    socket.emit('changeVideoState', 'pause');
}

function changeVideoState() {
    let video = document.getElementById('mainVideo');
    if (video.paused) {
        playVideo();
    } else {
        pauseVideo();
    }
}
