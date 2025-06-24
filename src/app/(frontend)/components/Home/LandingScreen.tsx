import react from 'react';
import ImageDisplay from './ImageDisplay';
import SocialComponent from './SocialComponent';
import "./LandingScreen.css"
import ScrollDownButton from './ScrollButtonLanding';

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
        { imageUrl: "/images/instagram.png", linkUrl: "https://www.instagram.com/vroom_uoa/", classname: "instagram" },
        { imageUrl: "/images/tiktok.png", linkUrl: "https://www.tiktok.com/@vroomuoa", classname: "tiktok" },
        { imageUrl: "/images/facebook.png", linkUrl: "https://www.facebook.com/VroomUoA/", classname: "facebook" },
        { imageUrl: "/images/twitch.png", linkUrl: "https://www.twitch.tv/vroom_uoa", classname: "twitch" },
        { imageUrl: "/images/discord.png", linkUrl: "https://discord.gg/FuXRhXSh6F", classname: "discord" },
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
        <ScrollDownButton/>
    </section>
  );
}