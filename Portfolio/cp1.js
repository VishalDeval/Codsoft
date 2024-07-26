document.getElementsByClassName('instagram')[0].addEventListener("click",function(){
    open('https://www.instagram.com/vdeval016/')
})
document.getElementsByClassName('linkden')[0].addEventListener('click', function () {
    open('https://www.linkedin.com/in/vishal-deval-0a1283296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
})
document.getElementsByClassName('github')[0].addEventListener('click', function () {
    open('https://github.com/VishalDeval')
})
document.getElementsByClassName('telegram')[0].addEventListener('click', function () {
    open('https://t.me/+cv6sThv7Cy4xY2Q9')
})
document.getElementsByClassName('page4child')[0].addEventListener('click',function(){
    open('https://vishaldeval.github.io/Digital-Clock/')
})
document.getElementsByClassName('page4child')[1].addEventListener('click',function(){
    open('https://vishaldeval.github.io/Codsoft/Calculator')
})
document.getElementsByClassName('page4child')[2].addEventListener('click',function(){
    open('https://vishaldeval.github.io/To-Do-List/')
})
document.getElementsByClassName('hamburger')[0].addEventListener('click',function(){
    document.getElementsByTagName('nav')[0].classList.toggle('expanded');
})
document.addEventListener('click', function(event) {
    const navbar = document.getElementsByTagName('nav')[0];
    if (!navbar.contains(event.target)) {
        navbar.classList.remove('expanded');
    }
});
for (let j=1;j<5;j++){
    document.getElementsByTagName('li')[j].addEventListener('click',function(){
        document.getElementsByTagName('nav')[0].classList.remove('expanded');  
    })
}