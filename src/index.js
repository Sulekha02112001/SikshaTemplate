 
 import ReactDOM from 'react-dom';
 import React from 'react';
 import './index.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HelpIcon from '@material-ui/icons/Help';
import Card from './components/Card'


 
ReactDOM.render (
    <div>  
      <div className="head">
        
                <button className="button"><ArrowBackIcon className="arrow"/> </button>
                <h1 className="text" >Select Temlate</h1>
                 <button className="button"  ><HelpIcon style={{ color: "#03c04a",   paddingLeft: 1100 }}/></button>       
      </div>
      
          <Card/>
         
     </div>,
    document.getElementById("root")
)
  
   