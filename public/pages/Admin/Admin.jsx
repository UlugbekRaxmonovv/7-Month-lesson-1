import React,{useState,useEffect} from 'react';
import { Link,Outlet } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";
import { VscChevronDown,VscChevronUp } from "react-icons/vsc";
import { CiMenuFries } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { useLocation } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";

import './Admin.css'


const Admin = () => {
    const[menu,setMenu] =useState(false)
    const {pathname} = useLocation()
    const [toogli,sitToggli] = useState(false)

    useEffect(()=>{
    window.scrollTo(0,0)
    },
    [pathname]
)
    return (
        <div className='container'>

<div className="saidbar-row">
        <div className="admin-all container">
            <div className={`admin-row${toogli ? 'show' : ""}`}>
                <ul className= "ul-link" >
                <Link to={'/'}><img width={50} src="https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png" alt="" /></Link>
                   <li>
                        <Link to={'/'}>React Router</Link>
                         </li>
                        <li> <button onClick={() => setMenu(!menu)}>
                         <CiMenuFries />
                          </button> </li>
                          <li>
                            <div className="li-admin">
                            <button>main</button>
                              <div className="li-admin-row">
                              <div className="li-admin-alt">
                              <VscChevronUp />
                                </div>
                              <div className="li-admin-alt">
                                <VscChevronDown />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="btn1">
                            <CgDarkMode />
                            </div>
                          </li>
                </ul>
             
           
                <div className="logo">
                <div className="logo-all">
                    <FaGithub />
                    </div>
                    <div className="logo-all1">
                    <Link to={'/'}><CiLogin /> <span>Login</span></Link>
                    </div>
                </div>


               
               
                
              
            </div>
            <button className='button' onClick={() => sitToggli(!toogli)}>
                         <CiMenuBurger />
                         </button>
        </div>
        </div>

  <div className={`saidbar ${menu? 'show' : <></>}`}>
    <div className="saidbar-all">
        <ul className='container'>
            <li>
                <div className="img">
                <div className="img-all">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/118/901/small_2x/svg-logo-svg-letter-svg-letter-logo-design-initials-svg-logo-linked-with-circle-and-uppercase-monogram-logo-svg-typography-for-technology-business-and-real-estate-brand-vector.jpg" alt="" />
                    </div>
                    <div className="img-all">
                        <Link to={'/'}><h1>Admin panel</h1></Link>
                    </div>
                </div>
            </li>
            <li> <Link to={'saidbar'}>Saidbar</Link></li>
            <li><Link to={'mange'}>Mange</Link></li>
             <button className='btn'><Link className='a-tig' to={'/'}>Go Back</Link></button>
        </ul>
        <Outlet/> 
        
    </div>
    <div className="saidbar-row-all">
        </div>
</div>  
  </div>

      



         
      
    );
}

export default Admin;
