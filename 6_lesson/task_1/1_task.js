class CssClass {
    constructor(name) {
      this.name = name;
      this.styles = [];
    }
  
    setStyle(name, value) {
      const style = this.styles.find(style => style.name === name);
      if (style) {
        style.value = value;
      } else {
        this.styles.push({ name, value });
      }
    }
  
    removeStyle(name) {
      this.styles = this.styles.filter(style => style.name !== name);
    }
  
    getCSS() {
      const css = `.${this.name} {`;
      const styles = this.styles.map(style => `  ${style.name}: ${style.value};`).join('\n');
      return `${css}\n${styles}\n}`;
    }
  
    getStyles() {
      return this.styles;
    }
  }
  
  const cssClass = new CssClass('my-class');
  cssClass.setStyle('font-family','Times New Roman')
  cssClass.setStyle('color', 'white');
  cssClass.setStyle('background-color', 'green');
  cssClass.setStyle('font-weight', 'bold');
  cssClass.setStyle('font-size','100px');
  const cssCode = cssClass.getCSS();
  
  const style = document.createElement('style');
  style.innerHTML = cssCode;
  document.head.appendChild(style);
  
  const targetDiv = document.getElementById('target-div');
  targetDiv.classList.add('my-class');
  
  const styles = cssClass.getStyles();
  const stylesList = document.createElement('ul');
  styles.forEach(style => {
    const styleItem = document.createElement('li');
    styleItem.innerText = `${style.name}: ${style.value}`;
    stylesList.appendChild(styleItem);
  });
  document.body.appendChild(stylesList);
  