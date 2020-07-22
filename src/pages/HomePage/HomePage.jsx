import React from 'react';

function HomePage(props) {
    return (
        <>
        <main>
        <h4>NASA Photo Of The Day</h4>
        <div className="row">
        <div className="col s6">
        <div className="card-panel deep-purple accent-4">               
        <h7><strong>
        What is creating the structure in Comet NEOWISE's tails? Of the two tails evident, the blue ion tail on the left points directly away from the Sun and is pushed out by the flowing and charged solar wind. Structure in the ion tail comes from different rates of expelled blue-glowing ions from the comet's nucleus, as well as the always complex and continually changing structure of our Sun's wind. Most unusual for Comet C/2020 F3 (NEOWISE), though, is the wavy structure of its dust tail. This dust tail is pushed out by sunlight, but curves as heavier dust particles are better able to resist this light pressure and continue along a solar orbit.  Comet NEOWISE's impressive dust-tail striations are not fully understood, as yet, but likely related to rotating streams of sun-reflecting grit liberated by ice melting on its 5-kilometer wide nucleus.  The featured 40-image conglomerate, digitally enhanced, was captured three days ago through the dark skies of the Gobi Desert in Inner Mongolia, China. Comet NEOWISE will make it closest pass to the Earth tomorrow as it moves out from the Sun. The comet, already fading but still visible to the unaided eye, should fade more rapidly as it recedes from the Earth.</strong>
        </h7>
        </div>
        </div>
        <div className="col s6">
        <img className="materialboxed" alt="astro" src="https://apod.nasa.gov/apod/image/2007/Neowise_Lin_960.jpg" />
        </div> 
        </div>
        </main>
        </>
    );
}

export default HomePage;