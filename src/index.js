import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/normalize.css/normalize.css';

import Header from './components/Header';

const Application = props => (
    <div className="container">
        <div className="row">
            <div className="col">
                <Header />
            </div>
        </div>
    </div>
);

ReactDOM.render(<Application />, document.getElementById('app'));