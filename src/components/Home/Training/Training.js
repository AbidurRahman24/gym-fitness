import React from 'react';
import training1 from '../../../img/training-1.jpg'
import training2 from '../../../img/training-2.jpg'
import training3 from '../../../img/training-3.jpg'
import training4 from '../../../img/training-4.jpg'
import TrainingCard from '../TrainingCard/TrainingCard';
const trainigData = [
    {
        title: 'BODY SHAPE',
        mainTitle: 'CROSSFIT',
        description: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas',
        footerText: 'READ MORE',
    },
    {
        img: training1
    },
    {
        title: 'RELEX PROGRAM',
        mainTitle: 'BODY BALANCE',
        description: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas',
        footerText: 'READ MORE',
    },
    {
        img: training2
    },
    {
        title: 'CARDIO WORKFLOW',
        mainTitle: 'CARDIO',
        description: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas',
        footerText: 'READ MORE',
    },
    {
        img: training3
    },
    {
        title: 'POWER FLOW',
        mainTitle: 'BOX',
        description: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas',
        footerText: 'READ MORE',
    },
    {
        img: training4
    },
]

const Training = () => {
    return (
        <section className="training-container">
            <div className="row">
                <div className='trainig-text text-center pt-4'>
                    <h2 className='pt-3'>TRAINING PROGRAMS</h2>
                    <p >Let us take your workout routines to the next level with our full-body programs and <br /> intensity challenges. Find a training that matches your needs.</p>
                </div>
                {
                    trainigData.map(training =><TrainingCard training={training}></TrainingCard>)
                }
            </div>
        </section>
    );
};

export default Training;