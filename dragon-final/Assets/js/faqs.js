const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  const answer = question.nextElementSibling;
  answer.style.display = 'none';

  question.addEventListener('click', () => {
  answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  });
});

const faqButton = document.querySelectorAll('.faq-button');
faqButton.forEach(button => {
  const answer = button.querySelector('.answer');
  const arrow = button.querySelector('.question');

  button.addEventListener('click', () => {
  arrow.classList.toggle('rotate');
  answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
  });
});
