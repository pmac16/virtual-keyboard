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

    //creates html for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">$(icon_name)</i>`;
    };

    keyLayout.forEach((key) => {
      const keyElement = document.createElement("button");
      const insterLineBreak =
        ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
    });

    //add attributes/classes
    keyElement.setAttribute("type", "button");
    keyElement.classList.add("keyboard_key");

    switch (key) {
      case "backspace":
        keyElement.classList.add("keyboard_key--wide");
        keyElement.innerHTML = createIconHTML("backspace");

        keyElement.addEventListener("click", () => {
          this.properties.value = this.properties.value.substring(
            0,
            this.properties.value.length - 1
          );
          this._triggerEvent("oninput");
        });

        break;

      case "caps":
        keyElement.classList.add(
          "keyboard_key--wide",
          "keyboard_key--activatable"
        );
        keyElement.innerHTML = createIconHTML("keyboard_capslock");

        keyElement.addEventListener("click", () => {
          this._toggleCapsLock();
          keyElement.classList._toggle(
            "keyboard_key--active",
            this.properties.capsLock
          );
        });

        break;

      case "enter":
        keyElement.classList.add("keyboard_key--wide");
        keyElement.innerHTML = createIconHTML("keyboard_return");

        keyElement.addEventListener("click", () => {
          this.properties.value += "\n";
          this._triggerEvent("oninput");
        });

        break;

      case "spacebar":
        keyElement.classList.add("keyboard_key--extra-wide");
        keyElement.innerHTML = createIconHTML("space_bar");

        keyElement.addEventListener("click", () => {
          this.properties.value += " ";
          this._triggerEvent("oninput");
        });

        break;

      case "done":
        keyElement.classList.add("keyboard_key--wide", "keyboard_key--dark");
        keyElement.innerHTML = createIconHTML("check_circle");

        keyElement.addEventListener("click", () => {
          this.close();
          this._triggerEvent("onclose");
        });

        break;
    }
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
