import { useState } from 'react';
import image from '../assets/image.jpg';
import { CgAdd } from "react-icons/cg";
import {FaAngellist,FaDownload} from 'react-icons/fa';
import { SocioLinks } from './NavLinks';
const Home = () => {
   
    const [socialLink,setSocialLink] = useState(false);
    return (
    <section id="home" className="section">
    <div className="container">
        <div className="introduction">
        <h1>hi, i'm adino aschalew</h1>
        <h3>frontend Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo commodi magni mollitia aliquam harum officia itaque unde nostrum molestias dolor, sint perferendis perspiciatis iste alias culpa, quam nemo eius.</p>
        <div className="buttons">
            <button className="hire">hire me</button>
            <button className="cv">download cv <FaDownload/></button>
            </div>
        </div>
        <div className='circle'>
            <div className='victory-icon'><FaAngellist/></div>
            <img src={image} alt="Picture Of Me"/>
            <div className='img-shadow'></div>
            </div>
    </div>
    <div className='socio-icons'>
        <div className='add-icon' onClick={()=>setSocialLink(!socialLink)}><CgAdd/></div>
            {socialLink &&
            <div className='sub-icons'>
                {SocioLinks.map((socio)=>{
                    const {id,href,icon} = socio;
                    return <ul key={id}>
                    <li>
                        <a href={href}>{icon}</a>
                    </li>
                </ul>
                })}
            </div>
            }
    </div>
    </section>
)
}
export default Home