const leaves = Array.from(document.querySelectorAll('.leaf'));
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const indicator = document.getElementById('page-indicator');
const total = leaves.length;
let current = 0;

function getLabel(n) {
  if (n === 0) return 'Cover';
  if (n === total) return 'The End';
  return 'Page ' + (n * 2 - 1) + ' \u2013 ' + (n * 2);
}

function update() {
  leaves.forEach(function(leaf, i) {
    if (i < current) {
      leaf.classList.add('flipped');
      leaf.style.zIndex = 10 + i;
    } else {
      leaf.classList.remove('flipped');
      leaf.style.zIndex = total - i;
    }
  });
  btnPrev.disabled = current === 0;
  btnNext.disabled = current === total;
  indicator.textContent = getLabel(current);
}

btnNext.addEventListener('click', function() { if (current < total) { current++; update(); } });
btnPrev.addEventListener('click', function() { if (current > 0) { current--; update(); } });

update();
