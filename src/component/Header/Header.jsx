import React from 'react'
import { Home as HomeIcon, Facebook as FacebookRoundedIcon, GitHub as GithubIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';
import { orange } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"
import {
    
    Link
  } from "react-router-dom";
  

const Header = () => {
    return (
        <div className=''>
        <motion.nav

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><HomeIcon sx={{ color: orange[500], fontSize: 40 }} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Resume</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>

              </ul>
              <form className="d-flex ">
                <a className="px-2" target="_blank" href="https://www.facebook.com/fuad.mostafij.hk/"> <FacebookRoundedIcon sx={{ color: orange[500], }} /></a>
                <a className="px-2" target="_blank" href="https://github.com/webmostafij"><GithubIcon sx={{ color: orange[500] }} /></a>

                <a className="px-2 fiverr" target="_blank" href="https://www.fiverr.com/mostafij2012"><Icon width='28' color="green" icon="jam:fiverr-circle" /></a>
                <a className="px-2" target="_blank" href="https://www.linkedin.com/in/web-mostafij-a56109202/"><LinkedInIcon sx={{ color: orange[500] }} /></a>




              </form>
            </div>
          </div>
        </motion.nav>
      </div>
    )
}

export default Header
