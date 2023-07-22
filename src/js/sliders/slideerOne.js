

const slider = document.getElementById('slider')
const slidesItems = document.getElementById('slides_pi')
const prev = document.getElementById('leftSlide')
const next= document.getElementById('rightSlide')


var slideSize=document.getElementsByClassName('wrapper_pi')[0].offsetWidt,
    posInit,
    index = 0;



function slide (wrap, items, prev, next ){


    var posX1 = 0,
        posy2=0,
        posiFinal,
        thechHold=100,
        slide = document.getElementsByClassName('slide_pi'),
        slideLenth=slide.length,
        firstSlide = slide[0],
        lastSlide = slide[slideLenth-1],
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        allowShift = true;
    
    items.appendChild(cloneFirst)
    items.insertBefore(cloneLast,firstSlide)
    

    function shiftSlide(dir, action){
        items.classList.add('shifting')

        if(allowShift){
            if(!action){
                posInit = items.offsetLeft;
            }

            if (dir == 1){
                items.style.left= posInit - slideSize + 'px';
                index ++;
            }

            if (dir == -1){
                items.style.left = posInit + slideSize + 'px';
                index --;
            }
        }

        allowShift = false;


    }


    function checkindex(){
        items.classList.remove('shifting')


        if (index == -1){
            items.style.left = -(slideLenth*slideSize) + 'px'
            index = slideLenth - 1;
        }

        if (index == slideLenth){
            items.style.left = -(1*slideSize)+ 'px';
            index = 0
        }


    }
    


}

slide(slider, slidesItems, prev,next)