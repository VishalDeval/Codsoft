var a = '0';
var b = '0';
var c = '0';
document.getElementById("ZERO").addEventListener('click', function () {
    document.body.querySelector('span').innerText = document.body.querySelector('span').innerText+`0`
    if (b.includes('+') || b.includes('-')|| b.includes('X')|| b.includes('/')) {
        c=c+'0'
    }
    else{
        a=a+'0'
    }
})
document.getElementById("ONE").addEventListener('click', function () {
    document.body.querySelector('span').innerText =document.body.querySelector('span').innerText+ '1'
    if (b.includes('+') || b.includes('-')|| b.includes('X')|| b.includes('/')) {
        c=c+'1'
    }
    else{
        a=a+'1'
    }
})
document.getElementById("TWO").addEventListener('click', function () {
    document.body.querySelector('span').innerText = document.body.querySelector('span').innerText+'2'
    if (b.includes('+') || b.includes('-')|| b.includes('X')|| b.includes('/')) {
        c=c+'2'
    }
    else{
        a=a+'2'
    }
})
document.getElementById("THREE").addEventListener('click', function () {
    document.body.querySelector('span').innerText = document.body.querySelector('span').innerText+'3'
    if (b.includes('+') || b.includes('-')|| b.includes('X')|| b.includes('/')) {
        c=c+'3'
    }
    else{
        a=a+'3'
    }
})
document.getElementById("FOUR").addEventListener('click', function () {
    document.body.querySelector('span').innerText = document.body.querySelector('span').innerText+'4'
    if (b.includes('+') || b.includes('-')|| b.includes('X')|| b.includes('/')) {
        c=c+'4'
    }
    else{
        a=a+'4'
    }
})
document.getElementById("FIVE").addEventListener('click', function () {
    document.body.querySelector('span').innerText = document.body.querySelector('span').innerText+'5'
    if (b.includes('+') || b.includes('-')|| b.includes('X')|| b.includes('/')) {
        c=c+'5'
    }
    else{
        a=a+'5'
    }
})
document.getElementById("SIX").addEventListener('click', function () {
    document.body.querySelector('span').innerText = document.body.querySelector('span').innerText+'6'
    if (b.includes('+') || b.includes('-')|| b.includes('X')|| b.includes('/')) {
        c=c+'6'
    }
    else{
        a=a+'6'
    }
})
document.getElementById("SEVEN").addEventListener('click', function () {
    document.body.querySelector('span').innerText = document.body.querySelector('span').innerText+'7'
    if (b.includes('+') || b.includes('-')|| b.includes('X')|| b.includes('/')) {
        c=c+'7'
    }
    else{
        a=a+'7'
    }
})
document.getElementById("EIGHT").addEventListener('click', function () {
    document.body.querySelector('span').innerText =document.body.querySelector('span').innerText+ '8'
    if (b.includes('+') || b.includes('-')|| b.includes('X')|| b.includes('/')) {
        c=c+'8'
    }
    else{
        a=a+'8'
    }
})
document.getElementById("NINE").addEventListener('click', function () {
    document.body.querySelector('span').innerText =document.body.querySelector('span').innerText+ '9'
    if (b.includes('+') || b.includes('-')|| b.includes('X')|| b.includes('/')) {
        c=c+'9'
    }
    else{
        a=a+'9'
    }
})
document.getElementById("AC").addEventListener('click', function () {
    document.body.querySelector('span').innerText = ''
    a='0';
    b='0';
    c='0';
})
document.getElementById("equal").addEventListener('click', function () {
    if(b=='+'){
        var result=parseInt(a)+parseInt(c);
        document.body.querySelector('span').innerText = `${result}`
        a='0';
        b='0';
        c='0';
    }
    else if(b=='-'){
        var result=parseInt(a)-parseInt(c);
        document.body.querySelector('span').innerText = `${result}`
        a='0';
        b='0';
        c='0';
    }
    else if(b=='X'){
        var result=parseInt(a)*parseInt(c);
        document.body.querySelector('span').innerText = `${result}`
        a='0';
        b='0';
        c='0';
    }
    else if(b=='/'){
        var result=parseInt(a)/parseInt(c);
        document.body.querySelector('span').innerText = `${result}`
        a='0';
        b='0';
        c='0';
    }
    else {
        document.body.querySelector('span').innerText = 'Error'
        a='0';
        b='0';
        c='0';
    }
})

document.getElementById("plus").addEventListener('click', function () {
    document.body.querySelector('span').innerText =document.body.querySelector('span').innerText+ '+'
    b= '+'
})
document.getElementById("minus").addEventListener('click', function () {
    document.body.querySelector('span').innerText = document.body.querySelector('span').innerText+'-'
    b='-'
})
document.getElementById("multiply").addEventListener('click', function () {
    document.body.querySelector('span').innerText =document.body.querySelector('span').innerText+ 'X'
    b='X'
})
document.getElementById("divide").addEventListener('click', function () {
    document.body.querySelector('span').innerText = document.body.querySelector('span').innerText+'/'
    b='/'
})
