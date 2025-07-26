let darkmode = localStorage.getItem('darkmode')
const themeSwitch=document.getElementById('theme-switch')
const logo=document.getElementById('header-img')
const footerLogo=document.getElementById('footer-img')
const darkcard=document.getElementsByClassName('feature-card')
const footer=document.getElementById('footer')
const pricecards=document.getElementsByClassName('card')
const orderform=document.getElementsByClassName('order-form')


const enableDarkmode=()=>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
    if(logo) 
        logo.src='logo-orange.png'
    if(footerLogo)
        footerLogo.src='logo-light.png'
    if(darkcard)
        for (let i = 0; i < darkcard.length; i++) {
            darkcard[i].style.backgroundColor = '#00091bff';
        }
    if(footer)
        footer.style.backgroundColor='#00091bff';
    if(pricecards)
        for(let i=0;i<pricecards.length;i++){
            pricecards[i].style.backgroundColor='#00091bff';
        }
    

   
}

const disabledarkmode=()=>{
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
    if(logo) 
        logo.src='logo.png'
    if(footerLogo)
        footerLogo.src='logo-light.png'
    for (let i = 0; i < darkcard.length; i++) {
            darkcard[i].style.backgroundColor = '#ffffffff';
        }
    if(footer)
        footer.style.backgroundColor='#2d2d3a';
    if(pricecards)
        for(let i=0;i<pricecards.length;i++){
            pricecards[i].style.backgroundColor='#ffffffff';
        }
    
}

if(darkmode==="active")enableDarkmode()

themeSwitch.addEventListener("click",()=>{
    darkmode=localStorage.getItem('darkmode')
    darkmode!=="active"? enableDarkmode():disabledarkmode()
})