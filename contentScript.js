skipAd();

function skipAd() {
    const video = document.querySelector(".html5-video-player.ad-showing video"); // Basically this check if there's an ad
    if (video) video.currentTime = video.duration;

    // Sometimes it's required to press "Skip Ad" button. This handles it for user
    const skipAdButton = document.querySelector(".ytp-skip-ad-button");
    if (skipAdButton) skipAdButton.click();
}
