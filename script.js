const controllers = document.getElementById('controllers');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controllers.addEventListener('change', handleChange);


const handleStyle = {
  style: btn.style,
  text(value) {
    btn.innerText = value;
  },
  backgroundColor(value) {
    this.style.backgroundColor = value;
  },
  height(value) {
    this.style.height = value + 'px';
  },
  width(value) {
    this.style.width = value + 'px';
  },
  color(value) {
    this.style.color = value;
  },
  border(value) {
    this.style.border = value;
  },
  borderRadius(value) {
    this.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.style.fontFamily = value;
  },
  fontSize(value) {
    this.style.fontSize = value + 'rem';
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}


function saveValues(name, value) {
  localStorage[name] = value;
};

function setValue() {
  const properties = Object.keys(localStorage);
  properties.forEach(property => {
    handleStyle[property](localStorage[property]);
    controllers.elements[property] = localStorage[property];
  });
  showCss();
}

setValue();

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}