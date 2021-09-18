let video = document.querySelector('video')
let videoSource = new Array();
videoSource[0] = 'vid1.mp4';
videoSource[1] = 'vid2.mp4';
videoSource[2] = 'vid3.mp4';
videoSource[3] = 'vid4.mp4';
videoSource[4] = 'vid5.mp4';
videoSource[5] = 'vid6.mp4';
videoSource[6] = 'vid7.mp4';
videoSource[7] = 'vid8.mp4';
videoSource[8] = 'vid9.mp4';
let i = 0;
const videoCount = videoSource.length;
const element = document.getElementById("videoPlayer");

function videoPlay(videoNum) {
    disable();
    element.setAttribute("src", videoSource[videoNum]);
    element.autoplay = true;
    element.load();
    element.play();
    video.onended = function (e) {
        enable()
    };


}

var count = 0;
document.onkeypress = function (e) {
    if ((e || window.event).keyCode === 32) {
        videoPlay(count);
        count++
        if (count == 9) {
            count = 0;
        }
    }
}


function disable() {
    document.onkeydown = function (e) {
        return false;
    }
}

function enable() {
    document.onkeydown = function (e) {
        return true;
    }
}