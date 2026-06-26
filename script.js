function toggleVideo() {
    const video = document.getElementById("wildlifeVideo");
    const button = document.getElementById("videoToggleBtn");

    if (video.style.display === "none") {
        video.style.display = "block";
        video.play();
        button.textContent = "Pause Video";
    } else if (video.paused) {
        video.play();
        button.textContent = "Pause Video";
    } else {
        video.pause();
        video.style.display = "none";
        button.textContent = "Play Video";
    }
}
