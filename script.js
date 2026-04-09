function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer(btn, correct) {
  const parent = btn.parentElement;
  const buttons = parent.querySelectorAll('button');
  buttons.forEach(b => b.style.pointerEvents = 'none');

  if (correct) {
    btn.classList.add('correct');
    btn.innerHTML += " ✨ (إجابة صحيحة)";
  } else {
    btn.classList.add('wrong');
    btn.innerHTML += " ❌ (إجابة خاطئة)";
  }
}