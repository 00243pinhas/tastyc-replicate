
// pause 2


const pause22 =document.getElementById('pause2')

var scrollFunct = function (){
    var heighht = window.scrollY

    console.log(heighht)
    
    if (heighht >= 5200){
        pause22.className= 'pause2 shown'

        console.log('pinhas')
    }else{
       
        pause22.className='pause2 hiden'
    }
}


window.addEventListener('scroll', scrollFunct)