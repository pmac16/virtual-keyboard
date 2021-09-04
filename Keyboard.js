const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capsLock: false,
  },

  init() {
    //   create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    //Set up main elements
    this.elements.main.classList.add("keyboard", "1keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard_keys");

    // add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  },

  //   private method, naming convention
  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "backspace",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "enter",
      "done",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      ".",
      "?",
      "space",
    ];
  },

  _triggerEvent(handlerName) {
    console.log("Event triggered! Event Name: " + handlerName);
  },

  _toggleCapsLock() {
    console.log("Caps lock toggled!");
  },

  open(initialValue, oninput, onclose) {},

  close() {},
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
