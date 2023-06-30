

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



// Sliders 

var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('right_click')
    next = document.getElementById('left_click')


// console.log(sliderItems)
