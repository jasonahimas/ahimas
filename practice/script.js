let Submit=document.querySelector(".submit");
console.log(Submit);
Submit.style.height="50px";
Submit.style.color="red";
Submit.style.fontSize="10px"

function SubmitFunc(){
    alert("you clicked this button");
}
Submit.addEventListener('click',SubmitFunc)
Submit.style.background="yellow"
function SubmitFunc(){
    alert("you clicked twice");
}
Submit.addEventListener('dblclick',SubmitFunc)

let sa=document.querySelector(".sample");
console.log(sa)
sa.style.color="blue";
sa.style.fontSize="50px"
for (let index = 0; index < sa.length; index++) {
    sa[i].style.background="blue"
    
}