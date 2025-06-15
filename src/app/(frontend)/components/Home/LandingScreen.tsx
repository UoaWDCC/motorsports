import react from 'react';
import ImageDisplay from './ImageDisplay';
import SocialComponent from './SocialComponent';
import "./LandingScreen.css"

export default function LandingScreen() {
    const image_details = {
        imageUrl: "/images/header.jpg",
        alt: "Join Us",
        linkUrl: "/"
    };
    const logo_image_details = {
        imageUrl: "/images/logo.png",
        alt: "Join Us",
        linkUrl: ""
    };
    const socialMedia = [
        { imageUrl: "/images/instagram.png", linkUrl: "https://www.instagram.com/" },
        { imageUrl: "/images/linkedin.png", linkUrl: "https://linkedin.com/" },
        { imageUrl: "/images/facebook.png", linkUrl: "https://www.facebook.com/" },
        { imageUrl: "/images/twitch.png", linkUrl: "https://twitter.com/" },
    ]
    const somwWord = "For Motor-sport and Car/ Bike Culture fans and newcomers alike.".toUpperCase();

  return (
    <section className='landing-screen'>
        <div className="landing-screen-container">
            <ImageDisplay linkUrl={image_details.linkUrl} imageUrl={image_details.imageUrl} alt={image_details.alt} classname="fullscreen-image dark-image"/>
        </div>
        <div className='landing-screen-logo'>
            <ImageDisplay linkUrl={logo_image_details.linkUrl} imageUrl={logo_image_details.imageUrl} alt={logo_image_details.alt} classname="medium-large-image"/>
        </div>
        <div className='landing-screen-text'>
            <span>{somwWord}</span>
        </div>
        <div className='landing-screen-social'>
            <SocialComponent socialMedia={socialMedia}/>
        </div>
        <div className='landing-screen-more'>
            <span>FIND OUT MORE</span> 
            <div className='landing-screen-arrow'>
                <ImageDisplay linkUrl="" imageUrl="images/down-arrow.png" alt=""/>
            </div>
            
        </div>
    </section>
  );
}