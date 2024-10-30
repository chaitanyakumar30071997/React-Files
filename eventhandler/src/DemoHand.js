import React, { useState } from 'react';

const EventHan = () => {
    const [score, updatedScore] = useState(0);

    function updatedScoreFun() {
        updatedScore(score + 1);
    }

    function resetFun() {
        updatedScore(0);
    }

    return (
        <div>
            <h1>Event Handling </h1>
            <h2> 1. Event Handling allows user interactions </h2>                
            <h2> 2. Which may be click , load Event , mouse</h2>
            <h2> 3. when ever perform the event we should use </h2>
            <h2> 4. camel className</h2>
            <h2> 5. How to call</h2>
            <h2> 6. We should use {} to call the event Handlers</h2>


            <p>CricketScore:{score}</p>
            <button onClick={updatedScoreFun}>ScoreVatde</button>
            <button onClick={resetFun}>Reset</button>
        </div>
    );
};

export default EventHan;
