      import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
      import { SiMysql, SiCanva, SiAdobephotoshop, SiFigma } from 'react-icons/si';
const Services = () => {
  return (
    <section id="services" className="section">
          <div className='skills'>
              <div className='card'>
         <div className="titel">
              <h1>What I do</h1>
              <div className="under-line"></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magni qui non harum, explicabo provident unde autem beatae placeat</p>
            </div>
            <div className='content'>
              <div className='skill-card'>
                <div className='icons'>
                  <div className='icon'><FaHtml5 /><small>HTML5</small></div>
                  <div className='icon'><FaCss3 /><small>CSS3</small></div>
                  <div className='icon'><FaJs /><small>JAVASCRIPT</small></div>
                  <div className='icon'><FaReact /><small>REACT</small></div>
                  <div className='icon'><SiMysql /><small>MYSQL</small></div>
                  <div className='icon'><FaNodeJs /><small>NODEJS</small></div>
                  <div className='icon'><SiCanva /><small>CANVA</small></div>
                  <div className='icon'><SiAdobephotoshop /><small>PHOTOSHOP</small></div>
                  <div className='icon'><SiFigma /><small>FIGMA</small></div>
                  <div className='icon'><FaGithub /><small>GITHUB</small></div>
                </div>
              </div>
            </div>
              </div>
         
          </div>
 
    </section>
  )
}

export default Services