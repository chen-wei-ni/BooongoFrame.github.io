//每3秒觸動動畫
const jump = document.querySelector('.reward');
jump.classList.add('fuyofuyo');
jump.addEventListener('animationend', () => {
    jump.classList.remove('fuyofuyo');  
setTimeout(function(){
    jump.classList.add('fuyofuyo');
},3000)
})
const jumpmb = document.querySelector('.rewardMB');
jumpmb.classList.add('fuyofuyo2');
jumpmb.addEventListener('animationend', () => {
    jumpmb.classList.remove('fuyofuyo2');  
setTimeout(function(){
    jumpmb.classList.add('fuyofuyo2');
},3000)
})