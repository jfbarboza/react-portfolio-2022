import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import portImage01 from '../../assets/images/portfolio-image-01.jpg';
import portImage02 from '../../assets/images/portfolio-image-02.jpg';
import portImage03 from '../../assets/images/portfolio-image-03.jpg';
import portImage04 from '../../assets/images/portfolio-image-04.jpg';
import portImage05 from '../../assets/images/portfolio-image-05.jpg';
import portImage06 from '../../assets/images/portfolio-image-06.jpg';
import emailjs from '@emailjs/browser';
import './index.scss';
import 'leaflet/dist/leaflet.css';

const Portfolio = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        setTimeout(()=>{
              setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const portfolioItems = [
        {
            link: 'https://nikkibeach.com',
            src: portImage01,
            caption_title: 'Nikki Beach',
            caption_description: 'Nikki Beach is the first and original luxury beach club concept and I have managed their website for 7 years.',
            key: 1
        },
        {
            'link': 'https://thecometcontent.com',
            'src': portImage02,
            'caption_title': 'The Commet Content',
            'caption_description': 'Production company with clients like Discovery Channel, Master Card and Shutter Stock'
        },
        {
            'link': 'https://monicachacin.com',
            'src': portImage03,
            'caption_title': 'Monica Chacin',
            'caption_description': 'The number one freelancer copywriter in Spain'
        },
        {
            'link': 'https://barrigonplastering.com',
            'src': portImage04,
            'caption_title': 'Barrigon Plastering',
            'caption_description': 'Company specialize on plastering and construction'
        },
        {
            'link': 'https://porschexholman.com',
            'src': portImage05,
            'caption_title': 'Porsche Holman',
            'caption_description': 'Car dealership stablished in different locations around US'
        },
        {
            'link': 'https://louisvarela.com',
            'src': portImage06,
            'caption_title': 'Louis Varela Photography is portfolio site for a creative and dedicated photographer.',
            'caption_description': 'Portfolio dedicated to '
        }
    ]

    const renderProjects = () =>{

        return (
        portfolioItems.map((item) =>{
            return(
                <div className='project-item'>
                    <img src={item.src} alt={item.caption_title}/>
                </div>
            )
        })
        )
    }
    
    return(
        <>
            <div className="container portfolio-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            strArray={['M','y',' ','w','o','r','k']}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I like to make projects fun!
                    </p>
                </div>
                <div className='projects-gallery'>

                    
                        {renderProjects()}
                    
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
};

export default Portfolio;