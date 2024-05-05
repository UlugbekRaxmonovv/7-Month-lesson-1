import React,{useState} from 'react';
import './Navbar.css'
import { Link, useLocation} from 'react-router-dom';

const Navbar = () => {
    const [top,setTop] =useState(false)

    function sitTop(){
        if(window.scrollY >= 100){
            setTop(true)
        }
        else{
            setTop(false)
        }
    }
    window.addEventListener('scroll',sitTop)


    let {pathname} = useLocation()
        if(pathname.includes("/admin") || pathname.includes("/mange")){
         return <></>
        }
    return (
    
        <div>
            <header className={  top ? 'header top' : 'header'}>
                <div className="container">
                    <nav className='link-all'>
                   <Link to={'/'}>
                   <img  style={{width:'100px'}} src="https://static.vecteezy.com/system/resources/thumbnails/028/861/825/small/svg-letter-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" alt=""/>
                   </Link>
                        <ul className='link'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a href="" className="">About</a></li>
                        <li><a href="" className="">Contact</a></li>
                        <li><Link to={'/admin'}>Admin</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
         
        </div>
    );
}

export default Navbar;
