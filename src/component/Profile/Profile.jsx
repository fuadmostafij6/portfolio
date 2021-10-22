import React from 'react'
import p from './asset/mostafij.png'
import axios from 'axios'
import './Profile.css'
import { GetApp as GetAppIcon } from '@mui/icons-material';
import { motion } from "framer-motion"


const Profile = () => {
  const  dounloadFun =(() => {axios({
    method: "get",
    url: "downloadSamplePDF.pdf",
    responseType: "blob"
  })
      .then((response) => {
        
        var link = document.createElement("button");
        link.href = window.URL.createObjectURL(
          new Blob([response.data], {
              type: "application/octet-stream",
       })
      );
      link.setAttribute('download', 'file.pdf');
  
      document.body.appendChild(link);
  
      link.click();
      setTimeout(function () {
        window.URL.revokeObjectURL(link);
      }, 500);
    })
    .catch((error) => {
        console.log(error)
    });
        
    })


    return (

        <div className="profile shadow-none p-3 mb-5 bg-light rounded">
            <div className="profile-top">
                <motion.h2
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{duration: 0.5}}
                
                >Mostafij</motion.h2>
                <p>a web and app developer</p>
            </div>
            <div className="profile-img">
                <img src={p} alt="" />

            </div>
            <div className="profile-timeline">
               
                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="timeline p-4 block mb-4">
                                    <div className="tl-item">
                                        <div className="tl-dot b-warning"></div>
                                        <div className="tl-content">
                                            <motion.div
                                                 initial={{ opacity:0 }}
                                                 animate={{ opacity:1 }}
                                                 transition={{duration: 0.8}}
                                                className="active name">name</motion.div>
                                            <motion.div
                                             initial={{ opacity:0 }}
                                             animate={{ opacity:1 }}
                                             transition={{duration: 1}}    className="tl-date  mt-1">Mostafij</motion.div>
                                        </div>
                                    </div>
                                    <div className="tl-item">
                                        <div className="tl-dot b-warning "></div>
                                        <div className="tl-content">
                                            <motion.div
                                                 initial={{ opacity:0 }}
                                                 animate={{ opacity:1 }}
                                                 transition={{duration: 1.3}}
                                                className="active name">location</motion.div>
                                            <motion.div
                                             initial={{ opacity:0 }}
                                             animate={{ opacity:1 }}
                                             transition={{duration: 1.5}}    className="tl-date mt-1">Dhaka</motion.div>
                                        </div>
                                    </div>
                                    <div className="tl-item">
                                        <div className="tl-dot b-warning"></div>
                                        <div className="tl-content">
                                            <motion.div
                                             initial={{ opacity:0 }}
                                             animate={{ opacity:1 }}
                                             transition={{duration: 1.7}}    className="active name">email</motion.div>
                                            <motion.div
                                             initial={{ opacity:0 }}
                                             animate={{ opacity:1 }}
                                             transition={{duration: 1.9}}    className="tl-date mt-1">fuadmostafij5@gmail.com</motion.div>
                                        </div>
                                    </div>
                                    <div className="tl-item">
                                        <div className="tl-dot b-warning"></div>
                                        <div className="tl-content">
                                            <motion.div
                                             initial={{ opacity:0 }}
                                             animate={{ opacity:1 }}
                                             transition={{duration: 2}}    className="active name">Degree</motion.div>
                                            <motion.div
                                             initial={{ opacity:0 }}
                                             animate={{ opacity:1 }}
                                             transition={{duration: 2.2}}    className="tl-date mt-1">BSc. in CSE</motion.div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="download-cv">
                <motion.button
                    
                whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, backgroundColor: 'black', color: 'orangered' }} type="button" className="btn-bg"
                    onClick={
                        dounloadFun
                }
                >
                
                    <motion.span
                        whileTap={{color:"orangered"}}
                        
                       
                    
                    >Download cv</motion.span><GetAppIcon className="icon" />
                </motion.button>

            </div>
        </div>
    )
}

export default Profile
