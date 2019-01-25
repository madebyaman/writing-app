let windowFocus = true;
let countdown = 10;
let documentTitle = '';
const heading = document.querySelector('.jsHeading');
const writer = document.querySelector('.jsWriter');

window.setInterval(() => {
  // Check if window is in focus
  window.onblur = function() {
    windowFocus = false;
  };
  window.onfocus = function() {
    windowFocus = true;
  };
}, 100);

heading.addEventListener('input', e => {
  documentTitle = e.target.innerText || 'Writer';
});

document.querySelector('.app').addEventListener('click', e => {
  if (e.target === heading || e.target === writer) {
    e.target.querySelector('span').innerText = '';
  }
});

function focusFunction() {
  window.setTimeout(() => {
    // Set Document titlte to update
    if (countdown > 0 && !windowFocus) {
      document.title = `${countdown} seconds left to close`;
      countdown -= 1;
    } else if (countdown === 0 && !windowFocus) {
      window.close();
    } else {
      countdown = 10;
      document.title = documentTitle;
    }
  }, 1000);
}

// attach a global event
window.setInterval(focusFunction, 1000);
