const button = document.querySelector('button');
button.addEventListener('click',updateName);

function updateName(){
  const name = prompt('Enter New Name');
  button.textContent = `player1: ${name}`;
  console.log(`${name}`);

}
