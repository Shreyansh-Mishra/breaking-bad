let yesDeaButton = document.getElementById('dea-yes-button');
let noDeaButton = document.getElementById('dea-no-button');
let confirmPage = document.getElementById('confirm')
let deaPage = document.getElementById('dea-yes')
let mainPage = document.getElementById('main')
let walt = document.getElementById('walt');
let jesse = document.getElementById('jesse');
let gus = document.getElementById('gus');
let hank = document.getElementById('hank');
let saul = document.getElementById('saul');


noDeaButton.onclick = () => {
    mainPage.style.display = "block";
    confirmPage.style.display = "none";

}

yesDeaButton.onclick = () => {
    confirmPage.style.display = "none";
    deaPage.style.display = "block";
}




walt.onmouseover=(function(){
    let a=document.getElementById('dialogue');
    a.style.transitionDuration='1s';
    a.style.backgroundColor='red';
    a.style.color='white';
})

walt.onmouseout=(function(){
    let a=document.getElementById('dialogue');
    a.style.backgroundColor='black';
    a.style.color='white';
})

jesse.onmouseover=(function(){
    let a=document.getElementById('dialogue2');
    a.style.transitionDuration='1s';
    a.style.backgroundColor='orange';
    a.style.color='black';
})

jesse.onmouseout=(function(){
    let a=document.getElementById('dialogue2');
    a.style.backgroundColor='black';
    a.style.color='white';
})

gus.onmouseover=(function(){
    let a=document.getElementById('dialogue3');
    a.style.transitionDuration='1s';
    a.style.backgroundColor='green';
    a.style.color='white';
})

gus.onmouseout=(function(){
    let a=document.getElementById('dialogue3');
    a.style.backgroundColor='black';
    a.style.color='white';
})

hank.onmouseover=(function(){
    let a=document.getElementById('dialogue4');
    a.style.transitionDuration='1s';
    a.style.backgroundColor='#0089D7';
    a.style.color='white';
})

hank.onmouseout=(function(){
    let a=document.getElementById('dialogue4');
    a.style.backgroundColor='black';
    a.style.color='white';
})

saul.onmouseover=(function(){
    let a=document.getElementById('dialogue5');
    a.style.transitionDuration='1s';
    a.style.backgroundColor='purple';
    a.style.color='white';
})

saul.onmouseout=(function(){
    let a=document.getElementById('dialogue5');
    a.style.backgroundColor='black';
    a.style.color='white';
})