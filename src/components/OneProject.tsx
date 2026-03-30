import { useState } from 'react';

import './OneProject.scss';

type ProjectProps = {
    title: string;
    image: string;
    imageAlt: string;
    description: string;
    link: string;
    extraInfo: string;
    gitlink: string;
    gitlink2?: string;
};


function OneProject({title, image, imageAlt, description, link, extraInfo, gitlink, gitlink2}: ProjectProps) {
const [show, setShow] = useState(false);

return (

        <div className='project'>
            <h2>{title}</h2>
            <img className='projectImg' src={image} alt={imageAlt}></img>
            <p className='lineheight'>{description}</p>
            <div className='projectBtns'>
            <button className="moreInfo" onClick={() => setShow(choice => !choice)}>{show ? (<>Dölj information<span className="material-symbols-outlined">
arrow_drop_up
</span></>) : (<>Visa mer information<span className="material-symbols-outlined">
arrow_drop_down
</span></>)}</button>
            {show && <p className='lineheight'>{extraInfo}</p>}
            <a className="projectlink" target='_blank' href={link}>Till sidan</a>
            <div className='gitlinks'>
            <a className='gitLink' target='_blank' href={gitlink}>Visa Git-repo</a>
            {gitlink2 && <a className='gitLink' target='_blank' href={gitlink2}>Visa Git-repo backend</a>}
            </div>
            </div>
        </div>

);
}

export default OneProject;