const tracks = ["mus1.mp3", "mus2.mp3", "mus3.mp3"];
let audio = null;
let soundname = 0;

const buttons = document.getElementsByClassName('musB');
console.log(buttons);

for (var i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  console.log(button);
  console.log(button.getAttribute('data-sound'));
  button.addEventListener('click', soundButtonTap);
  const buttonText = button.innerText;
  console.log(buttonText);
}

function soundButtonTap(event) {
  let button = event.currentTarget;
  let soundname = button.getAttribute('data-sound');
  if (audio && !audio.paused) {
    audio.pause();
    audio = new Audio(`mus${soundname}.mp3`);
    audio.play();
    } 
  else {
    audio = new Audio(`mus${soundname}.mp3`);
    audio.play();
    }
    buttonText = buttons[soundname - 1].innerText;
        document.getElementById("musName").innerText = buttonText;
}


function pauseButtonTap(){
    console.log('pausetapped')
    audio.pause();
}

function playButton(){
    let soundname = 1;
    audio = new Audio(`mus${soundname}.mp3`);
    audio.play();
    buttonText = buttons[soundname - 1].innerText;
    document.getElementById("musName").innerText = buttonText;
}

function nextButton(){
    if (soundname == 3){
        audio.pause();
        audio = new Audio(`mus1.mp3`);
        audio.play();
        document.getElementById("musName").innerText = buttonText;
        }
    else if (audio && !audio.paused) {
        audio.pause();
        soundname = soundname + 1;
        audio = new Audio(`mus${soundname}.mp3`);
        audio.play();
        document.getElementById("musName").innerText = buttonText;
        } 
    else {
        soundname = soundname + 1;
        audio = new Audio(`mus${soundname}.mp3`);
        audio.play();
        const buttonText = this.innerText;
        document.getElementById("musName").innerText = buttonText;
        }

        buttonText = buttons[soundname - 1].innerText;
        document.getElementById("musName").innerText = buttonText;
    }