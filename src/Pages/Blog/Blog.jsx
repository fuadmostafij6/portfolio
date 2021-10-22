import React from 'react'
import './Blog.css'
import Data from './Data.json'
import {
    Link
  } from "react-router-dom";
  
import { motion } from "framer-motion"

const Blog = () => {

    return (

        <section className="blog bg-light mt-3">
            <div className="">

                <div className="row pt-5 px-1">
                    {
                        Data.map((r, i) => (
                            <>{
                                r != null ? (
                                    <>
                                        <motion.div
                                            initial={{ opacity:0 }}
                                            animate={{ opacity:1 }}
                                            transition={{duration: 1.5}}
                                            key={i} className="col-md-4">
                                            <div className="card">
                                                <img className="card-img w-100" src={require(`./asset/${r.image}`).default} alt="Bologna" />
                                                <div className="card-img-overlay">
                                                    <a href="#" className="btn  btn-sm">{r?.tag}</a>
                                                </div>
                                                <div className="card-body">
                                                    <h4 className="card-title">{r.title}</h4>
                                                    <small className="text-muted cat">
                                                        <i className="far fa-clock text-info"></i> 30 minutes
                                                        <i className="fas fa-users text-info"></i> 4 portions
                                                    </small>
                                                    <p className="card-text">{r.description}</p>
                                        
                                                    <Link to='#'>  <motion.p
                                                                         whileHover={{ scale: 1.05 }}
                                                                         whileTap={{ scale: 0.95, backgroundColor:'black', color:'orangered' }}
                                                         className="btn">Read More</motion.p></Link>
                                                </div>
                                                <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                                    <div className="views">Oct 20, 12:45PM
                                                    </div>
                                                    <div className="stats">
                                                        <i className="far fa-eye"></i> 1347
                                                        <i className="far fa-comment"></i> 12
                                                    </div>
                                                </div>
                                            </div>

                                        </motion.div>
                                    </>

                                ) : null
                            }
                            </>
                        ))
                    }




                </div>

            </div>
        </section>

    )
}

export default Blog
