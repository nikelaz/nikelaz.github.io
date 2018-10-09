import React from 'react';
import ReactDOM from 'react-dom';

const HelloComponent = props => <p>Hello, {props.name}</p>;

ReactDOM.render(<HelloComponent name="Nikola" />, document.getElementById('app'));