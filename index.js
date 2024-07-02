var sections = document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity=1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()
    })
})