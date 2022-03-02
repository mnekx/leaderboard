import ListItemComponent from './item_component.js';
import { postData } from './services.js';

export default class ListItemsComponent {
  constructor(arr = []) {
    this.listItems = arr;
  }

  renderComponent() {
    const ul = document.querySelectorAll('.items')[0];
    ul.innerHTML = '';
    if (this.listItems.length === 0) {
      ul.innerHTML = 'List is Empty';
    } else {
      this.listItems.forEach((item) => {
        const li = new ListItemComponent(item.name, item.score);
        ul.appendChild(li);
      });
    }
    return ul;
  }

  addItem(name, score) {
    const ul = document.querySelectorAll('.items')[0];
    if (this.listItems.length === 0) {
      ul.innerHTML = '';
    }

    postData({ user: name, score });
    this.listItems.push({ name, score });
    const li = new ListItemComponent(name, score);

    ul.appendChild(li);
    return ul;
  }

  setList(list = []) {
    this.listItems = list;
  }
}
