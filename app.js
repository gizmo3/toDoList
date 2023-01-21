const sections = document.querySelectorAll('.section'); //selecting everything with a class of section
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections= document.querySelector('.main-content');


function PageTransitions(){
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
        this.className += ' active-btn';
    })
  }

  //Sections Active 
  allSections.addEventListener('click', (e) =>{
      const id = e.target.dataset.id; //data set is referring to whatever youve clicked on
      if (id){
           //remove selected from the other buttons
           sectBtns.forEach((btn) =>{
               btn.classList.remove('active')
           })
           e.target.classList.add('active')

           //hide other sections
           sections.forEach((section)=>{
              section.classList.remove('active')
           })

           const element = document.getElementById(id);
           element.classList.add('active');
      }
  })

  //Toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}


fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana%2Cethereum%2Cbonk&vs_currencies=aud&include_24hr_change=true", {
  method: "GET",
  headers: {}
})
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('sol').innerHTML = data.solana.aud
    document.getElementById('eth').innerHTML = data.ethereum.aud
    document.getElementById('bonk').innerHTML = data.bonk.aud

  })
  .catch((error) => {
    console.error("Error:", error);
  });

PageTransitions();