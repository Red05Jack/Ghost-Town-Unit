// Project: Ghost Town Unit
// Author: Jakob Wurzrainer
// Copyright (c) 2024:
//   Ghost Town
//   Kaffeepause.net

function PlayForward() {
  console.log("Play forward button pressed");


  const element = document.getElementById('arrow1');
  element.classList.add('animate1');

  // Optional: Entfernt die Klasse nach der Animation, damit sie erneut ausgelöst werden kann
  element.addEventListener('animationend', () => {
    element.classList.remove('animate1');
  });
}

function PlayPouse() {
  console.log("Pouse button pressed");

}

function PlayBackward() {
  console.log("Play backward button pressed");

}
