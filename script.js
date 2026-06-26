function toggleVideo() {
    const video = document.getElementById("wildlifeVideo");
    const button = document.getElementById("videoToggleBtn");

    if (video.style.display === "none") {
        // If hidden, show and play
        video.style.display = "block";
        video.play();
        button.textContent = "Pause Video";
    } else if (video.paused) {
        // If visible but paused, play
        video.play();
        button.textContent = "Pause Video";
    } else {
        // If playing, pause and hide
        video.pause();
        video.style.display = "none";
        button.textContent = "Play Video";
    }
}
