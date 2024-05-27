console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let songs = [
    { songName: 've-Kamleya', filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: 'Happy Birthday', filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: 'PARINDA', filePath: "songs/3.mp3", coverPath: "covers/2.jpg" },
    { songName: 'Kashmir', filePath: "songs/4.mp3", coverPath: "covers/2.jpg" },
    { songName: 'phle bhi mai', filePath: "songs/5.mp3", coverPath: "covers/2.jpg" },
    { songName: 'Satranga', filePath: "songs/6.mp3", coverPath: "covers/2.jpg" },
    { songName: 'Tere bina', filePath: "songs/7.mp3", coverPath: "covers/2.jpg" },
    { songName: 'Char Kadam', filePath: "songs/8.mp3", coverPath: "covers/2.jpg" },
    { songName: 'Suraj Duba hai', filePath: "songs/9.mp3", coverPath: "covers/2.jpg" },
];

// Handle play/pause music click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
    }
});













