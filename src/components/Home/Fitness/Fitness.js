import React from 'react';
import FitnessCard from './FitnessCard/FitnessCard';


const Fitness = () => {
    return (
        <section className='container'>
            <div className="row mt-5 d-flex justify-content-center">
               <div className="fitness-header-text text-center py-5 w-100" >
               <h2 style={{color: '#29282D', fontSize:'50px', fontFamily: 'Teko'}} className='mt-5'>SET HIGH FITNESS GOALS</h2>
                After you decide to start training we will make sure you get the best fitness program. Our <br /> sport experts and latest sports equipment are the winning combination.
               </div>
               <div className="col-md-4">
                   <div>
                       <FitnessCard></FitnessCard>
                   </div>
               </div>
               <div className="col-md-4">
               <div>
                       <FitnessCard></FitnessCard>
                   </div>
               </div>
               <div className="col-md-4">
               <div>
                       <FitnessCard></FitnessCard>
                   </div>
               </div>
            </div>

        </section>
    );
};

export default Fitness;