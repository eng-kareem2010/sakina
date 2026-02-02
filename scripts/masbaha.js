const saveBtn=document.querySelector(".t");
const editBtn=document.querySelector(".x");
const zekrInput = document.querySelector("#zekr_input");
const masbahaScr=document.querySelector("#masbahaScreen");
const calcBtn = document.querySelector("#calc");
const resetBtn = document.querySelector("#reset");
function saveZekr(){
    zekrInput.readOnly=true;
}
function editZekr(){
    zekrInput.readOnly=false;
}
function calc(){
    let index=Number(masbahaScr.value);
    let newVal = index+1;
    masbahaScr.value=newVal;
    if(index==100){
        alert("لا يوجد أفضل من ذكر الله استمر جعله الله في ميزان حسناتك");
    }
    if(index==150){
        alert("صلي على محمد");
    }
}
function reset(){
    masbahaScr.value=0;
}
saveBtn.addEventListener("click",saveZekr);
editBtn.addEventListener("click",editZekr);
calcBtn.addEventListener("click",calc);
resetBtn.addEventListener("click",reset);