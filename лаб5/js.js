const buttons = document.getElementsByClassName('xylobutton');
console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  console.log(button);
  button.addEventListener('click', soundButtonTap);
}

function soundButtonTap(event) {
  let button = event.currentTarget;
  let soundname = button.getAttribute('data-sound');
  const audio = new Audio(`${soundname}.wav`);
  audio.play();
}