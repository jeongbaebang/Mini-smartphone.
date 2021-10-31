/* eslint-disable no-undef */

const toDos = [];

function saveToDos() {
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function getToDos($todoList) {
  const save = localStorage.getItem('todos');

  if (save !== null) {
    const parsed = JSON.parse(save);

    parsed.forEach(todoText => {
      const $li = [
        {
          className: 'todoList-text',
          text: todoText,
          tagName: 'li',
          child: false
        }
      ].map(element => createElement(element));

      $todoList.appendChild(...$li);
    });
  }
}

function activeTodoApp() {
  activeClassToggle($currentScreen, 'todo');
  activeClassToggle($homeScreen, 'hidden');

  appInfo = [
    {
      className: 'todoList-input',
      text: '',
      tagName: 'input',
      child: false
    },
    {
      className: 'todoList-button',
      text: 'Making',
      tagName: 'button',
      child: false
    },
    {
      className: 'todoList',
      text: '',
      tagName: 'ul',
      child: false
    }
  ].map(element => createElement(element));

  changeScreen($currentScreen, appInfo, $homeScreen);

  const $todoInput = getQuerySelector('.todo > .todoList-input');
  const $todoButton = getQuerySelector('.todo > .todoList-button');
  const $todoList = getQuerySelector('.todo > .todoList');

  getToDos($todoList);

  addEventListenerFunc($todoButton, 'click', e => {
    if ($todoInput.value === '') {
      return;
    }
    const newTodo = $todoInput.value;
    const li = [
      {
        className: 'todoList-text',
        text: newTodo,
        tagName: 'li',
        child: false
      }
    ].map(element => createElement(element));
    toDos.push(newTodo);
    $todoList.appendChild(...li);
    saveToDos();
    $todoInput.value = '';
  });
}

addEventListenerFunc($todo, 'click', () => {
  activeTodoApp();
});
