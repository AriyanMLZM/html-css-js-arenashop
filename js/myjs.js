/*
    Ariyan Molazem
    arenashopp.ir
    js
*/
mouseCircle = document.getElementById('mouse-circle')
document.onmousemove = (e) => {
    mouseCircle.style.transitionDuration = '100ms'
    mouseCircle.style.top = e.pageY + 'px'
    if(e.pageX < window.innerWidth - 20){
        mouseCircle.style.left = e.pageX + 'px'
    }
}
document.onmouseleave = () => {
    mouseCircle.style.transitionDuration = '2s'
    mouseCircle.style.left = '20px'
    mouseCircle.style.top = '20px'
}
