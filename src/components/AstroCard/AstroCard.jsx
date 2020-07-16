import React from 'react';

function AstroCard({ astro }) {
    return(
        <>
            <div className=" card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img alt="astro" className="activator" src={astro.image ? astro.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{astro.name}<i className="material-icons right">more_vert</i></span>
                    <p>{astro.description}</p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{astro.name}<i className="material-icons right">close</i></span>
                    <h6>Name: {astro.name}</h6>
                    <div>Type:  {astro.type}</div>
                    <div>Image:  {astro.image}</div>
                    <div>Location:  {astro.location}</div>
                    <p>{astro.notes}</p>
                </div>
            </div>
        </>
    ) 
}
export default AstroCard;