import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap, Popup } from 'react-leaflet'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import './index.scss';
import 'leaflet/dist/leaflet.css';

const Contact = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    useEffect(()=>{
        setTimeout(()=>{
              setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs
            .sendForm(
                'service_o0ah7vg',
                'template_wsbx1b9',
                refForm.current,
                'gD2Umj7GhDJXGK7lm'
            )
            .then(
                ()=>{
                    alert('Message successfully sent!');
                },
                ()=>{
                    alert('Failed to send message');
                }
            )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        I'm interested in moving companies forward. I love to use my skills to improve your capacities and create responsives and efficient applications.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND' onClick={sendEmail}/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                   Jorge Barboza,
                   <br />
                   Atlanta, GA 
                   <br />
                   USA
                   <span>jorge@cloud-go.net</span>
                </div>  
                <div className='map-wrap'>
                    <MapContainer center={[33.75764406049385, -84.40207369488698]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[33.75764406049385, -84.40207369488698]}>
                            <Popup>If you are around, give me a call!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
};

export default Contact;