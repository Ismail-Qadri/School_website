import React from 'react'
import Navbar from './Navbar';
import { ITI_details } from '../Sections/ITI_details';
import Contact from '../Sections/Contact';
import { ITI_poster } from '../Sections/ITI_poster';
import ITI_messages from '../Sections/ITI_messages';


const ITI_college = () => {
    return (
        <div className="iti-container">
            <Navbar />
            <div> <h1 className='iti-heading'>ITI College</h1></div>
            <ITI_poster />
            <ITI_messages/>
            <ITI_details />
            <Contact />
           
         </div>
      );
    };

export default ITI_college