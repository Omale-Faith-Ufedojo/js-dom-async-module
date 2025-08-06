function toggleTask(element){
  const tikIcon = element.querySelector('.tick');

  if(element.style.color === 'green') {
    element.style.color = 'gray';
    tikIcon.style.visibility ='hidden';
  }
  else{
    element.style.color ='green';
    tikIcon.style.visibility ='visible';
  }
}