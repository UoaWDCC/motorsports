import react from 'react';
import './Volunteer.css';
import VolunteerBlock from './VolunteerBlock';


export default function Volunteer(){
    return(
        <section className="volunteer-section">
            <div className='volunteer-container'>
                <div className='volunteer-header'>
                    <div className='volunteer-title'>Volunteering</div>
                </div>
                <div className='volunteer-body'>
                    <VolunteerBlock />
                </div>
            </div>
        </section>
    );
}