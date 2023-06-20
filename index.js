
//Lines to remove the 'main' element with id 'main'
const main = document.querySelector('main');
main.remove();

// Lines to create an <h1> element with id 'victory' and add it to the DOM
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);