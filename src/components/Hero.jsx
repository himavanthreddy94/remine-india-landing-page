import React from 'react'
import { FaRecycle } from "react-icons/fa"
import heroimg from "../assets/hero-img.png"
import whoweare from "../assets/whoweare.png"
import cardimage1 from "../assets/cardimage-1.jpg"
import cardimage2 from "../assets/cardimage-2.jpg"
import './Hero.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <>
    <section className='main-section'>
      <div className="main-container">
        <div className="text-container">
          <h1>One step closer to a sustainable world.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, incidunt saepe! Recusandae placeat maxime nulla.</p>
          <Button variant='dark'><Link to="/contact">Contact us</Link></Button>
        </div>
        <div className="image-container">
          <img src={heroimg} alt="hero-section-image" />
        </div>
      </div>
    </section>
    <section className='animation-section'>
      <div className="animation-container">
        <h1>MAKE OUR <i>PLANET</i></h1>
        <h1>A <i>GREENER</i> PLACE TO LIVE</h1>
      </div>
    </section>
    <section className='second-section'>
      <div className="main-container">
        <div className="text-container">
          <h1>Who We Are</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias natus doloribus possimus necessitatibus rem nisi in eos ea beatae rerum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a deserunt ea dignissimos magnam voluptate harum nulla eius doloremque repellendus dolore, dolor vel officia ducimus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde non sapiente officia facilis voluptatem saepe numquam nihil obcaecati accusantium. Ipsa dolore et itaque? Reiciendis reprehenderit dolore nam deleniti! Quidem iste veritatis dolores nemo doloremque nihil culpa libero dolor perferendis sapiente aperiam officia ullam recusandae, voluptatum cum quaerat incidunt! Similique?</p>
        </div>
        <div className="image-container">
          <img src={whoweare} alt="who-we-are-description-image" />
        </div>
      </div>
    </section>
    <section className='animation-section'>
      <div className="animation-container">
        <h1><i>REDUCE</i><FaRecycle/><i>RECYCLE</i><FaRecycle/><i>REUSE</i></h1>
      </div>
    </section>
    <section className='services-section'>
      <div className="maincontainer">
      <div className="text_container">
      <h1>Our Services</h1>
      </div>
      <div className="cards-container">
      <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={cardimage1} />
      <Card.Body>
        <Card.Title>Li Batteries</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark"><Link to="/contact">Get in touch</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={cardimage2} />
      <Card.Body>
        <Card.Title>E Waste</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark"><Link to="/contact">Get in touch</Link> </Button>
      </Card.Body>
    </Card>
      </div>
      </div>
    </section>
    </>
  )
}

export default Hero
