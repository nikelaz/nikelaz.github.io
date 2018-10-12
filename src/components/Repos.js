import React from 'react';

const Repos = props => (
    <div className="col-md-6">
        <div className="Repos">
            <ul>
                {props.data.map(repo => <li><a href={"https://github.com/nikelaz/" + repo}>{repo}</a></li>)}
            </ul>
        </div>
    </div>
);

export default Repos;