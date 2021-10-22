import React,{useState} from 'react'
import './Contact.css'
import { motion } from "framer-motion"
import emailjs from 'emailjs-com';
const Result = () => {
    return (
        <p>your message is sent</p>
    )
}
const Contact = () => {
  
const [result, showResult] =  useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_madli0b', 'template_ygxefrx', e.target, 'user_yeWOdiFnMk3RulcMsXWv5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };
    return (
        
        <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{duration: 1}}
            
            className="pt-5 contact bg-light mt-3">
            <div className="container-fluid">
            <form target='' onSubmit={sendEmail}>
            <p>{
                        result?<Result />:null}</p>
                <div className="row">
                    <span className='text-muted'>Contact Us</span>
                </div>
            
                <div className="row d-flex justify-content-center align-items-center input-container">
                   
                     
                        <div className="col-sm-12 col-md-12">
                        <div className="styled-input wide">
                            <input type="text" name='from_name' required />
                            <label>Name</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input type="text" name='email' required />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input type="text" name='phone' required />
                            <label>Phone Number</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <textarea required name='message'></textarea>
                            <label>Message</label>
                        </div>
                        </div>
                        
                    <div className="col-xs-12 text-center">
                        <div><motion.input
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95, backgroundColor:'black', color:'orangered' }} className="btn-lrg submit-btn" type="submit" value="send message" /></div>
                        </div>
                        
                   
                </div>
                </form> 
            </div>
            
       </motion.div>
            

       
    )
}

export default Contact
