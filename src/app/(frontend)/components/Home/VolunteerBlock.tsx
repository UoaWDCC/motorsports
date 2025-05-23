import ImageDisplay from "./ImageDisplay";


export default function VolunteerBlock() {
    return(
        <div className="volunteer-block">
            <div className="volunteer-image">
                <ImageDisplay linkUrl="https://www.example.com" imageUrl="images/event1.jpg" alt="Volunteer Image" classname=""/>
            </div>
            <div className="volunteer-text">
                <div className="volunteer-text-container">
                    <div className="volunteer-text-content">
                        <p>
                            AS A VROOM MEMBER <strong>VOLUNTEERING</strong> OPPORTUNITIES MIGHT APPEAR THROUGHOUT THE YEAR, ALLOWING YOU TO GET INVOLVED IN THE BEHIND THE SCENES AND SUPPORT OUR CLUB.
                            <br /><br />
                            MAKE SURE TO CLICK THE VOLUNTEER BUTTON TO BE PART OF THE EVENT TEAM!
                        </p>
                    </div>
                    <div className="volunteer-link">
                        <a href="#">VOLUNTEER</a>
                    </div>
                </div>
            </div>
        </div>
    );
}