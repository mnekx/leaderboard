export default class ListItemComponent {
  constructor(name, score) {
    const element = document.createElement('li');
    const childSpan = document.createElement('span');
    childSpan.textContent = `${name}: ${score}`;
    element.appendChild(childSpan);
    element.classList.add('item');

    return element;
  }
}
