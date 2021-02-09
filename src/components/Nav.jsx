
import React from 'react';
import s from "../style/nav.module.css"

export default function Navbar (props) {
    return (
        <nav className= {s.container}>
                <div> 
                   <ul>
                    <li> Courses </li>
                     <li>Courses Formats</li>
                     <li>Add courses </li>
                  <li> Pages</li>
                   <li> Demos</li>
                   </ul>
                 </div>

               < div className= {s.ulcontainer}>
               <ul > 
                   <li><img src="" alt="instagram"/> </li>  
                   <li><img src="" alt="instagram"/> </li>  
                   <li><img src="" alt="instagram"/> </li>  
                   <li><img src="" alt="instagram"/> </li>  
                   <li><img src="" alt="instagram"/> </li>  
                   <li><img src="" alt="instagram"/> </li>    
                     </ul>   

               </div>
                
                </nav>
                )
              }