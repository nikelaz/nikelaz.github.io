import React from 'react';

import Navigation from './Navigation';

const Header = () => {
    return (<header>
        <div class="row">
            <div class="col-md-5">
                <a class="Title" href="#">Nikola Lazarov</a>
            </div>
            <Navigation />
        </div>
    </header>);
};

export default Header;