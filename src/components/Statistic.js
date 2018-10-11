import React from 'react';

const Statistic = props => (
    <div class="col-md-3">
        <div class="Statistic">
            <h1>{props.children}</h1>
            <p>{props.description}</p>
        </div>
    </div>
);

export default Statistic;