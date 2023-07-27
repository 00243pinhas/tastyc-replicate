

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



    prev.addEventListener('click', function(){
       
        shiftSlide(-1)
         console.log('hey')
    })
    
    next.addEventListener('click', function(){
        
        shiftSlide(1)
        console.log('hi')
    })

    items.addEventListener('transitionend', checkindex);

    //setWidth();
    

    function shiftSlide(dir, action){

        console.log(' Add shifting')
       // items.classList.add('shifting')
           
        if(allowShift){

            if(!action){

                console.log('items offleft')
              ///  posInit = items.offsetLeft;
              
            }

            if (dir == 1){
               
                console.log('dir ==1')
               // items.style.left= posInit - slideSize + 'px';
                index ++;
            

            }

            if (dir == -1){
               
                console.log('dir -1')
                //items.style.left = posInit + slideSize + 'px';
                index --;
               // console.log(index)

            }
        }

        allowShift = false;


    }


    function checkindex(){
      

       // items.classList.remove('shifting')
        //console.log('ashao')

        if (index == -1){   
             console.log('its')
           // items.style.left = -(3*slideSize) + 'px'
        
           // index = 3 - 1;
            //console.log('index')
            
         
        }

        if (index == 3){
             console.log('her')
            //items.style.left = -(1*slideSize)+ 'px';
           
            //index = 0

            //console.log('index 0')
        }


    }
    


}



slide(slider, slidesItems, prev,next)

// function setWidth(){
//     var slide = document.getElementsByClassName('slide_pi'),
//         slidesizeU= document.getElementsByClassName('wrapper_pi')[0].offsetWidt;
    

//     Array.from(slide).forEach(function(item){
//         item.style.width = slidesizeU + 'px'
//     })
// }

// window.addEventListener('resize', setWidth);