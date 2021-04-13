import React from 'react';
import MySecondComponent from './MySecondComponent.js';

class MyFirstComponent extends React.Component {

    render() {
        return (
            <div>
                <MySecondComponent />
                <h1>Hello from React!</h1>
                <MySecondComponent />
            </div>
        );
    }
}

export default MyFirstComponent;
