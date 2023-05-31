let addInstructionBtn = document.getElementById('addStepBtn');
let removeInstructionBtn = document.getElementById('removeStepBtn');
let instructionList = document.querySelector('.instructionList');
let instructionDiv = document.querySelectorAll('.instructionDiv')[0];

addInstructionBtn.addEventListener('click', function() {
  let newInstruction = instructionDiv.cloneNode(true);
  let input = newInstruction.getElementsByTagName('input')[0];
  input.value = '';
  instructionList.appendChild(newInstruction);
});

removeInstructionBtn.addEventListener('click', () => {
  let instructions = instructionList.getElementsByClassName('instructionDiv');
  if (instructions.length > 1) {
    instructionList.removeChild(instructions[instructions.length - 1]);
  }
});
