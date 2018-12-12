// Observer design pattern - optional
// https://en.wikipedia.org/wiki/Observer_pattern

export default class Observable {
  listeners = [];

  subscribe(listener) {
    listeners.push(listener);
  }

  unsubscribe(listener) {
    const indexOfListener = this.listeners.indexOf(listener);
    this.listeners = this.listeners.splice(indexOfListener, 1, 0);
  }

  click() {
    this.listeners.forEach(listener => listener());
  }
}
