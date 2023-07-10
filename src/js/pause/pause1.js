// Pause 1
const contBoth = document.getElementById('contBoth')
var myscrollFunct = function(){
    var scrollHeight = window.scrollY;

    if (scrollHeight  >= 2300){
        contBoth.className='contBoth show'
    }else{
        contBoth.className="contBoth hide"
    }
}

window.addEventListener('scroll',myscrollFunct);