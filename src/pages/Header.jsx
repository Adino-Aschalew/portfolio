import {FaBars,FaTimes} from 'react-icons/fa';
import { useState } from "react"
import { PageLinks } from './NavLinks';
const Header = () => {

    const [showNav,setShowNav] = useState(false);

    return ( 
        <section id="home" className="section">
        <div className="header-class">
        <h2 className="name"><span>A</span>dino<span className='dot'>.</span>
        <div className='under-line'></div></h2>
          <div className={`${showNav ? 'nav-links':'links'}`}>
            <div className={`${showNav ? 'interaction':'close-btn-hide'}`}>Navigate To</div>
            <div className={`${showNav ? 'close-btn':'close-btn-hide'}`} onClick={()=>setShowNav(false)}>
               <FaTimes/>
              </div>
            {PageLinks.map((links)=>{
              const {id,href,name}= links;
              return <ul key={id}>
                <li>
                    <a href={href}>{name}</a>
                </li>
            </ul>
            })}
        </div>
        <button className="bar-btn" onClick={()=>setShowNav(true)}><FaBars/></button>
        </div>
        </section>
);
}
export default Header;