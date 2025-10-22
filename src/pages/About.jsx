import image from '../assets/image.jpg'

const About = () => {
  return (
    <section id="about" className='section'>
      <div className='about-container'>
        <div className='rectangle'>
            <img src={image} alt='Picture Of Me' />
            </div>
            <div className='abt-page'>
        <div className="titel">
        <h1>about me</h1>
        <div className="under-line"></div>
        </div>
        <h2>developer<span> & designer</span></h2>
        <p>i'm a front-end web developer. I can provide clean code and pixel perfect designs. 
          I also make the website more and more interactive with web animations.
           A responsibe design makes your website accessible to all users regardless of their device. </p>
         <button className='let-talk'>let's talk</button>
            </div>
      </div>
      </section>
  )
}

export default About;