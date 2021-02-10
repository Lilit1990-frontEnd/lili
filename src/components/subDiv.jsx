import React from 'react';
import s from "../style/subDiv.module.css";


function Subdiv(props) {
    return (

      <div className={s.parent}>
    <ul className={s.directChild}>
    <li className={s.listCont}>
    <span className={s.pic}>icon</span>
        <h5>CERTIFICATION</h5>
         <p> Upon successful completion receive acertificate showing your achievement for completing one of our rigorous classe</p>
         
    </li>
    <li>
    <span className={s.pic}>icon</span>
        <h5>CERTIFIED TEACHER</h5>
        <p>Get professional education and reliable consultation by our team of certified teachers and instructors.</p>
        
    </li>
    <li>
        <span className={s.pic}>icon</span>
        <h5>BOOOKS AND LIBRARY</h5>
        <p> Masterstudy is one of the world`s busiest public library systems, with over 10 million books, movies and other items to borrow.</p>
       
    </li>
    <li>
      <span className={s.pic}>icon</span>
        <h5>TRENDING COURSES</h5> 
        <p>Your chance to be a trending expert in IT industries and make a successful career after completion of our courses.</p> 
       
    </li>
    </ul>
    </div>
    )
    
}
export default Subdiv;