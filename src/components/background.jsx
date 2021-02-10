
import React from 'react';
import s from "../style/baground.module.css";



function BackgroundPic (props) {
    return (
        <div className = {s.container}>
         <div className={s.pContainer}> 
         <h1>Start Investing in You</h1>
         <p> With over 1200 courses in 18 subjects,you`re guaranteed to find something that`s rigth for you </p>
         <div className={s.buttonDiv}> 
             <button> JOIN FOR FREE </button> 
         </div>
         
        </div>
        </div>
       
    )


}
export default  BackgroundPic;
