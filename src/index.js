import './style.css';
import ListItemsComponent from './container_component.js';

const listItemsComponent = new ListItemsComponent([]);

const addingBtn = document.querySelector('#add-btn');

const addingForm = document.querySelector('#add-form');

listItemsComponent.returnComponent();

addingForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

addingBtn.addEventListener('click', () => {
  const nameInput = document.querySelector('#name');
  const scoreInput = document.querySelector('#score');
  listItemsComponent.addItem(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
});
