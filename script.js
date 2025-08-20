var btn=document.getElementById("btn")
var box=document.getElementById("box")

function getRandomColor(){
    var str="#"
    var array=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
    for(var i=0;i<6;i++){
        str+= array[Math.floor(Math.random()*16)]
    }
    return str
    
}

btn.addEventListener("click", function(){
box.style.backgroundColor=getRandomColor()
})

box.addEventListener("mouseover",function(){
box.style.scale="1.2"
})

box.addEventListener("mouseout",function(){
box.style.scale="1"
})
box.addEventListener("click",function(){
document.querySelector("body").style.background="red"
})