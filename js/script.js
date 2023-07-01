
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



// pause 2


const pause22 =document.getElementById('pause2')

var scrollFunct = function (){
    var heighht = window.scrollY

    console.log(heighht)
    
    if (heighht >= 5600){
        pause22.className= 'pause2 shown'

        console.log('pinhas')
    }else{
       
        pause22.className='pause2 hiden'
    }
}


window.addEventListener('scroll', scrollFunct)
