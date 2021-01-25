import Store from "../../store/store.js";

export default class Component {
  constructor(props = {}) {
    let self = this;

    this.render = this.render || function () {};

    /**
    Subscribe toe global <event>stateChange,
    calling <eventCallback>this.render each time the state changes */
    if (props.store instanceof Store) {
      props.store.events.subscribe("stateChange", () => self.render());
    }

    if (props.hasOwnProperty("element")) {
      this.element = props.element;
    }
  }
}
