const CURRENT_YEAR = 2023;
const CORRECT_ANSWER = 'Correct answer';
const ERROR_ANSWER = 'Wrong answer';


const inputNode = document.querySelector('.input-answer');
const checkNode = document.querySelector('.check-answer');
const outputNode = document.querySelector('.output-answer');

checkNode.addEventListener('click', function(){
   const inputValue = inputNode.value;

   if (!inputValue) {
      outputNode.innerHTML = '';
      return;
   }

   const userAnswer = Number(inputValue);
   let output = CORRECT_ANSWER;

   if (userAnswer !== CURRENT_YEAR) {
      output = ERROR_ANSWER;
   };

   outputNode.innerHTML = output;
});