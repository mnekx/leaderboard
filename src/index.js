import './style.css';
import ListItemsComponent from './container_component.js';
import { getData } from './services.js';

const listItemsComponent = new ListItemsComponent();

getData().then((data) => {
  const leaders = data.result.map((item) => ({
    name: item.user,
    score: item.score,
  }));
  listItemsComponent.setList(leaders);
});

const addingBtn = document.querySelector('#add-btn');

const addingForm = document.querySelector('#add-form');

const refreshBtn = document.querySelector('#refresh');

listItemsComponent.renderComponent();

addingForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

addingBtn.addEventListener('click', () => {
  const nameInput = document.querySelector('#name');
  const scoreInput = document.querySelector('#score');
  if (nameInput.value !== '' || scoreInput.value !== '') {
    listItemsComponent.addItem(nameInput.value, scoreInput.value);
    nameInput.value = '';
    scoreInput.value = '';
  }
});

refreshBtn.addEventListener('click', () => {
  listItemsComponent.renderComponent();
});
