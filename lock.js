/* eslint-disable no-undef */

addEventListenerFunc($lock, 'click', () => {
  activateHidden();
  $currentScreen.replaceChildren($login, $homeScreen);
  $input.value = '';
});
