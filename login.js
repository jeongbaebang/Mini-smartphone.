/* eslint-disable no-undef */

const $input = getQuerySelector('#login-form > input');

const PASSWORD = 'password';

function activateHidden() {
  $login.hidden = false;
  $homeScreen.hidden = true;
}

function deactivateHidden() {
  $login.hidden = true;
  $homeScreen.hidden = false;
}

activateHidden();

localStorage.setItem(PASSWORD, '1004');

addEventListenerFunc($login, 'click', e => {
  if (e.target.localName === 'button') {
    const { length } = $input.value;
    if (length < 4) {
      $input.value += e.target.textContent;

      if (length === 3) {
        const password = localStorage.getItem(PASSWORD);
        if (password === $input.value) {
          deactivateHidden();
        } else {
          $input.value = '';
        }
      }
    }
  }
});
