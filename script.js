
let walt = document.getElementById('walt');
let jesse = document.getElementById('jesse');
let gus = document.getElementById('gus');
let hank = document.getElementById('hank');
let saul = document.getElementById('saul');
walt.onmouseover=(function(){
    let a=document.getElementById('dialogue');
    a.style.transitionDuration='1s';
    a.style.backgroundColor='orange';
    a.style.color='black';


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
    a.style.backgroundColor='orange';
    a.style.color='black';


})

gus.onmouseout=(function(){
    let a=document.getElementById('dialogue3');
    a.style.backgroundColor='black';
    a.style.color='white';
})

hank.onmouseover=(function(){
    let a=document.getElementById('dialogue4');
    a.style.transitionDuration='1s';
    a.style.backgroundColor='orange';
    a.style.color='black';


})

hank.onmouseout=(function(){
    let a=document.getElementById('dialogue4');
    a.style.backgroundColor='black';
    a.style.color='white';
})

saul.onmouseover=(function(){
    let a=document.getElementById('dialogue5');
    a.style.transitionDuration='1s';
    a.style.backgroundColor='orange';
    a.style.color='black';


})

saul.onmouseout=(function(){
    let a=document.getElementById('dialogue5');
    a.style.backgroundColor='black';
    a.style.color='white';
})