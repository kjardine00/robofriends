import React from "react";

const Card = () => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">
            <img alt='robots' src='https://robohash.org/test?200x200' />
            <div>
                <h2>John Doe</h2>
                <p>name@email.com</p>
            </div>
        </div>
    );
}

export default Card;