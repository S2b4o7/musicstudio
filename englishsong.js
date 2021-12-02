let songIndex = 0;
let audioElement = new Audio('1.mp3');


let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let dark = document.getElementById('dark');

// toggle
//  let dark = document.getElementById('dark');
// let toggle = off();

let songs = [
    { songName: "stay", filepath: "1.mp3", coverpath: "covers/12.jpg" },
    { songName: "my universe", filepath: "2.mp3", coverpath: "covers/13.jpg" },
    // { songName: "summer of love", filepath: "16.mp3", coverpath: "covers/14.jpg" },
    // { songName: "don't you hold me down", filepath: "17.mp3", coverpath: "covers/15.jpg" },
    // { songName: " deny me ", filepath: "18.mp3", coverpath: "covers/16.jpg" },
    // { songName: "lost cause", filepath: "19.mp3", coverpath: "covers/17.jpg" },
    // { songName: "believers", filepath: "20.mp3", coverpath: "covers/18.jpg" },
    // { songName: " 2 step ", filepath: "21.mp3", coverpath: "covers/19.jpg" },
    // { songName: "selfish boy", filepath: "22.mp3", coverpath: "covers/20.jpg" },
    // { songName: "don't go", filepath: "23.mp3", coverpath: "covers/21.jpg" },
    // { songName: "loves runout", filepath: "24.mp3", coverpath: "covers/22.jpg" },
    // { songName: "paradise", filepath: "25.mp3", coverpath: "covers/23.jpg" },
    // { songName: "touch it", filepath: "26.mp3", coverpath: "covers/24.jpg" },
    // { songName: "life goes on", filepath: "27.mp3", coverpath: "covers/25.jpg" },
    // { songName: "all you need love", filepath: "28.mp3", coverpath: "covers/26.jpg" },
    // { songName: "cold love", filepath: "29.mp3", coverpath: "covers/13.jpg" },
    // { songName: "peaches", filepath: "30.mp3", coverpath: "covers/14.jpg" },
    // { songName: "don't go yet", filepath: "31.mp3", coverpath: "covers/15.jpg" },
    // { songName: "visiting hours", filepath: "32.mp3", coverpath: "covers/16.jpg" },
    // { songName: "sweet dreams", filepath: "33.mp3", coverpath: "covers/17.jpg" }
    
    { songName: "dont't hate me", filepath: "3.mp3", coverpath: "covers/3.jpg" },
    { songName: "believer song", filepath: "4.mp3", coverpath: "covers/4.jpg" },
    { songName: "my unniverse", filepath: "5.mp3", coverpath: "covers/5.jpg" },
    { songName: "bizz buzz hardy sandhu", filepath: "6.mp3", coverpath: "covers/6.jpg" },
    { songName: "chhogada taara", filepath: "7.mp3", coverpath: "covers/7.jpg" },
    //Hindi song
    { songName: "i love you(akull)", filepath: "8.mp3", coverpath: "covers/8.jpg" },
    { songName: "raaz aankhe teri", filepath: "9.mp3", coverpath: "covers/9.jpg" },
    { songName: "tere nakhre", filepath: "10.mp3", coverpath: "covers/10.jpg" },
    { songName: "nashe si chad gayi", filepath: "11.mp3", coverpath: "covers/11.jpg" },
    // English song
    // { songName: "roke naa ruke naina", filepath: "12.mp3", coverpath: "covers/12.jpg" },
    // { songName: "love aaj kal 2", filepath: "13.mp3", coverpath: "covers/13.jpg" },
    // { songName: "dont't hate me", filepath: "14.mp3", coverpath: "covers/14.jpg" },
    // { songName: "believer song", filepath: "15.mp3", coverpath: "covers/15.jpg" },
    // // Bhojpuri song
    // { songName: "my unoverse", filepath: "16.mp3", coverpath: "covers/16.jpg" },
    // { songName: "summer of love", filepath: "17.mp3", coverpath: "covers/17.jpg" },
    










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
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle-o');
    e.target.classList.add('fa-pause-circle-o');
    audioElement.src = `${songIndex+15}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
    
  })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex = 1;
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
    // if(toggle.off){
    //     element.on();
       
        dark.classList.remove('fa-toggle-off');
        dark.classList.add('fa-toggle-on');
       
    // }
    // else{
       
    //     dark.classList.remove('fa-toggle-on');
    //     dark.classList.add('fa-toggle-off');
    // }
        
 });

function myFunction() {
    
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
  





