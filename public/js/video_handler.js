const socket = io();

let video = document.getElementById('mainVideo');
let controlPlay = document.getElementById('controlPlay');
let controlPause = document.getElementById('controlPause');

controlPlay.addEventListener('click', () => {
    socket.emit('changeVideoState', 'play');
});

controlPause.addEventListener('click', () => {
    socket.emit('changeVideoState', 'pause');
});

video.addEventListener('seeked', e => {
    console.log('Changed');
    socket.emit('changeVideoTime', e.srcElement.currentTime);
})

socket.on('S-changeVideoState', state => {
    if (state == 'play') {
        video.volume = 0.1;
        video.play();
    } else if (state == 'pause') {
        video.pause();
    }
});

socket.on('S-changeVideoTime', time => {
    video.currentTime = time;
});
