import React from 'react';
import './AstroListPage.css';
import AstroCard from '../../components/AstroCard/AstroCard';

function AstroListPage(props) {
    return (
        <>
        <h4>Astro List</h4>
        <div className="AstroListPage-grid">
            {props.astros.map(astro =>
                <AstroCard 
                    key={astro._id}
                    astro={astro}
                    user={props.user}
                />    
            )}
        </div>
        </>
    );
}

export default AstroListPage;