const socket = io();

socket.on('S-changeVideoState', state => {
    if (state == 'play') {
        video.volume = 0.1;
        video.play();
    } else if (state == 'pause') {
        video.pause();
    }
});