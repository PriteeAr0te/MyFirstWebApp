
// JAVASCRIPT file:
// Music App/playing.gif
console.log("Welcome To Spotify!")

//initialize variables 
let songIndex = 0;
let audioIndex = 0;
let audioElement = new Audio('Songs/6.mp3');
let songName = document.querySelector('.songName');
let masterPlay = document.querySelector('.masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('.songItem'));


let songs = [
  { songName: "Ajab si", songPath: "Songs/1.mp3", coverPath: "cover/1.jpg" },
  { songName: "Aahista Aahista", songPath: "Songs/2.mp3", coverPath: "cover/2.jpg" },
  { songName: "Taal se Taal", songPath: "Songs/3.mp3", coverPath: "cover/3.jpg" },
  { songName: "Is this Love", songPath: "Songs/4.jpg", coverPath: "cover/4.jpg" },
  { songName: "Heeriye", songPath: "Songs/5.mp3", coverPath: "cover/5.png" },
  { songName: "Ram Siya Ram", songPath: "Songs/6.mp3", coverPath: "cover/6.png" },
  { songName: "Zara sa", songPath: "Songs/7.mp3", coverPath: "cover/7.jpg" },
  { songName: "Main nikla gaddi leke", songPath: "Songs/8.mp3", coverPath: "cover/8.jpg" },
  { songName: "Namo Namo", songPath: "Songs/9.mp3", coverPath: "cover/9.jpg" },
  { songName: "Jai Shree Ram", songPath: "Songs/10.mp3", coverPath: "cover/10.jpg" },
  { songName: "Ajib dastan hai yeh", songPath: "Songs/11.mp3", coverPath: "cover/11.jpg" },
  { songName: "Mere ghar ram aye hain", songPath: "Songs/12.mp3", coverPath: "cover/12.jpg" },
  { songName: "Hai Junoon", songPath: "Songs/13.mp3", coverPath: "cover/13.jpg" },
  { songName: "Rahe na Rahe Hum", songPath: "Songs/14.mp3", coverPath: "cover/14.jpg" },
  { songName: "Saddi Galli Aaja", songPath: "Songs/15.mp3", coverPath: "cover/15.jpg" },
]

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//handle by play/pause click
if (masterPlay) {
  masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-circle-play');
      gif.style.opacity = 1;
    }
    else {
      audioElement.pause();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity = 0;
    }
  });
}
else {
  console.log("masterPlay class does not exist!");
}


//Listen to Events
audioElement.addEventListener('timeupdate', () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //console.log(progress);
  progressBar.value = progress;
})
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value * audioElement.duration)/100;
    audioElement.currentTime = seekTime;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `Songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');

    masterSongName.innerText = songs[songIndex].songName;
  })
})


//     audioElement.src = songs[songIndex].songPath; // Use the correct path





document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 9) {
    songIndex = 0
  }
  else {
    songIndex += 1;
  }
  audioElement.src = `Songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0
  }
  else {
    songIndex -= 1;
  }
  audioElement.src = `Songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})


