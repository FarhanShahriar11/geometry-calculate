let serial=0;
document.getElementById('first-card').addEventListener('click',function(){ 
      const firstCard=getInputValueById('first-input');
      const secondCard=getInputValueById('second-input');
      const firstTitle=getTextElementValueById('first-name');
      const area=(0.5*firstCard*secondCard).toFixed(2);
      if (isNaN(firstCard) || isNaN(secondCard) || typeof firstCard == 'string' || typeof secondCard == 'string' || firstCard <= 0 || secondCard <= 0) {
        alert('Please enter Valid number');
        return false;
    }
    serial++;
      
    document.getElementById('first-input').value=" ";
     document.getElementById('second-input').value=" ";
   
    displayData(firstTitle,area);
    
 
})


document.getElementById('second-card').addEventListener('click',function(){
   

const firstCard=getInputValueById('second-card-first-input');
const secondCard=getInputValueById('second-card-second-input');
const firstTitle=getTextElementValueById('second-name');
    const area=(firstCard*secondCard).toFixed(2);
    if (isNaN(firstCard) || isNaN(secondCard) || typeof firstCard == 'string' || typeof secondCard == 'string' || firstCard <= 0 || secondCard <= 0) {
      alert('Please enter Valid number');
      return false;
  }
  serial++;
    document.getElementById('second-card-first-input').value=" ";
    document.getElementById('second-card-second-input').value=" ";
    displayData(firstTitle,area);
   
})
document.getElementById('third-card').addEventListener('click',function(){
    

   const firstCard=getInputValueById('third-card-first-input');
   const secondCard=getInputValueById('third-card-first-input');
    const firstTitle=getTextElementValueById('third-name');
    const area=(firstCard*secondCard).toFixed(2);
    if (isNaN(firstCard) || isNaN(secondCard) || typeof firstCard == 'string' || typeof secondCard == 'string' || firstCard <= 0 || secondCard <= 0) {
      alert('Please enter Valid number');
      return false;
  }
  serial++;
    document.getElementById('third-card-first-input').value=" ";
    document.getElementById('third-card-second-input').value=" ";
    displayData(firstTitle,area);
})
document.getElementById('fourth-card').addEventListener('click',function(){
   

     const firstCard=getInputValueById('fourth-card-first-input');
     const secondCard=getInputValueById('fourth-card-second-input');
      const firstTitle=getTextElementValueById('fourth-name');
    const area=parseFloat(0.5*firstCard*secondCard).toFixed(2);
    if (isNaN(firstCard) || isNaN(secondCard) || typeof firstCard == 'string' || typeof secondCard == 'string' || firstCard <= 0 || secondCard <= 0) {
      alert('Please enter Valid number');
      return false;
  }
  serial++;
    document.getElementById('fourth-card-first-input').value=" ";
    document.getElementById('fourth-card-second-input').value=" ";

    displayData(firstTitle,area);
})
document.getElementById('fifth-card').addEventListener('click',function(){
    

         const firstCard=getInputValueById('fifth-card-first-input');
         const secondCard=getInputValueById('fifth-card-second-input');
          const firstTitle=getTextElementValueById('fifth-name');
          if (isNaN(firstCard) || isNaN(secondCard) || typeof firstCard == 'string' || typeof secondCard == 'string' || firstCard <= 0 || secondCard <= 0) {
            alert('Please enter Valid number');
            return false;
        }
        serial++;

    const area=parseFloat(0.5*firstCard*secondCard).toFixed(2);
    document.getElementById('fifth-card-first-input').value=" ";
    document.getElementById('fifth-card-second-input').value=" ";
    displayData(firstTitle,area);
})
document.getElementById('sixth-card').addEventListener('click',function(){
   


     const firstCard=getInputValueById('sixth-card-first-input');
    const secondCard=getInputValueById('sixth-card-second-input');
     const firstTitle=getTextElementValueById('sixth-name');
    const area=parseFloat(3.14*firstCard*secondCard).toFixed(2);
    if (isNaN(firstCard) || isNaN(secondCard) || typeof firstCard == 'string' || typeof secondCard == 'string' || firstCard <= 0 || secondCard <= 0) {
      alert('Please enter Valid number');
      return false;
  }
  serial++;
    document.getElementById('sixth-card-first-input').value=" ";
    document.getElementById('sixth-card-second-input').value=" ";
    displayData(firstTitle,area);
})
function displayData(firstTitle,area){
    const container=document.getElementById('table-container')
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${firstTitle}</td>
    <td>${area}cm<sup>2</sup></td>
    <td><button class="btn btn-active btn-primary">Covert to cm<sup>2</sup></button></td>
     `;
    container.appendChild(tr);
   
}
document.getElementById('btn').addEventListener('click',function(){
    window.location.href='newpage.html'
})

function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}
function getTextElementValueById(elementId) {
    const title = document.getElementById(elementId);
    const titleValue = title.innerText;
    return titleValue;
}
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
 
  
  document.getElementById('card').addEventListener('mouseover',function(){
    document.getElementById('card').style.backgroundColor = randomColor();
  })
  document.getElementById('card2').addEventListener('mouseover',function(){
    document.getElementById('card2').style.backgroundColor = randomColor();
  })
  
  document.getElementById('card3').addEventListener('mouseover',function(){
    document.getElementById('card3').style.backgroundColor = randomColor();
  })

  document.getElementById('card4').addEventListener('mouseover',function(){
    document.getElementById('card4').style.backgroundColor = randomColor();
  })

  document.getElementById('card5').addEventListener('mouseover',function(){
    document.getElementById('card5').style.backgroundColor = randomColor();
  })

  document.getElementById('card6').addEventListener('mouseover',function(){
    document.getElementById('card6').style.backgroundColor = randomColor();
  })
       
 