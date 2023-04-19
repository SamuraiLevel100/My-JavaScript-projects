class Button {
  constructor(width, height, text) {
    this.width = width;
    this.height = height;
    this.text = text;
  }

  showBtn() {
    document.write(`<button class="button" style="width:${this.width}px;height:${this.height}px;">${this.text}</button>`);
  }
}

class BootstrapButton extends Button {
  constructor(width, height, text, color) {
    super(width, height, text);
    this.color = color;
  }

  showBtn() {
    document.write(`<button class="button" style="width:${this.width}px;height:${this.height}px;background-color:${this.color};">${this.text}</button>`);
  }
}

const button = new Button(350, 150, "Click me!");
button.showBtn();

const bootstrapButton = new BootstrapButton(350, 150, "Bootstrap Button", "green");
bootstrapButton.showBtn();