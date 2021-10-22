import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Bg from './bg.jpg'
import Bg1 from './bg2.png'
import './Resume.css'
import { motion } from "framer-motion"
const Resume = () => {
    var bangla = 100
    var english = 95
    var hindi = 65
    return (
        <div className="resume p-4  mb-4 bg-light mt-3">
            <div className="container-fluid">
                <div className="heading">
                    <span className='text-muted'>Education & Skill</span>
                    <hr />
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 2.1 }}    className="timeline block">
                            <div className="tl-item">
                                <div className="tl-dot b-warning"></div>
                                <div className="tl-content">
                                    <div className="active name">Secondary School</div>
                                    <div className="tl-date  mt-1">2015</div>
                                </div>
                            </div>
                            <div className="tl-item">
                                <div className="tl-dot b-warning "></div>
                                <div className="tl-content">
                                    <div className="active name">Higher Secondary School</div>
                                    <div className="tl-date mt-1">2017</div>
                                </div>
                            </div>
                            <div className="tl-item">
                                <div className="tl-dot b-warning"></div>
                                <div className="tl-content">
                                    <div className="active name">BSc. in CSE</div>
                                    <div className="tl-date mt-1">2018-2022</div>
                                </div>
                            </div>


                        </motion.div>

                    </div>
                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 2.2 }}
                        className="col-md-6 block">
                        <div className="progressbar pb-2">
                            <div className="label">
                                <span>JS</span>

                            </div>
                            <ProgressBar completed={85} bgColor='orangered' isLabelVisible={true} baseBgColor={'#D3D3D3'} transitionDuration={'1.5s'} transitionTimingFunction={'ease-in-out'} ariaValuetext={60} />
                        </div>
                        <div className="progressbar pb-2">
                            <div className="label">
                                <span>React</span>

                            </div>
                            <ProgressBar completed={55} bgColor='orangered' isLabelVisible={true} baseBgColor={'#D3D3D3'} transitionDuration={'1.5s'} transitionTimingFunction={'ease-in-out'} ariaValuetext={60} />
                        </div>
                        <div className="progressbar pb-2">
                            <div className="label">
                                <span>Flutter</span>

                            </div>
                            <ProgressBar completed={70} bgColor='orangered' isLabelVisible={true} baseBgColor={'#D3D3D3'} transitionDuration={'1.5s'} transitionTimingFunction={'ease-in-out'} ariaValuetext={60} />
                        </div>
                        <div className="progressbar  pb-2">
                            <div className="label">
                                <span>Django</span>

                            </div>
                            <ProgressBar completed={45} bgColor='orangered' isLabelVisible={true} baseBgColor={'#D3D3D3'} transitionDuration={'1.5s'} transitionTimingFunction={'ease-in-out'} ariaValuetext={60} />
                        </div>
                        <div className="progressbar pb-2">
                            <div className="label">
                                <span>Django Rest FrameWork</span>

                            </div>
                            <ProgressBar completed={75} bgColor='orangered' isLabelVisible={true} baseBgColor={'#D3D3D3'} transitionDuration={'1.5s'} transitionTimingFunction={'ease-in-out'} ariaValuetext={60} />
                        </div>



                    </motion.div>
                </div>
                <div className="row py-3 mt-3 text-center block d-flex align-items-center justify-content-center">
                
                    <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 2.5 }}    className=" col-md-6">
                        <img className='w-100' src={Bg1} alt="" />
                       

                       


                    </motion.div>
                    <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 2.8 }}    className=" col-md-6">
                        <div className="l-t mt-3">
                            <span className='text-muted'>Languages</span>
                            <hr />
                            <div className="row mt-3">

                                <div className="col-md-4 c col-sm-4 text-center">
                                    <span className='text-center'>Bangla</span>
                                    <CircularProgressbar value={bangla} text={`${bangla}%`} counterClockwise={true}
                                        styles={buildStyles({
                                            // Rotation of path and trail, in number of turns (0-1)
                                            rotation: 0.25,

                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',

                                            // Text size


                                            // How long animation takes to go from one percentage to another, in seconds
                                            pathTransitionDuration: 0.5,

                                            // Can specify path transition in more detail, or remove it entirely
                                            // pathTransition: 'none',

                                            // Colors
                                            pathColor: `rgba(255, 50, 31, ${bangla / 100})`,
                                            textColor: '#f88',
                                            trailColor: '#d6d6d6',
                                            backgroundColor: '#3e98c7',
                                        })}
                                    />
                                </div>
                                <div className="col-md-4 c col-sm-4 text-center">
                                    <span className='text-center'>English</span>
                                    <CircularProgressbar value={english} text={`${english}%`}
                                        styles={buildStyles({
                                            // Rotation of path and trail, in number of turns (0-1)
                                            rotation: 0.25,

                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',

                                            // Text size


                                            // How long animation takes to go from one percentage to another, in seconds
                                            pathTransitionDuration: 0.5,

                                            // Can specify path transition in more detail, or remove it entirely
                                            // pathTransition: 'none',

                                            // Colors
                                            pathColor: `rgba(255, 50, 31, ${english / 100})`,
                                            textColor: '#f88',
                                            trailColor: '#d6d6d6',
                                            backgroundColor: '#3e98c7',
                                        })}
                                    />
                                </div>
                                <div className="col-md-4 c col-sm-4 text-center">
                                    <span className='text-center'>hindi</span>
                                    <CircularProgressbar value={hindi} text={`${hindi}%`} counterClockwise={true}
                                        styles={buildStyles({
                                            // Rotation of path and trail, in number of turns (0-1)
                                            rotation: 0.25,

                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'butt',

                                            // Text size


                                            // How long animation takes to go from one percentage to another, in seconds
                                            pathTransitionDuration: 0.5,

                                            // Can specify path transition in more detail, or remove it entirely
                                            // pathTransition: 'none',

                                            // Colors
                                            pathColor: `rgba(255, 50, 31, ${hindi / 100})`,
                                            textColor: '#f88',
                                            trailColor: '#d6d6d6',
                                            backgroundColor: '#3e98c7',
                                        })}
                                    />
                                </div>

                            </div>
                        </div>


                    </motion.div>
                </div>

            </div>


        </div>
    )
}

export default Resume
