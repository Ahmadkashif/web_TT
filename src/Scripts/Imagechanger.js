import Scene1 from '../images/Scene1.png'
import scene2 from '../images/scene2.png'
import scene3 from '../images/scene3.png'

let img = document.getElementsByClassName("OurWorkpic");
let data = {Scene1,scene2,scene3};

let funcChanger = (i)=>{
    img.style.backgroundImage = data[i];
}
setInterval(()=>{
    
},2000)