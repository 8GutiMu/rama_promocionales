const logo = document.querySelectorAll('#logo path');
let logoLength = logo.length;

for(let i = 0; i< logoLength; i++){
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
