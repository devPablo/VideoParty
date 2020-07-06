document.querySelector('body').addEventListener('keydown', e => {
    // console.log(e.keyCode);
    switch(e.keyCode) {
        case 70: // F
            fullscreenVideo();
            break;
        case 32: // SPACE
            changeVideoState();
            break;
    }
});