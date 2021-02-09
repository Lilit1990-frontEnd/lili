import React from 'react';
import s from "../style/header.module.css"
export default function Header1(props) {
    return (
        <nav>
                <div> 
                    <span>Courses</span>
                     <span>Courses Formats
                        <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>Free Courses
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li></ul>
                    </span>
                    <span>Add Course</span>
                    <span>Pages</span>
                    <span>Demos</span>
                 </div>

                <div className={s.media}> 
                   <span> <img src="" alt="twitter"/>   </span>
                   <span> <img src="" alt="instagram"/>  </span>
                   <span> <img src="" alt="behance"/>  </span>
                   <span> <img src="" alt=" dribbele"/> </span>
                   <span> <img src="" alt="flicker"/>   </span>
                   <span>  <img src="" alt=" git"/>     </span>
                   <span>  <img src="" alt="linkedin"/>   </span>
                   <span> <img src="" alt="pinterest"/>  </span>
                 </div>

                <div>

                </div>

            

        <header className ={s.main}>
            <div className = {s.container}>
            <div className={s.rigth}>
                <div className = {s.heart}> 
                    < a  className = {s.heart}href="#"> 
                    <img src="#" alt=""/>
                     </a>
                   </div> 
                <div className={s.button}>
                   <button className = {s.buttonClick}>
                       <a className = {s.signIn}href="#">
                <span className ={s.sign}>Sign up</span>
                        </a>
                           </button>
                       </div>
               < a href="#" className="login" >
                    <img src="#" alt=""/>
                <span>Log in</span> 
                </a>
              </div>
              <div className = {s.center}>
                 <div className = "links">
                  <a href="#">
                       <span>Become an Instructor</span>
                  </a>
                  <a href="#"> 
                  <span>For Enterprise</span>
                  </a>
                </div>
                  <div className="{s.searche}">
                      <div className= "burger"> 
                      <form>
                         <i class="fa fa-user icon"></i> 
                          <input className={"searchCourse"} type="text"/>
                      </form>
                      <ul>
                          <li>ART and PHOTOGRAPHY</li>
                          <li> BUSSINESS and MARKETING </li>
                          <li> COMPUTER and SCIENCE</li>
                          <li> HEALTH and FiTNESS </li>
                          <li> MULTI-MEDIA </li>
                          <li> PHOTOGRAPHY </li>
                     </ul> 
                       </div>

                      </div>

                  <div className={s.logo}>
                      <a href="#">
                          <img src="https://stylemixthemes.com/masterstudy/rtl-demo/wp-content/uploads/sites/16/2019/09/MasterStudy.svg" alt=""/>
                      </a>
                  </div>
              </div>
            </div>
        </header>
        </nav>
    )
}
