
// pause 2


const pause22 =document.getElementById('pause2')

var scrollFunct = function (){
    var heighht = window.scrollY


    
    if (heighht >= 5500){
        pause22.className= 'pause2 shown'

       
    }else{
       
        pause22.className='pause2 hiden'
    }
}


window.addEventListener('scroll', scrollFunct)