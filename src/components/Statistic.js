import React from 'react';

const Statistic = props => (
    <div className="col-md-3">
        <div className="Statistic">
            <h1>{props.children}</h1>
            <p>{props.description}</p>
        </div>
    </div>
);

export default Statistic;