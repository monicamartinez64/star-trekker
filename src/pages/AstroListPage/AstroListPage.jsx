import React from 'react';
import './AstroListPage.css';
import AstroCard from '../../components/AstroCard/AstroCard';

function AstroListPage(props) {
    return (
        <>
        <main>
        <h4>Astro List</h4>
        <div className="AstroListPage-grid">
            <div className="col s 6">
            {props.astros.map(astro =>
                <AstroCard 
                    key={astro._id}
                    astro={astro}
                    user={props.user}
                    handleDeleteAstro={props.handleDeleteAstro}
                />    
            )}
            </div>
        </div>
        </main>
        </>
    );
}

export default AstroListPage;