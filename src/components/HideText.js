

import React from 'react';
import './HideText.css';


export default class HideText extends React.Component{
    
    constructor(props) {
        super(props);
        this.state={Person : { fullName:"Sirajeddine Bouasker",
        bio: "35 years old, from Nabeul, sirajdinho@hotmail.com",
        imgSrc:"/newCoder.jpg", 
        profession: "web developer" } ,
        show:true};
      }
     
      
       
      
    
      render() {
        return (
     
          <div className="HideText">
          <header >
            <div>
                {
            
                   this.state.show? <div><h1 style={{color: 'Purple', fontSize:'7rem', backgroundColor:'Highlight'}}>{this.state.Person.fullName}</h1>
                   <img src={this.state.Person.imgSrc} alt="profilepic"/>
                   <h3 style={{color: 'Green', fontSize:'5rem', backgroundColor:'turquoise' }} >I am a {this.state.Person.profession} </h3>
                       <br></br>
                      <p style={{ fontSize:'3rem', backgroundColor:'yellow'}}>Please find here a scope of my bio :</p> <br></br> 
                      <h2 style={{ fontSize:'5rem', backgroundColor:'pink'}}>{this.state.Person.bio}</h2>
                 
                   </div> : null}
                   
                   <label className="switch">
                    <input type="checkbox" onClick={()=>{this.setState({show:!this.state.show})}} defaultChecked/>
                     <span className="slider round" >{ this.state.show? 'Hide' : 'Show'}</span>
                     </label>
                
                
                </div>
          </header>
        </div>
        );
      }
    }