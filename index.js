let appInfo;

// global Methods
const [
  $homeScreen,
  $homeButton,
  $currentScreen,
  $time,
  $backGroundAppIcon,
  $weatherAppIcon,
  $login,
  $lock,
  $todo
] = [
  'home',
  'homeButton',
  'screen',
  'js-time',
  'js-backGround',
  'js-weather',
  'login-form',
  'js-lock',
  'js-Todo'
].map(id => document.getElementById(id));

function addEventListenerFunc($node, eventName, callBack) {
  $node.addEventListener(eventName, callBack);
}

function removeChild($node, $element = []) {
  $element.forEach(childNode => {
    $node.removeChild(childNode);
  });
}

function activeClassToggle($node, className) {
  $node.classList.toggle(className);
}

function createElement({
  className,
  text = '',
  tagName = 'div',
  child = true
}) {
  const doc = document;
  const $node = doc.createElement(tagName);

  if (className) {
    $node.className = className;

    if (!child) {
      $node.textContent = text;
    } else {
      $node.appendChild(doc.createElement(tagName)).className = 'text';
      $node.firstChild.textContent = text;
    }
  }

  return $node;
}

function changeScreen($node, $newChild, $oldChild) {
  $node.replaceChildren(...$newChild, $oldChild);
}

function getQuerySelector(querySelector) {
  return document.querySelector(querySelector);
}

function clickHomeButton(className) {
  if (!$currentScreen.classList.contains(className)) return;
  removeChild($currentScreen, appInfo);
  activeClassToggle($homeScreen, 'hidden');
  activeClassToggle($currentScreen, className);
}
