let plus=document.querySelector('.plus')
console.log(plus)
let dialog=document.querySelector('.dialog')
plus.addEventListener('click',openpopup)

function openpopup(){
    dialog.style.display='flex'
}
let crossBtn=document.querySelector('.cross')
console.log(crossBtn)
crossBtn.addEventListener('click',closepopup);

function closepopup(){
    dialog.style.display='none'
}


function crossandmini(){
    let crossArr=document.querySelectorAll('.icon3')
    console.log(crossArr);
}
for (let i=0;i<crossArr.length;i++){
    crossArr[i].addEventListener('click',closeticket)
}
function closeticket(){
    console.log(e.target.closest('.box'))
    let box=e.target.closest('.box')
    crossArr.style.display='none'
}
function minimize(e){
    let box=e.target.closest('.box')
    console.log(box);
    let textAreaMain=box.querySelector('main');
    console.log(textAreaMain);
    if(textAreaMain.style.display!="none"){
        textAreaMain.style.display="none"
    }
    else{
        textAreaMain.style.display="flex"
    }
}




function addTicket() {
    closeDialog()
    var boxes = document.querySelector(".wrapper main");
    var puranaHTML = boxes.innerHTML;
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");
    boxes.innerHTML = puranaHTML + `
    <div class="box">
        <header>
            <div class="box-heading">${title.value}</div>
            <div class="icon color-1">-</div>
            <div class="icon color-2">E</div>
            <div class="icon color-3">x</div>
        </header>
        <main>
            <textarea rows="15">${boxContent.value}</textarea>
        </main>
    </div>`;
    title.value = ""
    boxContent.value = ""
    addDelTktLogic();
}
