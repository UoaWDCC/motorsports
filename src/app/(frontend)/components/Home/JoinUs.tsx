import './JoinUs.css';
import react from 'react';
import JoinUsText from './JoinUsText';
import ImageDisplay from './ImageDisplay';

export default function JoinUs(){

    const content = `
        <h1>ACCELERATE WITH VROOM</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan lectus et eleifend rutrum. In scelerisque id ligula eu rhoncus.</p>
        <p>Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur, interdum nulla vel, vehicula nisl.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        `;
    const image_details = {
        imageUrl: "/images/join_us.png",
        alt: "Join Us",
        linkUrl: " "
    };

    return(
        <section className="joinus">
            <div className="joinus-container">
                <div className='joinus-content'>
                    <div className='joinus-left'>
                        <JoinUsText htmlContent={content}/>
                        <div className="join-us-button-div">
                            <button className="join-now-button">JOIN NOW</button>
                        </div>
                    </div>

                    <div className="joinus-right">
                        <ImageDisplay linkUrl={image_details.linkUrl} imageUrl={image_details.imageUrl} alt={image_details.alt}/>
                    </div>
                </div>
            </div>
        </section>
    );
}