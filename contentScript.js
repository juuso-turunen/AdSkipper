skipAd();

function isAd() {
    const player = document.querySelector(".html5-video-player.ad-showing");
    if (player == null) return false;
    return true;
}

function skipAd() {
    if (!isAd()) return; // If there's no ad, then do nothing

    const video = document.querySelector("video");
    video.currentTime = video.duration;

    const skipAdButton = document.querySelector(".ytp-skip-ad-button");

    if (skipAdButton != null) skipAdButton.click();
}
