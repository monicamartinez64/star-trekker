import React from 'react';
import ObservationCard from '../../components/ObservationCard/ObservationCard';


function ObservationListPage(props) {
    return (
        <>
        <main>
        <h4>Observation List</h4>
        <ObservationCard />
        {props.observations.map(observation =>
                <ObservationCard 
                    key={observation._id}
                    observation={observation}
                    user={props.user}
                />    
            )}
        </main>
        </>
    );
}

export default ObservationListPage;