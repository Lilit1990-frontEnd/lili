import React from 'react';
import s from "../style/header.module.css";
export default function Header1(props) {
    return (
     
        <nav className ={s.main}>
             <ul className= {s.bar}> 
             <li> 
        <a className = {s.heart}href="#"> img </a>
              </li>
             <li>
             <button className = {s.buttonClick}>
                <a className = {s.signIn} href="#">
                       Sign up
                 </a>
             </button>
             </li>
             <li> 
                 <div>img</div>
                 < a href="#" className="login" >
                     LOG IN 
                </a>
             </li>
             <li>
             <a href="#">
                       Become an Instructor
                  </a> 
             </li>
             <li> <a href="#"> 
                  For Enterprise
                  </a>
              </li>
                  <div className= "burger"> 
                      <form>
                          <button className={s.searchBaner}>o</button>  
                          <input  type="text"/>
                          <button className = {s.dropMenu}> =  </button>   
                      </form>
                     </div> 
             </ul>
             <span><img  className = {s.logo} src="https://stylemixthemes.com/masterstudy/rtl-demo/wp-content/uploads/sites/16/2019/09/MasterStudy.svg" alt=""/></span>     
                      
           
        </nav>
      
    )
}
