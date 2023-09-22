/// variables

let audio=document.getElementById("audio")

const prev=document.getElementById("prev")

const next=document.getElementById("next")

const play=document.getElementById("svgPlay")

const paues=document.getElementById("blue_copy")

let songName=document.getElementById("h1")

let nameBgColor=document.getElementById("bg-Name")

let background=document.getElementById("body")

let main=document.querySelector("main")

let buttonDiv=document.getElementById("buttonDiv")

let eyeOpen=document.getElementById("svgEyeOpen")

let eyeClose=document.getElementById("svgEveClose")
const currentTimeEl = document.getElementById("current-time");

const durationEl = document.getElementById("duration");

const progressContainer = document.getElementById("progress-container");

const progress = document.getElementById("progress");

let isPlaying = true;

let bgSrcSpace=["aa"]

let audioIndex=0

let bgsrcIndex=0

let songProp=0

let ul=document.getElementById("ul")

let li1=document.getElementById("li1")

let bgIndex=0
//// bg-gradiant theme
let bgSrc=[
    "/gif/snow.gif"
    ,"/gif/space.gif"
    ,"/gif/sunrise.gif"
    ,"/gif/proggold.gif"
    ,"/gif/cloud.gif"
    ,"/gif/bangok.gif"
    ,"/gif/lightgame.gif"
]

let musicSrc=[
    ,"song/01 The Rolling Stones - Start Me Up [Remastered 2009].mp3"
    ,"song/02 Robert Palmer - Addicted to Love.mp3"
    ,"song/03 The Human League - Don't You Want Me.mp3"
    ,"song/04 Mike Oldfield - Moonlight Shadow.mp3"
    ,"song/05 Soft Cell - Tainted Love.mp3"
    ,"song/06 Bee Gees - Night Fever (From Saturday Night Fever Soundtrack).mp3"
    ,"song/07 Katrina & The Waves - Walking on Sunshine.mp3"
    ,"song/08 Michael Sembello - Maniac (From Flashdance).mp3"
    ,"song/09 Kool & The Gang - Celebration (Single Version).mp3"
    ,"song/1.mp3"
    ,"song/10 Alan Sorrenti - Figli Delle Stelle.mp3"
    ,"song/11 Umberto Tozzi - Tu.mp3"
    ,"song/12 Antonello Venditti - Sotto Il Segno Dei Pesci [Remastered 2018].mp3"
    ,"song/13 Lionel Richie - Dancing on the Ceiling.mp3"
    ,"song/14 DeBarge - Rhythm of the Night (From The Last Dragon Soundtrack).mp3"
    ,"song/15 Raf - Self Control.mp3"
    ,"song/16 Baltimora - Tarzan Boy.mp3"
    ,"song/17 Bon Jovi - Livin' On A Prayer.mp3"
    ,"song/18 Vasco Rossi - Liberi... Liberi [Remastered 2017].mp3"
    ,"song/19 ABC - The Look of Love, Pt.1.mp3"
    ,"song/20 Glenn Frey - The Heat Is On (From Beverly Hills Cop Soundtrack).mp3"
    ,"song/21 Alan Sorrenti - Tu Sei L'Unica Donna Per Me [2005 Remaster].mp3"
    ,"song/22 Roberto Vecchioni - Sogna, Ragazzo, Sogna.mp3"
    ,"song/23 Ricchi E Poveri - Che Sar….mp3"
    ,"song/24 Zucchero & The Randy Jackson Band - Donne.mp3"
    ,"song/25 Nik Kershaw - The Riddle.mp3"
    ,"song/26 Culture Club - Karma Chameleon.mp3"
    ,"song/27 UB40 - Red Red Wine.mp3"
    ,"song/28 Bee Gees - You Should Be Dancing.mp3"
    ,"song/29 Asia - Heat of the Moment.mp3"
    ,"song/30 Blondie - Call Me (Single Version  Theme From American Gigolo).mp3"
    ,"song/31 The Police - Every Breath You Take.mp3"
    ,"song/32 Simple Minds - Don't You (Forget About Me).mp3"
    ,"song/33 Diana Ross - Upside Down.mp3"
    ,"song/34 Tears For Fears - Everybody Wants to Rule the World.mp3"
    ,"song/35 Dexys Midnight Runners - Come on Eileen.mp3"
    ,"song/36 Visage - Fade to Grey.mp3"
    ,"song/37 Matia Bazar - Ti Sento [Remastered 2011].mp3"
    ,"song/38 Matia Bazar - Vacanze Romane [1991 Remaster].mp3"
    ,"song/39 Franco Battiato - Cuccurucuc— [Remastered 2008].mp3"
    ,"song/40 Ricchi E Poveri - Se Mi Innamoro.mp3"
    ,"song/41 Orchestral Manoeuvres in the Dark - Enola [Remastered 2003].mp3"
    ,"song/42 Heaven 17 - Let Me Go.mp3"
    ,"song/43 Nik Kershaw - Wouldn't It Be Good.mp3"
    ,"song/44 Billy Idol - Eyes Without a Face.mp3"
    ,"song/45 Culture Club - Do You Really Want to Hurt Me.mp3"
    ,"song/46 Kiss - Crazy Crazy Nights.mp3"
    ,"song/47 Kim Wilde - You Keep Me Hangin On.mp3"
    ,"song/48 Iggy Pop - Real Wild Child (Wild One).mp3"
    ,"song/49 ABBA - Super Trouper.mp3"
    ,"song/50 Frankie Goes to Hollywood - Relax.mp3"
    ,"song/51 Stevie Wonder - Master Blaster (Jammin').mp3"
    ,"song/52 Salt-N-Pepa - Push It.mp3"
    ,"song/53 Technotronic & Felly - Pump Up the Jam (Edit).mp3"
    ,"song/54 Tiffany - I Think We're Alone Now.mp3"
    ,"song/55 The Jam - Town Called Malice.mp3"
    ,"song/56 Diana Ross - I'm Coming Out.mp3"
    ,"song/57 Level 42 - Lessons in Love.mp3"
]
let A=" "
let bgSrc1=[
    ,"bg-gradient-to-l" 
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r" 
    ,"bg-gradient-to-r" 
    ,"bg-gradient-to-r" 
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r" 
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
    ,"bg-gradient-to-r"
]
let bgSrc2=[
    ,"from-sky-900"
    ,"from-green-300"
    ,"from-pink-300"
    ,"from-pink-500"
    ,"from-yellow-100"
    ,"from-indigo-200"
    ,"from-yellow-200"
    ,"from-red-200"
    ,"from-gray-200"
    ,"from-green-200"
    ,"from-green-200"
    ,"from-green-200"
    ,"from-indigo-300"
    ,"from-gray-400"
    ,"from-green-200"
    ,"from-blue-100"
    ,"from-red-400"
]
let bgSrc3=[
    ,"via-blue-500"
    ,"via-purple-300"
    ,"via-red-500"
    ,"via-yellow-300"
    ,"via-red-200"
    ,"via-green-200"
    ,"via-red-300"
    ,"via-gray-400"
    ,"via-green-300"
    ,"via-green-400"
    ,"via-green-300"
    ,"via-gray-600"
    ,"to-green-500"
    ,"via-blue-300"
    ,"via-gray-300"
]
let bgSrc4=[
     "to-purple-600"
    ,"to-indigo-400"
    ,"to-yellow-500"
    ,"to-yellow-500"
    ,"to-yellow-100"
    ,"to-green-500"
    ,"to-yellow-200"
    ,"to-gray-600"
    ,"to-blue-500"
    ,"to-purple-700"
    ,"to-blue-400"
    ,"to-purple-400"
    ,"to-blue-800"
    ,"to-blue-500"
    ," to-blue-500"
]

//**musiclist choosable

function choose(){
let choosenLi=event.target
let nameSong=choosenLi.innerHTML
let amir =0
while(amir<musicSrc.length){
    amir++
    if(musicSrc[amir]==nameSong){
        console.log(musicSrc[amir])
        audio.setAttribute("src",musicSrc[amir])
        audio.play()
        songName.innerHTML=musicSrc[amir]
        newAudioo=amir
    }
}


 console.log(choosenLi)


}
/////////////
function previosHandeler(){
    li1.classList.add("hidden")
    audioIndex--
    if(audioIndex<0){
        audioIndex=musicSrc.length-1
    }
    let newAudioo=audioIndex
    console.log(musicSrc[newAudioo]);
    songName.innerHTML=musicSrc[newAudioo]
    audio.setAttribute("src",musicSrc[newAudioo])
    audio.play()

     while (songProp<musicSrc.length) {
        let songNumber=songProp+1
        songProp++
     let musicSrcName = musicSrc[songNumber]
     let li= document.createElement("li")
   
     li.className="hover:scale-90 hover:bg-slate-400 text-sm sm:text-lg my-1 hover:-translate-x-16 ease-linear transition-all"
     li.innerHTML=musicSrcName
    
     console.log(li)
     ul.append(li)
     li.addEventListener("click",choose)

  }

/// bg-gradaiant player background

  newBgSrc=bgsrcIndex+1
    bgsrcIndex++

    if(newBgSrc>14){
        bgsrcIndex=1
        }
        nameBgColor.classList.remove("bg-teal-300")
        nameBgColor.classList.remove(bgSrc1[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc2[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc3[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc4[newBgSrc-1])

        nameBgColor.classList.add(bgSrc1[newBgSrc])
        nameBgColor.classList.add(bgSrc2[newBgSrc])
        nameBgColor.classList.add(bgSrc3[newBgSrc])
        nameBgColor.classList.add(bgSrc4[newBgSrc]) 

}
//

    function playHandeler(){

        if(play.classList.contains("hidden")){
            audio.pause()
            console.log("pause");
            paues.classList.add("hidden")
            play.classList.remove("hidden")
        }else{
            audio.play()
            console.log("play");
            paues.classList.remove("hidden")
            play.classList.add("hidden")
        }
    
        
    
         
    }

     

//
function nextHandeler(){
    li1.classList.add("hidden")
     newAudio = audioIndex+1
    console.log(musicSrc[newAudio]);
    songName.innerHTML=musicSrc[newAudio]
    audioIndex++
    if (audioIndex>musicSrc.length-2){
        audioIndex=0
    }
    audio.setAttribute("src",musicSrc[newAudio])
    audio.play()
    ////////////
  while (songProp<musicSrc.length) {
    let songNumber=songProp+1
    songProp++
 let musicSrcName = musicSrc[songNumber]
 let li= document.createElement("li")

 li.className="hover:scale-90 hover:bg-slate-400 text-sm sm:text-lg my-1 hover:-translate-x-16 ease-linear transition-all"
 li.innerHTML=musicSrcName

 console.log(li)
 ul.append(li)
 li.addEventListener("click",choose)

}
////////////////////////////
    newBgSrc=bgsrcIndex+1
    bgsrcIndex++

    bgSrcNew=bgSrc1[newBgSrc]+bgSrcSpace[0]+bgSrc2[newBgSrc]+bgSrcSpace[0]+bgSrc3[newBgSrc]+bgSrcSpace[0]+bgSrc4[newBgSrc]
    bgSrcOld=bgSrc1[newBgSrc-1]+bgSrcSpace+bgSrc2[newBgSrc-1]+bgSrcSpace+bgSrc3[newBgSrc-1]+bgSrcSpace+bgSrc4[newBgSrc-1]
    if(newBgSrc>14){
        bgsrcIndex=1
        }
        nameBgColor.classList.remove("bg-teal-300")
        nameBgColor.classList.remove(bgSrc1[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc2[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc3[newBgSrc-1])
        nameBgColor.classList.remove(bgSrc4[newBgSrc-1])

        nameBgColor.classList.add(bgSrc1[newBgSrc])
        nameBgColor.classList.add(bgSrc2[newBgSrc])
        nameBgColor.classList.add(bgSrc3[newBgSrc])
        nameBgColor.classList.add(bgSrc4[newBgSrc]) 
    }

// background & music progress bg-changer

    setInterval(function (){
        newBgSrc=bgsrcIndex+1
        bgsrcIndex++

        if(newBgSrc>14){
            bgsrcIndex=1
            }

        background.classList.remove("bg-sky-400")
        background.classList.remove(bgSrc1[newBgSrc-1])
        background.classList.remove(bgSrc2[newBgSrc-1])
        background.classList.remove(bgSrc3[newBgSrc-1])
        background.classList.remove(bgSrc4[newBgSrc-1])
        background.classList.add(bgSrc1[newBgSrc])
        background.classList.add(bgSrc2[newBgSrc])
        background.classList.add(bgSrc3[newBgSrc])
        background.classList.add(bgSrc4[newBgSrc]) 
        //
        progress.classList.remove("bg-sky-400")
        progress.classList.remove(bgSrc1[newBgSrc-1])
        progress.classList.remove(bgSrc2[newBgSrc-1])
        progress.classList.remove(bgSrc3[newBgSrc-1])
        progress.classList.remove(bgSrc4[newBgSrc-1])
        progress.classList.add(bgSrc1[newBgSrc])
        progress.classList.add(bgSrc2[newBgSrc])
        progress.classList.add(bgSrc3[newBgSrc])
        progress.classList.add(bgSrc4[newBgSrc]) 
    },3000)
    function bgChanger(){
if (bgIndex<bgSrc.length){
    let bgProp=bgIndex+1
    bgIndex++
    background.setAttribute("style",`background-image: url(${bgSrc[bgProp-1]}); background-size: cover;background-repeat: no-repeat; background-attachment: fixed; background-position: center;`) 
console.log(bgProp)
}else{
    bgIndex=0
}

     let main=document.getElementById("main")
    }
    function hiddenn(){
        if(main.classList.contains("hidden")){
            console.log("amir2")
            main.classList.add("sm:grid")
            main.classList.add("grid-cols-2")
            main.classList.remove("hidden")
            buttonDiv.classList.remove("mx-auto")
            buttonDiv.classList.add("ml-6")
            eyeClose.classList.add("hidden")
            eyeOpen.classList.remove("hidden")
        }else{
            main.classList.remove("sm:grid")
            main.classList.remove("grid-cols-2")
            main.classList.add("hidden")
            buttonDiv.classList.add("mx-auto")
            buttonDiv.classList.remove("ml-2")
            console.log("amir")
            eyeOpen.classList.add("hidden")
            eyeClose.classList.remove("hidden")
        }
        
    }



    
    // ProgressBar
function updateProgressBar(e) {
    if (isPlaying) {
      const duration = e.srcElement.duration;
      const currentTime = e.srcElement.currentTime;
      // 
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = progressPercent + "%";
      // 
      const durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration % 60);
      if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
      }
      //
      if (durationSeconds) {
        durationEl.textContent = durationMinutes + ":" + durationSeconds;
      }
      // 
      const currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime % 60);
      if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
      currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
    }
  }
  
  // Set ProgressBar
  function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }
  //setfunction
audio.addEventListener("ended", nextHandeler);
audio.addEventListener("timeupdate", updateProgressBar);
  progressContainer.addEventListener("click", setProgressBar);