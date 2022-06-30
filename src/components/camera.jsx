
// import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
// import Clarifai  from 'clarifai'

import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-camera-cocohub";
import {Daten} from '../json/DatenOOP';

// const app=new Clarifai.App({
//   'apiKey':'2ec40441b07e49fb8d2b72a818d88655',  
//   // id: "a403429f2ddf4b49b307e318f00e528b",
//   // version: "c0c0ac362b03416da06ab3fa36fb58e3",
 
// })
class Camera1 extends Component {

  constructor(){
    super()
  }
url=(e)=>{
  let bildURl=document.querySelector("input").value
  const picArr=["jpg","jpeg","png","gif","https"]
  // versuch mit type wie python
  // const formatPic=bildURl.includes(picArr)
  if(!bildURl.includes(picArr))
  {

    alert("kein richtiges Format")

    if(bildURl.includes(picArr[0]||bildURl.includes[1]))
    {


   return(picArr[2]&&picArr[3]==false)


    }

  }
  
//   else if(!bildURl.includes("png")||!bildURl.includes("gif")){

// alert("formant pass nicht")

//   }
  else{
return true

  }
  // picArr.map((picArr)=>{
  
  //   if(!bildURl.includes(picArr)){
  
  //     alert("wrong url")
  //   }
  //   return false
    
  
  // })
  
  
if(e.key==='Enter'){
  
  const test=document.querySelector(".bilder")
  const btn=document.createElement("BUTTON")
  btn.innerHTML="X"
  const x=document.createElement("IMG")
  x.setAttribute("src",`${bildURl} `)
  x.setAttribute("width", "500");
x.setAttribute("height", "600");

test.appendChild(x)
test.appendChild(btn)
btn.addEventListener("click",()=>{


  test.style.display="none"

})

test.style.display="block"


  console.log(bildURl)

const faceDecteSite=document.createElement("BUTTON")
faceDecteSite.innerHTML="FaceDetect Site"

test.appendChild(faceDecteSite)
// faceDecteSite.open("https://clarifai.com/clarifai/main/models/face-detection")
faceDecteSite.addEventListener("click",()=>{


window.open("https://clarifai.com/clarifai/main/models/face-detection")


})




// hier weiter versuchen  evtl. das Module löschen und neu aufsetzen

// app.models.predict(Clarifai.FACE_DETECT_MODEL,test)
  // fetch(bildURl)
  // .then(response=> {
  //   if(response){
     
   

  //       console.log("Gesicht vorhanden")

  //     }
        
  //     })
    }
  


}
  
  render() {
  

    return (
      <>
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={800}
        defaultPositionY={800}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={zoomIn}>+</button>
              <button onClick={zoomOut}>-</button>
              <button onClick={resetTransform}>x</button>
              <input onKeyUp={this.url} type="text" placeholder='image Url' />
            </div>
            <TransformComponent>
              <img  onChange={this.url}  alt="test" />
              <div className="bilder">
              
              
              </div>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>

{Daten.map(({id,button1,click})=>(

<div onClick={click}>

{button1}

</div>


))



}

      </>
    );
  }
}
export default Camera1;
