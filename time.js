/* eslint-disable no-undef */

function padStartFunc(todayArr = []) {
  return todayArr.map(value => String(value).padStart(2, '0'));
}

function getTime() {
  const today = new Date();
  return padStartFunc([
    today.getHours(),
    today.getMinutes(),
    today.getSeconds()
  ]);
}

function setInnerText() {
  const [hours, minutes, seconds] = getTime();
  $time.innerText = `${hours}:${minutes} ${seconds}m`;
}

setInterval(setInnerText, 1000);
