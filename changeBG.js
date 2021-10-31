/* eslint-disable no-undef */

function changeBackGroundFunc() {
  return function _closure(num) {
    $currentScreen.style.backgroundImage = `url(./public/images/bg0${num}.jpg)`;
  };
}

function getDiffRandom(callback) {
  function getRandomNumber() {
    const { floor, random } = Math;

    return floor(random() * 5);
  }

  let curNum = 0;
  let preNum = 0;

  // 두 개의 변수의 값이 달라질 때까지 실행.
  function isEqual() {
    while (curNum === preNum) {
      curNum = getRandomNumber();
    }
  }

  return function _closure() {
    isEqual();
    callback(curNum);
    preNum = curNum;
    curNum = getRandomNumber();
  };
}

const newBackGround = getDiffRandom(changeBackGroundFunc());

addEventListenerFunc($backGroundAppIcon, 'click', newBackGround);
