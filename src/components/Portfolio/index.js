import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap, Popup } from 'react-leaflet'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import './index.scss';
import 'leaflet/dist/leaflet.css';

const Portfolio = ()=>{
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
            <section class="gallery">
  <div class="container">
    <div class="grid">
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
          <img src="https://source.unsplash.com/8b1cWDyvT7Y" />
          <figcaption class="img-content">
            <h2 class="title">Smart Watch</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Smart Watch</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
          <img src="https://source.unsplash.com/5VXH4RG88gc" />
          <figcaption class="img-content">
            <h2 class="title">Camera Film</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Camera Film</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
          <img src="https://source.unsplash.com/XtUd5SiX464">
          <figcaption class="img-content">
            <h2 class="title">Coffee</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Coffee</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <img src="https://source.unsplash.com/JYGnB9gTCls" />
          <figcaption class="img-content">
            <h2 class="title">Phone</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Phone</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <img src="https://source.unsplash.com/-RBuQ2PK_L8" />
          <figcaption class="img-content">
            <h2 class="title">Keyboard</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Keyboard</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12">
        <figure class="img-container">
          <img src="https://source.unsplash.com/P44RIGl9V54" />
          <figcaption class="img-content">
            <h2 class="title">Wrist Watch</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Wrist Watch</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
    </div>
  </div>
</section>
            <Loader type="pacman"/>
        </>
    )
};

export default Portfolio;