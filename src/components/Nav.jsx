
import React from 'react';
import s from "../style/nav.module.css"

export default function Navbar (props) {
    return (
        <nav className= {s.rootDiv}>
           
                   <ul >
                    <li> <a href="">Courses </a> </li>
                     <li> <a href="">Courses Formats</a> </li>
                     <li> <a href="">Add courses</a> </li>
                      <li> <a href="">Pages</a> </li>
                      <li> <a href=""> Demos</a> 
                        </li>
                 </ul>
                       <ul>
                   <li> <a href=""> </a></li>  
                   <li> <a href="">  </a></li>  
                   <li> <a href=""> </a></li>  
                   <li> <a href=""> </a></li>  
                   <li> <a href=""> </a> </li>  
                   <li> <a href=""> </a></li>    
                      </ul> 
                     
                    
                </nav>
                )
              }