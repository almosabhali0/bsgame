let s=1, e=1000000;
let mid=((e+s)/2)>>0;
let found=0;
let num=document.getElementById("number");
let numbox=document.getElementById("number_box");
let step_count=document.getElementById("steps");
let steps=0;
function bigger() {
    if(found) return;
    s=mid+1;
    if(((e+s)/2)>>0 == mid) {
        correct();
    }else {
        mid=((e+s)/2)>>0;
        num.innerText=mid;
        update_steps();
    }
}
function less() {
    if(found) return;
    e=mid-1;
    if(((e+s)/2)>>0 == mid) {
        correct();
    }else {
        mid=((e+s)/2)>>0;
        num.innerText=mid;
        update_steps();

    }

}
function correct() {
    found=1;
    num.style.fontSize="18px";
    num.innerText="your number is: "+mid;
}
function restart() {
    s=1, e=1000000;
    mid=((e+s)/2)>>0;
    found=0;
    num.innerText=mid;
    steps=0;
    step_count.innerText=0;
    num.style.fontSize="50px";

}
function update_steps() {
    steps+=1;
    step_count.innerText=steps;
}