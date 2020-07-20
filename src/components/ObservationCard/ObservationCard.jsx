import React from 'react';
import { Link } from 'react-router-dom';

function AstroCard({ astro, handleDeleteAstro }) {
    return(
        <>
            <div className="card black">
                <div className="card-image waves-effect waves-block waves-light">
                    <img alt="astro" className="activator" src={astro.image ? astro.image : "https://images.unsplash.com/photo-1548124771-9f2040b66df8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} onClick={()=> {}}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator text-darken-4">{astro.name}<i className="material-icons right">more_vert</i></span>
                    <p>{astro.notes}</p>
                </div>
                <div className="card-reveal black">
                    <span className="card-title">{astro.name}<i className="material-icons right">close</i></span>
                    <h6>Name: {astro.name}</h6>
                    <p>Type:  {astro.type}</p>
                    <div>Image:  {astro.image}</div>
                    <div>Location:  {astro.location}</div>
                    <p>{astro.notes}</p>
                    <button type="submit" className="btn purple" onClick={() => handleDeleteAstro(astro._id)}>
                    <i className="material-icons left">delete</i>    
                        Delete Movie
                    </button>
                    <Link
                        className="btn purple white-text"
                        to={{
                            pathname: '/edit',
                            state: {astro}
                        }}
                    ><i className="material-icons left">build</i>
                        Edit Movie
                    </Link>
                </div>
            </div>
        </>
    ) 
}
export default AstroCard;