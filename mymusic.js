let songIndex = 0;
let audioElement = new Audio('1.mp3');
let audioElement1 = new Audio('music50.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
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
    { songName: "let me love you", filepath: "1.mp3", coverpath: "covers/1.jpg" },
    { songName: "akh lad jave", filepath: "2.mp3", coverpath: "covers/2.jpg" },
    { songName: "saayad (love aaj kal )", filepath: "3.mp3", coverpath: "covers/3.jpg" },
    { songName: "hamdard(ek villian)", filepath: "4.mp3", coverpath: "covers/4.jpg" },
    { songName: "alvida to nhi ", filepath: "5.mp3", coverpath: "covers/5.jpg" },
    { songName: "biz buzz hardy sandhu", filepath: "6.mp3", coverpath: "covers/6.jpg" },
    { songName: "chhogada taara", filepath: "2.mp3", coverpath: "covers/7.jpg" },
    //Hindi song
    { songName: "i love you", filepath: "8.mp3", coverpath: "7.jpg" },
    { songName: "raaz aankhe teri", filepath: "9.mp3", coverpath: "7.jpg" },
    { songName: "tere nakhre", filepath: "10.mp3", coverpath: "7.jpg" },
    { songName: "nashe si chad gayi", filepath: "11.mp3", coverpath: "7.jpg" },
    // English song
    { songName: "roke naa ruke naina", filepath: "18.mp3", coverpath: "7.jpg" },
    { songName: "love aaj kal2", filepath: "13.mp3", coverpath: "7.jpg" },
    { songName: "Isk me ham tumhe kya bataye", filepath: "14.mp3", coverpath: "7.jpg" },
    { songName: "Mere bin sooni hai dil ki rahe", filepath: "15.mp3", coverpath: "7.jpg" },
    // Bhojpuri song
    { songName: "Isk me ham tumhe kya bataye", filepath: "16.mp3", coverpath: "7.jpg" },
    { songName: "Mere bin sooni hai dil ki rahe", filepath: "17.mp3", coverpath: "7.jpg" },
    { songName: "tu jo mre andar", filepath: "18.mp3", coverpath: "7.jpg" },
    { songName: "bizz buzz", filepath: "15.mp3", coverpath: "7.jpg" },
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
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        e.target.classList.add('fa-play-circle-o');
        e.target.classList.remove('fa-pause-circle-o');
        
        
    }
})




audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
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
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//   element.addEventListener('click', (e)=>{
//      makeAllPlays();
//     songIndex = parseInt(e.target.id);
//     audioElement.src = `${songIndex+1}.mp3`;
//     e.target.classList.remove('fa-play-circle-o');
//     e.target.classList.add('fa-pause-circle-o');
//     audioElement.src = `${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     gif.style.opacity = 1;
//     masterPlay.classList.remove('fa-play-circle-o');
//     masterPlay.classList.add('fa-pause-circle-o');
    
//   })
// })

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
 
//   playing hindi song


audioElement1.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement1.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement1.currentTime = myProgressBar.value * audioElement1.duration/100;
})

playin.addEventListener('click', ()=>{
    if(audioElement1.paused || audioElement1.currentTime<=0){
        audioElement1.play();
        playin.classList.remove('fa-play-circle-o');
        playin.classList.add('fa-pause-circle-o');
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        gif.style.opacity = 1;
    }
    else{
        audioElement1.pause();
        playin.classList.remove('fa-pause-circle-o');
        playin.classList.add('fa-play-circle-o');
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        gif.style.opacity = 0;
        
    }
})

// function resetValues() {
//     curr_time.textContent = "00:00";
//     total_duration.textContent = "00:00";
//     seek_slider.value = 0;
//     }

// // function seekTo() {
// //         // Calculate the seek position by the
// //         // percentage of the seek slider
// //         // and get the relative duration to the track
// //         seekTo = audioElement.duration * (seek_slider.value / 100);
        
// //         // Set the current track position to the calculated seek position
// //         audioElement.currentTime = seekTo;
// //         }
        
        function setVolume() {
        // Set the volume according to the
        // percentage of the volume slider set
        audioElement.volume = volume_slider.value / 100;
        }
        
// //         function seekUpdate() {
// //         let seekPosition = 0;
        
// //         // Check if the current track duration is a legible number
// //         if (!isNaN(audioElement.duration)) {
// //             seekPosition = audioElement.currentTime * (100 / audioElement.duration);
// //             seek_slider.value = seekPosition;
        
// //             // Calculate the time left and the total duration
// //             let currentMinutes = Math.floor(audioElement.currentTime / 60);
// //             let currentSeconds = Math.floor(audioElement.currentTime - currentMinutes * 60);
// //             let durationMinutes = Math.floor(audioElement.duration / 60);
// //             let durationSeconds = Math.floor(audioElement.duration - durationMinutes * 60);
        
// //             // Add a zero to the single digit time values
// //             if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
// //             if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
// //             if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
// //             if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        
// //             // Display the updated duration
// //             curr_time.textContent = currentMinutes + ":" + currentSeconds;
// //             total_duration.textContent = durationMinutes + ":" + durationSeconds;
// //         }
// //         }
// //     // function loadTrack(songIndex) {
// //     //         // Clear the previous seek timer
// //     //         clearInterval(updateTimer);
// //     //         resetValues();
// //     // }
// //         updateTimer = setInterval(seekUpdate, 1000);

// // function play1() {
// //   /* Audio link for notification */
// // var audio = new Audio("button-music.mp3");
// // audio.play();
// // }














