import React from 'react'
import "./Card.css" 
import logo from './logo.jpg'
import photo from './photo.png'

function Card() {
  return(
    <div className="box">
    <div  className="card">
       <div className="up">
            <img src={logo} alt="logo" width="42vh" height="42vh" /> 
           <p>Next Learning School</p>
       </div>
       <div className="mid">
             <div className="staff"><p  >STAFF ID CARD</p></div>
                 <div className='img'>
                    <img src={photo} alt="logo" width="65vh" height="70vh" /> </div>
                    <p className='te'>XXX XXXX XXXXX</p>
                    <p className='tex'>Teacher</p>
              
                 
              
       </div>
       <div className="mid2">
          
       </div>
       <div className="mid3">
          
       </div>
       <div className="foot"></div>
       </div>
       <p className="t">Staff id card 1</p>
       <button className="button1">ADD</button>
    </div>  
  )
}

export default Card ;