import React from 'react';
import './AstroListPage.css';
import AstroCard from '../../components/AstroCard/AstroCard';

function AstroListPage(props) {
    return (
        <>
        <div className="AstroListPage-grid">
            {props.astros.map(astro =>
                <AstroCard 
                    key={astro._id}
                    astro={astro}
                />    
            )}
        </div>
        </>
    );
}

export default AstroListPage;