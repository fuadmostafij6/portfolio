import React, { useState } from 'react'
import { Tabs, Tab, } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Portfolio.css'
import Data from './Data'
import { motion } from "framer-motion"


const Portfolio = () => {
    const [tabValue, setTabValue] = useState("All")
    const [projectDialog, setProjectDialog] = useState('')
    return (
        <div className='portfolio container-fluid bg-light'>
            <div className="title text-center text-muted mt-3 pt-5">
                <span>portfolio and some cool projects</span>
            </div>
            <div className="me-auto ms-auto mt-5">
                <Tabs value={tabValue} indicatorColor='white' className='custom_tab' onChange={
                    (e, i) => setTabValue(i)
                }>
                    <Tab label='All' value='All' className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'} />


                    {[...new Set(Data.portfolio.map(item => (
                        item.tag
                    )))].map(tag => (
                        <Tab label={tag}
                            value={tag}
                            className={tabValue === tag ? 'customTabs_item active' : 'customTabs_item'}
                        />
                    ))}



                </Tabs>
                <div className="row">
                    {
                        Data.portfolio.map((project, i) => (
                            <>
                                {
                                    tabValue === project.tag || tabValue === 'All' ? (
                                        <div className="col-xs-12 col-sm-6 col-md-4" key={i}>
                                            <div className="image-flip" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(pd => (
                                                setProjectDialog(project)
                                            ))} >
                                                <motion.div
                                                     initial={{ opacity:0 }}
                                                     animate={{ opacity:1 }}
                                                     transition={{duration: 2}}
                                                
                                                    className="mainflip flip-0">
                                                    <div className="frontside">
                                                        <div className="card custom_card">
                                                            <div className="card-body text-center">
                                                                <p><img className=" img-fluid" src={project.image} alt="card image" /></p>
                                                                <h4 className="card-title custom_card_title">{project.title}</h4>


                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="backside">
                                                        <div className="card">
                                                            <div className="card-body text-center mt-4">

                                                                <p className="card-text">{project.description}</p>
                                                                <div className="list-inline">
                                                                    <a className="btn bg-active btn-sm">
                                                                        <FontAwesomeIcon icon={faPlus} color='white' rotation={180} />
                                                                    </a>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    

                                                </motion.div>
                                            </div>
                                            <motion.div
                                                initial={{ opacity:0 }}
                                                animate={{ opacity:1 }}
                                                transition={{duration: 2.2}}
                                                className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">{projectDialog?.title}</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="card">
                                                                <img src={projectDialog?.image} className="card-img-top w-100" alt="..." />
                                                                <div className ="card-body">
                                                                <p className ="card-text"></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">

                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            
                                            
                                        </div>

                                    ) : null
                                }


                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
