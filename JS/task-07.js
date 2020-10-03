const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener('input', onChengeFontSize);

function onChengeFontSize(event) {
  const textEl = document.querySelector('#text');
  textEl.style.fontSize = event.currentTarget.value + 'px';
}
