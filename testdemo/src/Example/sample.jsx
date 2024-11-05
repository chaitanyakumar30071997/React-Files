import React from 'react';
import Testcomp from './Testcomp';

const Mango = () => {
    return <h2>Mangoes are sweet</h2>;
};

const Grapes = () => {
    return(
        <h2>Grapes are Good  </h2>
    )
}

function Sample() {
    return (
        <div>
            <h1>Sample Files</h1>
            <Mango />
            <Grapes />
            <Testcomp/>
        </div>
    );
}

export default Sample;
