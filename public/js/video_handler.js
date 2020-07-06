window.onload = () => inactivityTime();

let inactivityTime = function () {
    let time;
    window.onload = resetTimer;

    document.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer;
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;
    document.onkeypress = resetTimer;

    function showProgressBar() {
        vp_controlsMaincontainer.style.transform = 'translateY(100%)';
        // vp_controlsMaincontainer.style.opacity = 0;
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(showProgressBar, 3000);
    }
};




controlPlay.addEventListener('click', () => {
    playVideo();
});

controlPause.addEventListener('click', () => {
    pauseVideo();
});

controlFullscreen.addEventListener('click', () => {
    fullscreenVideo();
});