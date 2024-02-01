// Project: Ghost Town Unit
// Author: Jakob Wurzrainer
// Copyright (c) 2024:
//   Ghost Town
//   Kaffeepause.net

function PlayBackward() {
  console.log("Play backward button pressed");

  const arrowTwo = document.getElementById('divBackwardArrowTwo');
  const arrowOne = document.getElementById('divBackwardArrowOne');
  const bar = document.getElementById('divBackwardBar');

  arrowTwo.classList.add('backwardAnimationArrowTwo');
  arrowOne.classList.add('backwardAnimationArrowOne');
  bar.classList.add('backwardAnimationBar');

  arrowTwo.addEventListener('animationend', () => {
    arrowTwo.classList.remove('backwardAnimationArrowTwo')
  });

  arrowOne.addEventListener('animationend', () => {
    arrowOne.classList.remove('backwardAnimationArrowOne')
  });

  bar.addEventListener('animationend', () => {
    bar.classList.remove('backwardAnimationBar')
  });

  console.log("Animation executed successfully");
}

function PlayPouse() {
  console.log("Pouse button pressed");

}

function PlayForward() {
  console.log("Play forward button pressed");

  const arrowTwo = document.getElementById('divForwardArrowTwo');
  const arrowOne = document.getElementById('divForwardArrowOne');
  const bar = document.getElementById('divForwardBar');

  arrowTwo.classList.add('forwardAnimationArrowTwo');
  arrowOne.classList.add('forwardAnimationArrowOne');
  bar.classList.add('forwardAnimationBar');

  arrowTwo.addEventListener('animationend', () => {
    arrowTwo.classList.remove('forwardAnimationArrowTwo')
  });

  arrowOne.addEventListener('animationend', () => {
    arrowOne.classList.remove('forwardAnimationArrowOne')
  });

  bar.addEventListener('animationend', () => {
    bar.classList.remove('forwardAnimationBar')
  });

  console.log("Animation executed successfully");
}
