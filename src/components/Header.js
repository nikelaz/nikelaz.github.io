import React from 'react';

import Navigation from './Navigation';

const Header = () => {
    return (<header>
        <div className="row">
            <div className="col-md-5">
                <a className="Title" href="#">Nikola Lazarov</a>
            </div>
            <Navigation />
        </div>
    </header>);
};

export default Header;