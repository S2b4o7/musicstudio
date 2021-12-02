let songIndex = 0;
let audioElement = new Audio('1.mp3');

let masterPlay = document.getElementById('masterPlay');
let gif1 = document.getElementById('gif1');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// fork
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let updateTimer;

// toggle
 let dark = document.getElementById('dark');
// let toggle = off();

let songs = [
    { songName: "Let me love you", filepath: "1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Akh lad jave", filepath: "2.mp3", coverpath: "covers/2.jpg" },
    { songName: "saayad (love aaj kal)", filepath: "3.mp3", coverpath: "covers/3.jpg" },
    { songName: "hamdard(ek villian)", filepath: "4.mp3", coverpath: "covers/4.jpg" },
    { songName: "alvida to nhi ", filepath: "5.mp3", coverpath: "covers/5.jpg" },
    { songName: "bizz buzz hardy sandhu", filepath: "6.mp3", coverpath: "covers/6.jpg" },
    { songName: "chhogada taara", filepath: "7.mp3", coverpath: "covers/7.jpg" },
    //Hindi song
    { songName: "i love you(akull)", filepath: "8.mp3", coverpath: "covers/8.jpg" },
    { songName: "raaz aankhe teri", filepath: "9.mp3", coverpath: "covers/9.jpg" },
    { songName: "tere nakhre", filepath: "10.mp3", coverpath: "covers/10.jpg" },
    { songName: "nashe si chad gayi", filepath: "11.mp3", coverpath: "covers/11.jpg" },
    // English song
    { songName: "roke naa ruke naina", filepath: "12.mp3", coverpath: "covers/12.jpg" },
    { songName: "love aaj kal 2", filepath: "13.mp3", coverpath: "covers/13.jpg" },
    { songName: "dont't hate me", filepath: "14.mp3", coverpath: "covers/14.jpg" },
    { songName: "believer song", filepath: "15.mp3", coverpath: "covers/15.jpg" },
    // Bhojpuri song
    // { songName: "my unoverse", filepath: "16.mp3", coverpath: "covers/16.jpg" },
    // { songName: "summer of love", filepath: "17.mp3", coverpath: "covers/17.jpg" },
    // { songName: "deny me", filepath: "18.mp3", coverpath: "covers/18.jpg" },
    // { songName: "lost cause", filepath: "19.mp3", coverpath: "covers/19.jpg" },
]

songItems.forEach((element, i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        gif.style.opacity = 0;
        e.target.classList.add('fa-play-circle-o');
        e.target.classList.remove('fa-pause-circle-o');
       
    }
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle-o');
    element.classList.add('fa-play-circle-o');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
      if(audioElement.paused){
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        // audioElement.play();
          gif.style.opacity = 1;
          audioElement.play();
          e.target.classList.remove('fa-play-circle-o');
          e.target.classList.add('fa-pause-circle-o');
          masterPlay.classList.remove('fa-play-circle-o');
          masterPlay.classList.add('fa-pause-circle-o');   
      }
      else{
          audioElement.pause();
          e.target.classList.add('fa-play-circle-o');
          e.target.classList.remove('fa-pause-circle-o');
          masterPlay.classList.add('fa-play-circle-o');
          masterPlay.classList.remove('fa-pause-circle-o'); 
          gif.style.opacity = 0; 
      }
    })
  })

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=19){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
})




 dark.addEventListener('click', ()=>{
    
       if(dark.classList.contains('fa-toggle-off')){
        dark.classList.remove('fa-toggle-off');
        dark.classList.add('fa-toggle-on');
       }  
   
     else{
       
        dark.classList.remove('fa-toggle-on');
        dark.classList.add('fa-toggle-off');
     }
        
 });

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 


function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

function seekTo() {
        // Calculate the seek position by the
        // percentage of the seek slider
        // and get the relative duration to the track
 seekto = audioElement.duration * (seek_slider.value / 100);
        
        // Set the current track position to the calculated seek position
  audioElement.currentTime = seekto;
}
        
function setVolume() {
        // Set the volume according to the
        // percentage of the volume slider set
 audioElement.volume = volume_slider.value / 100;
}


audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
seek_slider.value = progress;
})

seek_slider.addEventListener('change', ()=>{
    audioElement1.currentTime = seek_slider.value * audioElement.duration/100;
})
        




function audioSeek(){
    var seekto = audio.duration * (seek_slider.value / 100);
    audio.currentTime = seekto;
}
function seektimeupdate(){
    var nt = audio.currentTime * (100 / audio.duration);
    seekslider.value = nt;
}










function seekUpdate() {
    let seekPosition = 0;
        
        // Check if the current track duration is a legible number
  if (!isNaN(audioElement.duration)) {
     seekPosition = audioElement.currentTime * (100 / audioElement.duration);
     seek_slider.value = seekPosition;
        
            // Calculate the time left and the total duration
     let currentMinutes = Math.floor(audioElement.currentTime / 60);
     let currentSeconds = Math.floor(audioElement.currentTime - currentMinutes * 60);
     let durationMinutes = Math.floor(audioElement.duration / 60);
     let durationSeconds = Math.floor(audioElement.duration - durationMinutes * 60);
        
            // Add a zero to the single digit time values
     if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
     if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
     if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
     if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        
            // Display the updated duration
     curr_time.textContent = currentMinutes + ":" + currentSeconds;
     total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
    
updateTimer = setInterval(seekUpdate, 1000);




