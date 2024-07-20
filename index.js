console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let masterSongaurthor = document.getElementById('masterSongaurthor');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let currentSongName = document.getElementById('currentSongName');
let songItemContainer = document.querySelector('.songItemContainer');

let songs = [
    {songName: "Let me Love You", filePath: "1.mp3", coverPath: "cover1.jpg"},
    {songName: "Night Changes", filePath: "2.mp3", coverPath: "cover2.jpg"},
    {songName: "Rauf and Faik", filePath: "3.mp3", coverPath: "cover3.jpg"},
    {songName: "Bela Ciao", filePath: "4.mp3", coverPath: "cover4.jpg"},
    {songName: "Beleiver", filePath: "5.mp3", coverPath: "cover5.jpg"},
    {songName: "Calm Down", filePath: "6.mp3", coverPath: "cover6.jpg"},
    {songName: "Alone", filePath: "7.mp3", coverPath: "cover7.jpg"},
    {songName: "Runaway", filePath: "8.mp3", coverPath: "cover8.jpg"},
    {songName: "Cupd Fifty Fifty", filePath: "9.mp3", coverPath: "cover9.jpg"},
    {songName: "Thunder", filePath: "10.mp3", coverPath: "cover10.jpg"},
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
    element.getElementsByClassName('songListPlay')[0].addEventListener('click', () =>
    {
        if(audioElement.src !== songs[i].filePath) {
            audioElement.src = songs[i].filePath;
            audioElement.play();
            currentSongName.innerText = songs[i].songName; 
            // Update current song name
            masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
        }else {
    audioElement.pause();
        audioElement.play();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
}
});

});

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
if(audioElement.paused ||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

} else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
}
});
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
  let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndexindex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
});
 
document.getElementById('next').addEventListener('click', () =>{
    if(songIndex>=9){
        songIndex = 0

    }
else{
    songIndex += 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');

});

document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex<=0){
        songIndex = 0

    }
else{
    songIndex -= 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');

});

