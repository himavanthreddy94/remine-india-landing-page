import React from 'react'
import './Contact.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <section className='contact-form-section'>
        <h1>Contact with us if you need help or just want to say hello</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.8631610261555!2d79.67376667504345!3d29.050628275439045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a08b264fbb876d%3A0x7c65bace743dcc5!2sRemine%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1682674106475!5m2!1sen!2sin" width="100%" height="350" style={{border: 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <form action="">
        <div className="container my-3 text-center ">
          <div className="row">
            <div className="col-6">
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Micheal Jackson"/>
          </div>
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Enter your message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className='btn btn-primary'>Submit</button>
            </div>
          </div>
        </div>  
        </form>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
