var click=document.querySelector("#main1 img");
var like=document.querySelector("#main2 img");



click.addEventListener("dblclick",function(){
    like.style.opacity="100%"
    setTimeout(function(){
        like.style.opacity="0%"
    },1000)
})

like.addEventListener("dblclick",function(){
    like.style.opacity="100%"
    setTimeout(function(){
        like.style.opacity="0%"
    },1000)
})