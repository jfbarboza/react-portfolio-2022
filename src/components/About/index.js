import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () =>{
    const [letterClass, setLetterClass] = useState('text-animate'); 
    
    useEffect(()=>{
        setTimeout(()=>{
              setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                <h1><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ','m','e']}
                            idx={15}
                        />
                </h1>
                <p>
                    Well... in 2007 I won a Grammy. Weird, right? You're looking at the about page of a Web Developer and he starts with a crazy claim not related with coding at all. But bear with me and you see how it all makes sense in a moment.</p>
                    <p>
                        I am really, really passionate about coding, my wife call my laptop "the other", and fair enough, I probably spend more time in my laptop than talking to her. I started coding when I was in fourth grade and it's being my obssesion ever since. Logically, I end up studying Computer Engineering back in my hometown of Maracaibo, Venezuela.
                    </p>
                    <p>
                        One year before graduation, I started a company to create multimedia products from the music industry in Venezuela, but as you can imagine, the images and video quality to include in this pages wasn't up to standards in the early 2000s in my country, so we started providing these services and mixing my passion for technology with the beautiful art of film production was a mix that in 2007 allowed my company to produce a Latin Grammy Award Winning Best - Music Video (Write me and I'd send it your way).
                    </p>
                    <p>Now, winning that award meant that I could apply for an US Residency and that's how in 2008 I've end up moving to sunny Florida with my family. Sounds like a happy ending, but as every immigrant story, it was not easy, I had to start from scratch and that I did. People started calling me not to produce videos but to create Web Pages, Web Apps and Native Apps and in 2015 I end up landing a position in an international hospitality company where I've have the pleasure to implement my knowledge.</p>
                    <p>Since then, I've gained experience in the most up to date development tools and frameworks, passing from basic HTML, CSS and JavaScript to create applications using Ionic, Angular, React and managing the back end APIs that allow us to feed and power the tools that keep any modern company running.</p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={ faAngular } color="#DD0031"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={ faHtml5 } color="#F06529"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={ faCss3 } color="#288a4d9"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={ faReact } color="#5ed4f4"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={ faJsSquare } color="#efd81d"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={ faGitAlt } color="#ec4d28"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
        
    )
 }

export default About;